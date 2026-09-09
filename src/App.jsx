import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/inboxcrm-mark.svg'
import shopPostImg from './assets/shop-post.jpg'
import avatar1 from './assets/avatar-1.jpg'
import avatar2 from './assets/avatar-2.jpg'
import avatar3 from './assets/avatar-3.jpg'
import avatar4 from './assets/avatar-4.jpg'
import avatarShop from './assets/avatar-shop.jpg'
import { CONTENT, UI } from './categoryContent'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}

function Page() {
  const { lang } = useLanguage()
  const category = 'edu'
  const [leadOpen, setLeadOpen] = useState(false)
  const [leadPlan, setLeadPlan] = useState('')
  const content = CONTENT[lang][category]
  const ui = UI[lang]
  const openLead = (planName = '') => {
    setLeadPlan(planName)
    setLeadOpen(true)
  }
  const closeLead = () => setLeadOpen(false)

  return (
    <div className="bg-[#0f172a] text-[#e8eefb] font-sans overflow-x-hidden">
      <Nav ui={ui} onOpenLead={openLead} />
      <Hero ui={ui} content={content} onOpenLead={openLead} />
      <HeroDashboard ui={ui} />
      <Features ui={ui} content={content} />
      <Workflow ui={ui} content={content} />
      <Founder ui={ui} />
      <Pricing ui={ui} content={content} onOpenLead={openLead} />
      <Footer ui={ui} />
      <LeadModal
        ui={ui}
        open={leadOpen}
        onClose={closeLead}
        plans={content.plans}
        initialPlan={leadPlan}
      />
    </div>
  )
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-[#b6c2d6] hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

function LanguageSwitch() {
  const { lang, setLang } = useLanguage()
  const btn = (code) =>
    `text-xs font-bold px-2.5 py-1.5 rounded-md transition-colors ${
      lang === code
        ? 'bg-[#eef3fa] text-[#0f172a]'
        : 'text-[#b6c2d6] hover:text-white'
    }`
  return (
    <div className="flex items-center gap-1 bg-slate-400/10 border border-slate-400/18 rounded-lg p-1">
      <button className={btn('en')} onClick={() => setLang('en')} type="button">
        EN
      </button>
      <button className={btn('uz')} onClick={() => setLang('uz')} type="button">
        UZ
      </button>
    </div>
  )
}

function Nav({ ui, onOpenLead }) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0f172a]/72 border-b border-slate-400/14">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center gap-5">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="InboxCRM" className="h-8.5 block" />
          <span className="text-[19px] font-extrabold tracking-tight text-[#eef3fa]">
            Inbox<span className="text-[#8b9bff]">CRM</span>
          </span>
          <span className="font-mono text-[10px] tracking-widest text-violet-300 border border-violet-400/45 bg-violet-500/14 px-1.5 py-0.5 rounded">
            AI
          </span>
        </a>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="#xizmatlar">{ui.nav.xizmatlar}</NavLink>
          <NavLink href="#imkoniyatlar">{ui.nav.imkoniyatlar}</NavLink>
          <NavLink href="#tariflar">{ui.nav.tariflar}</NavLink>
          <NavLink href="#aloqa">{ui.nav.aloqa}</NavLink>
        </div>
        <div className="flex items-center gap-2.5 ml-3">
          <LanguageSwitch />
          <a
            href="https://app.inboxcrm.uz"
            className="text-sm font-semibold text-[#d7e0f0] border border-slate-400/28 px-4 py-2.5 rounded-[10px] hover:bg-slate-400/12 hover:text-white transition-colors"
          >
            {ui.nav.kirish}
          </a>
          <button
            type="button"
            onClick={() => onOpenLead()}
            className="text-sm font-bold text-white bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 px-4.5 py-2.5 rounded-[10px] shadow-[0_12px_28px_-12px_rgba(99,102,241,0.9)] hover:brightness-110 transition-all"
          >
            {ui.nav.sinab}
          </button>
        </div>
      </div>
    </div>
  )
}

