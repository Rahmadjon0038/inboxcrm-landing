import http from 'node:http'

const { BOT_TOKEN, CHAT_ID, PORT = '3000' } = process.env
if (!BOT_TOKEN || !CHAT_ID) {
  console.error('BOT_TOKEN and CHAT_ID are required')
  process.exit(1)
}

const hits = new Map()
const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 5

const limited = (ip) => {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  list.push(now)
  hits.set(ip, list)
  return list.length > MAX_HITS
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const clip = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '')

const send = (res, code, body) => {
  res.writeHead(code, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(body))
}

http
  .createServer(async (req, res) => {
    if (req.method !== 'POST' || req.url !== '/api/lead') {
      return send(res, 404, { ok: false })
    }
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress
    if (limited(ip)) return send(res, 429, { ok: false })

    let raw = ''
    for await (const chunk of req) {
      raw += chunk
      if (raw.length > 10_000) return send(res, 413, { ok: false })
    }

    let data
    try {
      data = JSON.parse(raw)
    } catch {
      return send(res, 400, { ok: false })
    }

    const name = clip(data.full_name, 100)
    const phone = clip(data.phone, 30)
    const plan = clip(data.plan, 40)
    const business = clip(data.business_info, 500)
    const lang = clip(data.lang, 5)
    if (!name || !phone || !plan) return send(res, 400, { ok: false })

    const text = [
      '🆕 <b>Yangi so\'rov — inboxcrm.uz</b>',
      `👤 ${esc(name)}`,
      `📞 ${esc(phone)}`,
      `📦 Tarif: ${esc(plan)}`,
      business ? `🏢 ${esc(business)}` : '',
      lang ? `🌐 ${esc(lang)}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    try {
      const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
      })
      if (!r.ok) {
        console.error('telegram error', r.status, await r.text())
        return send(res, 502, { ok: false })
      }
      send(res, 200, { ok: true })
    } catch (e) {
      console.error(e)
      send(res, 502, { ok: false })
    }
  })
  .listen(Number(PORT), () => console.log('lead server on', PORT))
