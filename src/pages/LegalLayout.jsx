import { Link } from 'react-router-dom'
import logo from '../assets/inboxcrm-mark.svg'

export function LegalNav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0f172a]/72 border-b border-slate-400/14">
      <div className="max-w-3xl mx-auto px-6 py-3.5 flex items-center gap-5">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="InboxCRM" className="h-8.5 block" />
          <span className="text-[19px] font-extrabold tracking-tight text-[#eef3fa]">
            Inbox<span className="text-[#8b9bff]">CRM</span>
          </span>
        </Link>
        <div className="flex-1" />
        <Link
          to="/"
          className="text-sm font-semibold text-[#d7e0f0] border border-slate-400/28 px-4 py-2.5 rounded-[10px] hover:bg-slate-400/12 hover:text-white transition-colors"
        >
          Bosh sahifa
        </Link>
      </div>
    </div>
  )
}

export function TOC({ items }) {
  return (
    <div className="bg-slate-800/40 border border-slate-400/16 rounded-2xl p-5 mb-10">
      <div className="font-mono text-[11px] tracking-widest uppercase text-indigo-300 mb-3">
        On this page
      </div>
      <ol className="m-0 pl-5 flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item.href} className="text-sm">
            <a
              href={item.href}
              className="text-[#a5b4fc] hover:text-[#c7d2fe] transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-10 scroll-mt-20">
      <h2 className="text-xl font-bold tracking-tight text-[#eef3fa] mb-3">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-[#a9b6cd]">
        {children}
      </div>
    </section>
  )
}

export function LegalLayout({ title, effectiveDate, intro, children }) {
  return (
    <div className="bg-[#0f172a] text-[#e8eefb] font-sans min-h-screen">
      <LegalNav />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          {title}
        </h1>
        <p className="font-mono text-xs text-[#8fa0b8] mb-6">
          Effective date: {effectiveDate}
        </p>
        <p className="text-[15px] leading-relaxed text-[#a9b6cd] mb-6">
          {intro}
        </p>
        <div className="bg-slate-800/40 border border-slate-400/16 rounded-2xl p-5 mb-10 text-[14px] leading-relaxed text-[#a9b6cd]">
          <div className="font-mono text-[11px] tracking-widest uppercase text-indigo-300 mb-2">
            Operator
          </div>
          <div className="text-[#eef3fa] font-semibold">
            "ANIMALL VET GROUP" LIMITED LIABILITY COMPANY (MChJ)
          </div>
          <div>TIN (STIR): 312 473 663</div>
          <div>
            State registration: October 2, 2025 · No. 2962704 (Izboskan
            District State Services Center, Andijan region)
          </div>
          <div>
            Address: Andijan region, Izboskan district, Istiqlol MFY, Ozodlik
            street, 5, Uzbekistan
          </div>
          <div>
            Contact:{' '}
            <a
              href="mailto:info@animall.uz"
              className="text-[#a5b4fc] hover:text-[#c7d2fe]"
            >
              info@animall.uz
            </a>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