function Hero({ ui, content, onOpenLead }) {
  return (
    <div
      id="top"
      className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 flex flex-col items-center gap-7 text-center"
    >
      <div className="absolute -top-30 left-1/2 w-[820px] h-[520px] -translate-x-1/2 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(124,92,246,0.28),rgba(15,23,42,0)_70%)]" />
      <h1 className="relative m-0 max-w-3xl text-[clamp(34px,5.2vw,62px)] leading-[1.06] font-extrabold tracking-tight text-balance">
        {content.heroPlain}
        <span className="text-gradient">{content.heroGradient}</span>
      </h1>
      <p className="relative m-0 max-w-2xl text-[clamp(15px,1.6vw,19px)] leading-relaxed text-[#a9b6cd] text-balance">
        {content.heroDesc}
      </p>
      <div className="relative flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={() => onOpenLead()}
          className="text-[15px] font-bold text-white bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 px-6.5 py-4 rounded-xl shadow-[0_18px_40px_-16px_rgba(99,102,241,0.95)] hover:brightness-110 hover:-translate-y-px transition-all"
        >
          {ui.hero.start}
        </button>
      </div>
      {ui.hero.note && (
        <div className="relative text-[13px] font-medium text-[#a9b6cd]">
          {ui.hero.note}
        </div>
      )}
    </div>
  )
}

function ChatBubble({ gradient, avatar, name, text }) {
  return (
    <div className="flex gap-2.5 items-start">
      {avatar ? (
        <img
          src={avatar}
          alt=""
          className="w-7.5 h-7.5 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div
          className="w-7.5 h-7.5 shrink-0 rounded-full"
          style={{ background: gradient }}
        />
      )}
      <div className="min-w-0 bg-slate-400/14 rounded-xl rounded-bl-sm px-3 py-2.5">
        <div className="text-xs font-semibold text-slate-300 mb-0.5">
          {name}
        </div>
        <div className="text-[13px] leading-relaxed text-[#e8eefb]">
          {text}
        </div>
      </div>
    </div>
  )
}

