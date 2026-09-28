import { AlertTriangle, Info } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const kpis = [
  { label: 'CX Score', value: '8.1', unit: '/10', delta: '+0.3' },
  { label: 'Customer Satisfaction', value: '82', unit: '%', delta: '+4' },
  { label: 'Customers Contacted', value: '12,480', unit: '', delta: 'All eligible' },
  { label: 'Open Escalations', value: '7', unit: '', delta: '3 critical', alert: true },
]

const trend = [7.2, 7.4, 7.3, 7.6, 7.5, 7.8, 7.7, 7.9, 8.0, 7.8, 8.0, 8.1]
const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

const branches = [
  { name: 'Branch A', score: 88 },
  { name: 'Branch B', score: 84 },
  { name: 'Branch C', score: 79 },
  { name: 'Branch D', score: 71 },
  { name: 'Branch E', score: 62, flag: true },
]

const themes = [
  { theme: 'Staff courtesy', positive: 78 },
  { theme: 'Waiting time', positive: 41 },
  { theme: 'Product knowledge', positive: 66 },
  { theme: 'Issue resolution', positive: 54 },
]

const sales = [
  { label: 'Upsell not offered', value: '23%' },
  { label: 'Cross-sell not explored', value: '31%' },
  { label: 'No follow-up on intent', value: '14%' },
]

function TrendChart() {
  const w = 480
  const h = 140
  const min = 7
  const max = 8.4
  const points = trend.map((v, i) => {
    const x = (i / (trend.length - 1)) * w
    const y = h - ((v - min) / (max - min)) * h
    return [x, y] as const
  })
  const line = points.map(([x, y]) => `${x},${y}`).join(' ')
  const area = `0,${h} ${line} ${w},${h}`

  return (
    <div className="flex flex-col gap-3">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-36 w-full" preserveAspectRatio="none" role="img" aria-label="CX score trend over 12 months, rising from 7.2 to 8.1">
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1="0" x2={w} y1={h * f} y2={h * f} stroke="rgb(255 255 255 / 0.08)" strokeWidth="1" />
        ))}
        <polygon points={area} fill="var(--brand)" opacity="0.12" />
        <polyline points={line} fill="none" stroke="var(--brand)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="flex justify-between font-mono text-[10px] text-white/40">
        {months.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  )
}

function Panel({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-5 border border-white/10 bg-ink p-5 md:p-6 ${className ?? ''}`}>
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/55">{title}</h3>
      {children}
    </div>
  )
}

export function Dashboard() {
  return (
    <section id="dashboard" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="Sample Dashboard"
          title="Your customers, branches and sales — on one screen."
        />

        <div className="mt-14 border border-white/15 bg-ink-soft">
          <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-brand" />
              </span>
              <p className="text-sm font-semibold text-white">CX &amp; Sales Intelligence — Monthly View</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 bg-brand px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink">
              <Info className="size-3.5" aria-hidden="true" />
              Illustrative Example
            </span>
          </div>

          <div className="grid gap-4 p-4 md:p-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {kpis.map((k) => (
                <div key={k.label} className="flex flex-col gap-3 border border-white/10 bg-ink p-5">
                  <p className="text-xs font-medium text-white/55">{k.label}</p>
                  <p className="text-3xl font-black tracking-tight text-white md:text-4xl">
                    {k.value}
                    <span className="text-lg font-bold text-white/40">{k.unit}</span>
                  </p>
                  <p
                    className={
                      k.alert
                        ? 'flex items-center gap-1.5 font-mono text-xs text-brand'
                        : 'font-mono text-xs text-white/55'
                    }
                  >
                    {k.alert ? <AlertTriangle className="size-3.5" aria-hidden="true" /> : null}
                    {k.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              <Panel title="Customer Experience Trend" className="lg:col-span-3">
                <TrendChart />
              </Panel>

              <Panel title="Branch Performance" className="lg:col-span-2">
                <ul className="flex flex-col gap-3.5">
                  {branches.map((b) => (
                    <li key={b.name} className="grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-3 text-sm">
                      <span className="text-white/75">{b.name}</span>
                      <span className="h-2 bg-white/10">
                        <span
                          className={b.flag ? 'block h-full bg-brand' : 'block h-full bg-white'}
                          style={{ width: `${b.score}%` }}
                        />
                      </span>
                      <span className={b.flag ? 'text-right font-mono text-brand' : 'text-right font-mono text-white/75'}>
                        {b.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              <Panel title="Customer Feedback Themes" className="lg:col-span-3">
                <ul className="flex flex-col gap-4">
                  {themes.map((t) => (
                    <li key={t.theme} className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">{t.theme}</span>
                        <span className="font-mono text-xs text-white/50">{`${t.positive}% positive`}</span>
                      </div>
                      <span className="flex h-2" aria-hidden="true">
                        <span className="h-full bg-white" style={{ width: `${t.positive}%` }} />
                        <span className="h-full flex-1 bg-brand/70" />
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-5 font-mono text-[10px] uppercase tracking-wider text-white/50">
                  <span className="flex items-center gap-2"><span className="size-2 bg-white" aria-hidden="true" />Positive</span>
                  <span className="flex items-center gap-2"><span className="size-2 bg-brand/70" aria-hidden="true" />Negative</span>
                </div>
              </Panel>

              <Panel title="Sales Insights" className="lg:col-span-2">
                <ul className="flex flex-col divide-y divide-white/10">
                  {sales.map((s) => (
                    <li key={s.label} className="flex items-center justify-between py-3 first:pt-0">
                      <span className="text-sm text-white/80">{s.label}</span>
                      <span className="text-2xl font-black text-brand">{s.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-relaxed text-white/45">Share of relevant interactions</p>
              </Panel>
            </div>
          </div>
        </div>

        <p className="mt-4 font-mono text-xs text-white/45">
          Illustrative example. All figures are fictional and shown for demonstration purposes only.
        </p>
      </div>
    </section>
  )
}