function HeroDashboard({ ui }) {
  const d = ui.dashboard
  const d2 = ui.dashboard2
  const d3 = ui.dashboard3
  return (
    <div className="max-w-6xl mx-auto px-6 pt-4 pb-24">
      <div className="border border-slate-400/18 bg-gradient-to-b from-slate-800/85 to-gray-900/75 rounded-[22px] p-3.5 shadow-[0_50px_120px_-50px_rgba(79,107,246,0.75)] backdrop-blur-md">
        <div className="flex items-center gap-2.5 px-2 pb-3.5 pt-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="flex-1" />
          <div className="font-mono text-[11px] text-slate-400">
            {ui.dashboardBar}
          </div>
        </div>
        <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {/* kolonka 1: instagram suhbat */}
          <div className="bg-[#0f172a]/70 border border-slate-400/16 rounded-2xl p-4.5 flex flex-col gap-3.5 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[13px] font-bold text-[#e8eefb]">
                {d.col1Title}
              </div>
              <div className="font-mono text-[10px] text-red-300 bg-red-400/12 border border-red-400/30 px-1.5 py-0.5 rounded">
                {d.newBadge}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <ChatBubble
                avatar={avatar1}
                name={d.msg1Name}
                text={d.msg1Text}
              />
              <ChatBubble
                avatar={avatar2}
                name={d.msg2Name}
                text={d.msg2Text}
              />
            </div>
            <div className="mt-auto flex items-center gap-2 font-mono text-[11px] text-[#8fa0b8]">
              <div className="w-1.75 h-1.75 rounded-full bg-emerald-400 animate-ic-pulse" />
              {d.webhookActive}
            </div>
          </div>

          {/* kolonka 2: AI javob */}
          <div className="bg-gradient-to-b from-[#4c368c]/35 to-[#0f172a]/70 border border-violet-400/30 rounded-2xl p-4.5 flex flex-col gap-3.5 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[13px] font-bold text-[#e8eefb]">
                {d.col2Title}
              </div>
              <div className="font-mono text-[10px] text-violet-200 bg-violet-500/18 border border-violet-400/40 px-1.5 py-0.5 rounded">
                {d.responseTime}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl rounded-br-sm px-3.5 py-3 text-[13px] leading-relaxed text-white shadow-[0_16px_30px_-16px_rgba(99,102,241,0.9)]">
              {d.aiReply}
            </div>
            <div className="flex flex-col gap-1.75">
              <div className="font-mono text-[10px] tracking-widest text-[#9aa7bd] uppercase">
                {d.kbLabel}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-slate-300 bg-slate-400/14 rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex gap-2">
              <div className="flex-1 text-center text-xs font-semibold text-[#e8eefb] border border-slate-400/28 rounded-[9px] py-2.25 hover:bg-slate-400/12 transition-colors cursor-pointer">
                {d.adminTakes}
              </div>
              <div className="flex-1 text-center text-xs font-bold text-[#0f172a] bg-[#c9d4ff] rounded-[9px] py-2.25 hover:bg-white transition-colors cursor-pointer">
                {d.send}
              </div>
            </div>
          </div>

          {/* kolonka 3: lid -> telegram */}
          <div className="bg-[#0f172a]/70 border border-slate-400/16 rounded-2xl p-4.5 flex flex-col gap-3.5 min-w-0">
            <div className="text-[13px] font-bold text-[#e8eefb]">
              {d.col3Title}
            </div>
            <div className="border border-sky-400/35 bg-blue-500/10 rounded-[14px] p-3.5 flex flex-col gap-2.5 animate-ic-float">
              <div className="flex items-center gap-2.5">
                <img
                  src={avatar1}
                  alt=""
                  className="w-8 h-8 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div className="text-[13px] font-bold text-[#e8eefb]">
                    {d.leadName}
                  </div>
                  <div className="font-mono text-[10px] text-[#8fa0b8]">
                    {d.leadSource}
                  </div>
                </div>
                <div className="flex-1" />
                <div className="text-[11px] font-bold text-amber-200 bg-amber-400/14 border border-amber-400/35 px-2 py-1 rounded-md">
                  {d.leadStatus}
                </div>
              </div>
              <div className="text-xs leading-relaxed text-[#b6c2d6]">
                {d.leadDetail}
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-1.5">
              <div className="w-px h-6.5 bg-gradient-to-b from-sky-400 to-transparent" />
              <div className="font-mono text-[11px] text-[#8fa0b8]">
                {d.autoForward}
              </div>
            </div>
            <div className="border border-emerald-400/30 bg-emerald-500/8 rounded-[14px] p-3.5 flex items-center gap-3">
              <div
                className="w-8.5 h-8.5 shrink-0 rounded-[11px]"
                style={{ background: 'linear-gradient(140deg,#38bdf8,#0ea5e9)' }}
              />
              <div className="min-w-0">
                <div className="text-[13px] font-bold text-[#e8eefb]">
                  {d.channelTitle}
                </div>
                <div className="font-mono text-[10px] text-emerald-300">
                  {d.channelStatus}
                </div>
              </div>
            </div>
            <div className="mt-auto grid grid-cols-3 gap-2">
              {d.stats.map((s, i) => {
                const colors = ['#e8eefb', '#fde68a', '#6ee7b7']
                return (
                  <div
                    key={s.label}
                    className="text-center bg-slate-400/10 rounded-[10px] py-2.25 px-1"
                  >
                    <div
                      className="text-base font-extrabold"
                      style={{ color: colors[i] }}
                    >
                      {s.n}
                    </div>
                    <div className="text-[10px] text-[#8fa0b8]">{s.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ikkinchi qator: do'kon stsenariysi — manzil va telefon avtomatik yuboriladi */}
        <div className="grid gap-3.5 mt-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div className="bg-[#0f172a]/70 border border-slate-400/16 rounded-2xl p-4.5 flex flex-col gap-3.5 min-w-0">
            <div className="text-[13px] font-bold text-[#e8eefb]">
              {d2.col1Title}
            </div>
            <ChatBubble
              avatar={avatar3}
              name={d2.msgName}
              text={d2.msgText}
            />
          </div>

          <div className="md:col-span-2 bg-gradient-to-b from-[#4c368c]/35 to-[#0f172a]/70 border border-violet-400/30 rounded-2xl p-4.5 flex flex-col gap-3.5 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[13px] font-bold text-[#e8eefb]">
                {d2.col2Title}
              </div>
              <div className="font-mono text-[10px] text-violet-200 bg-violet-500/18 border border-violet-400/40 px-1.5 py-0.5 rounded">
                {d2.responseTime}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl rounded-br-sm px-3.5 py-3 text-[13px] leading-relaxed text-white shadow-[0_16px_30px_-16px_rgba(99,102,241,0.9)]">
              {d2.aiReply}
            </div>
            <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div className="flex items-center gap-2.5 border border-sky-400/30 bg-blue-500/10 rounded-[12px] px-3.5 py-3">
                <span className="text-base">📍</span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] tracking-widest text-[#9aa7bd] uppercase">
                    {d2.addressLabel}
                  </div>
                  <div className="text-[12.5px] text-[#e8eefb] leading-snug">
                    {d2.address}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 border border-emerald-400/30 bg-emerald-500/8 rounded-[12px] px-3.5 py-3">
                <span className="text-base">📞</span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] tracking-widest text-[#9aa7bd] uppercase">
                    {d2.phoneLabel}
                  </div>
                  <div className="text-[12.5px] text-[#e8eefb] leading-snug">
                    {d2.phone}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-300">
              <div className="w-1.75 h-1.75 rounded-full bg-emerald-400 animate-ic-pulse" />
              {d2.sentBadge}
            </div>
          </div>
        </div>

        {/* uchinchi qator: post -> izohlarda "+" -> AI izohga javob -> Direct davom etadi */}
        <div className="grid gap-3.5 mt-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div className="bg-black/40 border border-slate-400/16 rounded-2xl overflow-hidden flex flex-col min-w-0">
            <div className="flex items-center gap-2.5 px-3.5 py-3">
              <div
                className="w-7.5 h-7.5 shrink-0 rounded-full p-[1.5px]"
                style={{ background: 'linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)' }}
              >
                <img
                  src={avatarShop}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[12.5px] font-bold text-[#e8eefb] leading-tight">
                  {d3.postUsername}
                </div>
                <div className="text-[10.5px] text-[#8fa0b8] leading-tight">
                  {d3.postTimeAgo}
                </div>
              </div>
              <div className="text-[#8fa0b8] text-base leading-none tracking-widest">
                •••
              </div>
            </div>
            <img
              src={shopPostImg}
              alt=""
              className="h-40 w-full object-cover"
            />
            <div className="flex items-center gap-3.5 px-3.5 pt-2.75">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#e8eefb" strokeWidth="2"><path d="M20.8 4.6c-1.6-1.6-4.2-1.6-5.8 0L12 7.6l-3-3c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l8.8 8.8 8.8-8.8c1.6-1.6 1.6-4.2 0-5.8z"/></svg>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#e8eefb" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.8 8.4 8.6 8.6 0 0 1-4-.9L3 20l1.05-3.9A8.3 8.3 0 0 1 3 11.5 8.4 8.4 0 0 1 11.8 3a8.4 8.4 0 0 1 9.2 8.5z"/></svg>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#e8eefb" strokeWidth="2"><path d="M22 3 2 10.5l7 3.5 3.5 7L22 3Z"/></svg>
              <div className="flex-1" />
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#e8eefb" strokeWidth="2"><path d="M6 3h12v18l-6-4.5L6 21V3Z"/></svg>
            </div>
            <div className="px-3.5 pt-2 text-[12.5px] font-bold text-[#e8eefb]">
              {d3.postLikes}
            </div>
            <div className="px-3.5 pt-1 pb-3.5 text-[12.5px] leading-relaxed text-[#e8eefb]">
              <span className="font-bold">{d3.postUsername}</span>{' '}
              {d3.postCaption}
            </div>
          </div>

          <div className="bg-[#0f172a]/70 border border-slate-400/16 rounded-2xl p-4.5 flex flex-col gap-3 min-w-0">
            <div className="text-[13px] font-bold text-[#e8eefb]">
              {d3.commentsTitle}
            </div>
            <div className="flex flex-col gap-2.5">
              {d3.comments.map((c) => (
                <div key={c.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[12.5px]">
                    <span className="font-semibold text-slate-300">{c.name}</span>
                    <span className="text-[#e8eefb] bg-slate-400/14 rounded-md px-2 py-0.5 font-bold">
                      {c.text}
                    </span>
                  </div>
                  <div className="ml-3 pl-2.5 border-l border-violet-400/30 text-[11.5px] leading-relaxed text-violet-200">
                    {c.aiReply}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#4c368c]/35 to-[#0f172a]/70 border border-violet-400/30 rounded-2xl p-4.5 flex flex-col gap-3 min-w-0">
            <div className="text-[13px] font-bold text-[#e8eefb]">
              {d3.directTitle}
            </div>
            <div className="flex flex-col gap-2.5">
              {d3.directMessages.map((m, i) =>
                m.from === 'ai' ? (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl rounded-br-sm px-3.5 py-2.75 text-[13px] leading-relaxed text-white shadow-[0_16px_30px_-16px_rgba(99,102,241,0.9)] self-end max-w-[92%] whitespace-pre-line"
                  >
                    {m.text}
                  </div>
                ) : (
                  <ChatBubble
                    key={i}
                    avatar={avatar4}
                    name={m.name}
                    text={m.text}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionEyebrow({ children }) {
  return (
    <div className="font-mono text-xs tracking-widest uppercase text-indigo-300">
      {children}
    </div>
  )
}

const FEATURE_ICONS = [
  <div
    key="i1"
    className="w-11 h-11 rounded-[13px] bg-gradient-to-br from-violet-500 to-indigo-500 flex flex-col justify-center gap-0.75 px-2.75 box-border"
  >
    <div className="h-1 w-full rounded-full bg-white" />
    <div className="h-1 w-full rounded-full bg-white/75" />
    <div className="h-1 w-3/5 rounded-full bg-white/55 self-start" />
  </div>,
  <div
    key="i2"
    className="w-11 h-11 rounded-[13px] bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center font-mono text-[15px] font-medium text-white"
  >
    AI
  </div>,
  <div
    key="i3"
    className="w-11 h-11 rounded-[13px] bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center gap-1"
  >
    <div className="w-2 h-2 rounded-full bg-white" />
    <div className="w-2 h-2 rounded-full bg-white/70" />
    <div className="w-2 h-2 rounded-full bg-white/45" />
  </div>,
  <div
    key="i4"
    className="w-11 h-11 rounded-[13px] bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center"
  >
    <div className="w-4 h-4 rounded-[5px] bg-white" />
  </div>,
]

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-b from-slate-800/72 to-gray-900/60 border border-slate-400/16 rounded-[18px] p-6.5 flex flex-col gap-3.5 min-w-0 transition-all hover:border-indigo-300/50 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(99,102,241,0.85)]">
      {icon}
      <div className="text-lg font-bold tracking-tight">{title}</div>
      <p className="m-0 text-sm leading-relaxed text-[#a9b6cd] text-balance">
        {description}
      </p>
    </div>
  )
}

function Features({ ui, content }) {
  return (
    <div
      id="xizmatlar"
      className="max-w-6xl mx-auto px-6 pb-25 flex flex-col gap-10"
    >
      <div className="flex flex-col gap-3.5 max-w-3xl">
        <SectionEyebrow>{ui.sectionEyebrow.services}</SectionEyebrow>
        <h2 className="m-0 text-[clamp(26px,3.4vw,40px)] font-extrabold tracking-tight leading-[1.14]">
          {content.servicesTitle}
        </h2>
        <p className="m-0 text-base leading-relaxed text-[#a9b6cd] text-balance">
          {content.servicesDesc}
        </p>
      </div>
      <div className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {content.features.map((f, i) => (
          <FeatureCard
            key={f.title}
            icon={FEATURE_ICONS[i % FEATURE_ICONS.length]}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </div>
  )
}

function WorkflowCard({ num, title, description }) {
  return (
    <div className="relative bg-[#0f172a]/55 border border-slate-400/16 rounded-[18px] p-6.5 flex flex-col gap-3.5 min-w-0 transition-colors hover:border-indigo-300/50">
      <div className="font-mono text-[13px] font-medium text-[#0f172a] bg-[#c9d4ff] w-7.5 h-7.5 rounded-[9px] flex items-center justify-center">
        {num}
      </div>
      <div className="text-[17px] font-bold tracking-tight">{title}</div>
      <p className="m-0 text-sm leading-relaxed text-[#a9b6cd]">
        {description}
      </p>
    </div>
  )
}

function Workflow({ ui, content }) {
  return (
    <div
      id="imkoniyatlar"
      className="border-t border-b border-slate-400/14 bg-gradient-to-b from-[#172036]/60 to-[#0f172a]/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-22 flex flex-col gap-11">
        <div className="flex flex-wrap gap-6 items-end justify-between">
          <div className="flex flex-col gap-3 max-w-xl">
            <SectionEyebrow>{ui.sectionEyebrow.how}</SectionEyebrow>
            <h2 className="m-0 text-[clamp(26px,3.4vw,40px)] font-extrabold tracking-tight leading-[1.14]">
              {content.workflowTitle}
            </h2>
          </div>
        </div>
        <div className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
          {content.workflow.map((w, i) => (
            <WorkflowCard
              key={w.title}
              num={`0${i + 1}`}
              title={w.title}
              description={w.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Founder({ ui }) {
  const f = ui.founder
  if (!f) return null
  return (
    <div className="max-w-6xl mx-auto px-6 py-22">
      <div className="flex flex-col gap-3.5 max-w-3xl mb-10">
        <SectionEyebrow>{f.eyebrow}</SectionEyebrow>
        <h2 className="m-0 text-[clamp(26px,3.4vw,40px)] font-extrabold tracking-tight leading-[1.14]">
          {f.heading}
        </h2>
      </div>

      <div className="grid gap-8 items-start" style={{ gridTemplateColumns: 'minmax(220px, 280px) 1fr' }}>
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="w-28 h-28 shrink-0 rounded-3xl bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 flex items-center justify-center text-3xl font-extrabold text-white shadow-[0_30px_60px_-30px_rgba(99,102,241,0.9)]">
            {f.initials}
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-[#eef3fa]">
              {f.name}
            </div>
            <div className="text-sm text-[#a9b6cd] mt-0.5">{f.role}</div>
          </div>
          <a
            href={`mailto:${f.email}`}
            className="text-sm font-semibold text-[#d7e0f0] border border-slate-400/28 px-4 py-2.5 rounded-[10px] hover:bg-slate-400/12 hover:text-white transition-colors"
          >
            {f.cta}
          </a>
        </div>

        <div className="bg-gradient-to-b from-slate-800/72 to-gray-900/60 border border-slate-400/16 rounded-[20px] p-7 md:p-8 flex flex-col gap-6 min-w-0">
          <div className="flex flex-col gap-4">
            {f.bio.map((p, i) => (
              <p
                key={i}
                className="m-0 text-[15px] leading-relaxed text-[#c6d0e2]"
              >
                {p}
              </p>
            ))}
          </div>

          <blockquote className="m-0 border-l-2 border-violet-400/50 pl-4 text-base leading-relaxed text-[#eef3fa] italic">
            “{f.quote}”
          </blockquote>

          {f.stats && (
            <div className="grid grid-cols-3 gap-3 pt-2">
              {f.stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center bg-slate-400/10 rounded-[12px] py-3 px-2"
                >
                  <div className="text-lg font-extrabold text-[#eef3fa]">
                    {s.n}
                  </div>
                  <div className="text-[11px] text-[#8fa0b8] mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function fmt(n) {
  return n.toLocaleString('ru-RU').replace(/ /g, ' ')
}

function Pricing({ ui, content, onOpenLead }) {
  const plans = content.plans.map((p) =>
    content.periodToggle ? { ...p, price: fmt(p.m) } : p
  )

  return (
    <div
      id="tariflar"
      className="max-w-6xl mx-auto px-6 py-22 flex flex-col gap-9.5 items-center"
    >
      <div className="flex flex-col gap-3 items-center text-center max-w-2xl">
        <h2 className="m-0 text-[clamp(26px,3.4vw,40px)] font-extrabold tracking-tight leading-[1.14]">
          {ui.pricing.title}
        </h2>
      </div>

      <div
        className={
          plans.length === 1
            ? 'flex justify-center w-full'
            : 'grid gap-4.5 w-full items-start'
        }
        style={
          plans.length === 1
            ? undefined
            : { gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }
        }
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-gradient-to-b from-slate-800/72 to-gray-900/60 border border-slate-400/16 rounded-[20px] p-7 flex flex-col gap-4.5 min-w-0 transition-colors hover:border-indigo-300/45 ${
              plans.length === 1 ? 'w-full max-w-md' : ''
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="text-[17px] font-bold tracking-tight">
                {plan.name}
              </div>
              {plan.popular && (
                <div className="font-mono text-[10px] tracking-widest text-[#0f172a] bg-[#c9d4ff] px-2 py-1 rounded-md">
                  TOP
                </div>
              )}
            </div>
            <p className="m-0 text-[13px] leading-relaxed text-[#a9b6cd] min-h-9.5">
              {plan.tagline}
            </p>
            <div className="flex items-baseline gap-2">
              <div className="text-[34px] font-extrabold tracking-tight text-[#eef3fa]">
                {content.periodToggle ? plan.price : plan.priceText}
              </div>
              {content.periodToggle && (
                <div className="text-[13px] text-[#8fa0b8]">
                  {ui.pricing.currency} / {ui.pricing.periodMonth}
                </div>
              )}
            </div>
            {plan.buttonText ? (
              <a
                href="mailto:abdullayevrahmadjon821@gmail.com"
                className="text-center text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-blue-500 py-3.25 rounded-[11px] hover:brightness-110 transition-all"
              >
                {plan.buttonText}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onOpenLead(plan.name)}
                className="text-center text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-blue-500 py-3.25 rounded-[11px] hover:brightness-110 transition-all"
              >
                {ui.pricing.start}
              </button>
            )}
            <div className="h-px bg-slate-400/16" />
            <div className="flex flex-col gap-2.75">
              {plan.features.map((f) => (
                <div key={f} className="flex gap-2.5 items-start">
                  <div className="w-1.5 h-1.5 shrink-0 mt-1.75 rounded-full bg-[#8b9bff]" />
                  <div className="text-[13.5px] leading-relaxed text-[#c6d0e2]">
                    {f}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {content.periodToggle && (
        <div className="font-mono text-xs text-[#8fa0b8] text-center">
          {ui.pricing.limitNote}
        </div>
      )}
    </div>
  )
}

function LeadModal({ ui, open, onClose, plans = [], initialPlan = '' }) {
  const { lang } = useLanguage()
  const t = ui.leadModal
  const [businessInfo, setBusinessInfo] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [plan, setPlan] = useState('')
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (open) setPlan(initialPlan)
  }, [open, initialPlan])

  if (!open) return null

  const reset = () => {
    setBusinessInfo('')
    setFullName('')
    setPhone('')
    setPlan('')
    setStatus('idle')
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!fullName.trim() || !phone.trim() || !plan) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch('https://api.inboxcrm.uz/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone: phone.trim(),
          business_info: businessInfo.trim(),
          plan,
          source: 'landing_page',
          lang,
        }),
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#050810]/75 backdrop-blur-sm px-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md bg-gradient-to-b from-[#161f36] to-[#0f172a] border border-slate-400/18 rounded-[22px] p-7 flex flex-col gap-5 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label={t.close}
          className="absolute top-4 right-4 text-[#8fa0b8] hover:text-white transition-colors text-sm"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-xl">
              ✓
            </div>
            <p className="m-0 text-[15px] text-[#e8eefb] font-semibold">
              {t.success}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-lg font-bold tracking-tight text-[#eef3fa]">
                {t.title}
              </h3>
              <p className="m-0 text-[13px] leading-relaxed text-[#a9b6cd]">
                {t.desc}
              </p>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold text-[#c6d0e2]">
                {t.nameLabel}
              </span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="text-sm bg-slate-400/10 border border-slate-400/22 rounded-[10px] px-3.5 py-2.75 text-[#e8eefb] placeholder:text-[#748099] outline-none focus:border-indigo-400/60 transition-colors"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold text-[#c6d0e2]">
                {t.phoneLabel}
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phonePlaceholder}
                className="text-sm bg-slate-400/10 border border-slate-400/22 rounded-[10px] px-3.5 py-2.75 text-[#e8eefb] placeholder:text-[#748099] outline-none focus:border-indigo-400/60 transition-colors"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold text-[#c6d0e2]">
                {t.planLabel}
              </span>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="text-sm bg-slate-400/10 border border-slate-400/22 rounded-[10px] px-3.5 py-2.75 text-[#e8eefb] outline-none focus:border-indigo-400/60 transition-colors"
              >
                <option value="" disabled className="text-[#748099]">
                  {t.planPlaceholder}
                </option>
                {plans.map((p) => (
                  <option key={p.name} value={p.name} className="text-[#0f172a]">
                    {p.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold text-[#c6d0e2]">
                {t.businessLabel}
              </span>
              <textarea
                value={businessInfo}
                onChange={(e) => setBusinessInfo(e.target.value)}
                placeholder={t.businessPlaceholder}
                rows={3}
                className="text-sm bg-slate-400/10 border border-slate-400/22 rounded-[10px] px-3.5 py-2.75 text-[#e8eefb] placeholder:text-[#748099] outline-none focus:border-indigo-400/60 transition-colors resize-none"
              />
            </label>

            {status === 'error' && (
              <div className="text-[12.5px] font-medium text-red-300">
                {t.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="text-center text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-blue-500 py-3.25 rounded-[11px] hover:brightness-110 transition-all disabled:opacity-60"
            >
              {status === 'submitting' ? t.submitting : t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function FooterColumn({ heading, children }) {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      <div className="font-mono text-[11px] tracking-widest uppercase text-[#8ea0b8]">
        {heading}
      </div>
      {children}
    </div>
  )
}

function Footer({ ui }) {
  const f = ui.footer
  return (
    <div id="aloqa" className="border-t border-slate-400/14 bg-[#0c1220]">
      <div className="max-w-6xl mx-auto px-6 pt-15 pb-7 flex flex-col gap-10">
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
        >
          <div className="flex flex-col gap-3.5 min-w-0">
            <div className="flex items-center gap-2.75">
              <img src={logo} alt="InboxCRM" className="h-7.5 block" />
              <span className="text-lg font-extrabold tracking-tight text-[#eef3fa]">
                Inbox<span className="text-[#8b9bff]">CRM</span>
              </span>
            </div>
            <p className="m-0 text-[13.5px] leading-relaxed text-[#9aa7bd] max-w-70">
              {f.tagline}
            </p>
            <a
              href="https://inboxcrm.uz"
              className="font-mono text-[12.5px] text-indigo-300"
            >
              inboxcrm.uz
            </a>
          </div>

          <FooterColumn heading={f.pages}>
            <a href="#xizmatlar" className="text-sm text-[#c6d0e2]">
              {ui.nav.xizmatlar}
            </a>
            <a href="#imkoniyatlar" className="text-sm text-[#c6d0e2]">
              {ui.nav.imkoniyatlar}
            </a>
            <a href="#tariflar" className="text-sm text-[#c6d0e2]">
              {ui.nav.tariflar}
            </a>
            <a href="https://app.inboxcrm.uz" className="text-sm text-[#c6d0e2]">
              {f.login}
            </a>
          </FooterColumn>

          <FooterColumn heading={f.legal}>
            <Link to="/privacy" className="text-sm text-[#c6d0e2] hover:text-white">
              {f.privacy}
            </Link>
            <Link to="/terms" className="text-sm text-[#c6d0e2] hover:text-white">
              {f.terms}
            </Link>
            <a href="mailto:abdullayevrahmadjon821@gmail.com" className="text-sm text-[#c6d0e2]">
              abdullayevrahmadjon821@gmail.com
            </a>
          </FooterColumn>

          <FooterColumn heading={f.legalInfoHeading}>
            <div className="text-[13.5px] leading-relaxed text-[#c6d0e2]">
              {f.fullName}
            </div>
            <div className="text-[13.5px] leading-relaxed text-[#9aa7bd]">
              {f.address}
            </div>
            <div className="text-[13.5px] leading-relaxed text-[#9aa7bd]">
              {f.supportLabel}:{' '}
              <a href="mailto:abdullayevrahmadjon821@gmail.com" className="text-indigo-300">
                abdullayevrahmadjon821@gmail.com
              </a>
            </div>
          </FooterColumn>
        </div>

        <div className="h-px bg-slate-400/14" />
        <div className="flex flex-wrap gap-3.5 justify-between items-center">
          <div className="text-[13px] text-[#8ea0b8]">{f.rights}</div>
          <div className="font-mono text-[11.5px] text-[#8ea0b8]">
            {f.stack}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
