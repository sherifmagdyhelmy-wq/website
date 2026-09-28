const steps = [
  { title: 'Listen', text: 'A site visit and long conversation about how you want to live and work.' },
  { title: 'Concept', text: 'Sketches, models and a material palette that set the direction.' },
  { title: 'Develop', text: 'Detailed drawings, planning approvals and contractor selection.' },
  { title: 'Build', text: 'We stay on site through construction until the last detail is right.' },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Process</p>
        <h2 className="mt-3 max-w-2xl text-balance font-serif text-4xl tracking-tight md:text-6xl">
          A considered process, <em>without the guesswork.</em>
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 border-t border-primary-foreground/20 pt-6">
              <span className="text-sm text-primary-foreground/60">Step {index + 1}</span>
              <h3 className="font-serif text-3xl">{step.title}</h3>
              <p className="leading-relaxed text-primary-foreground/70">{step.text}</p>
            </li>
          ))}
        </ol>

        <figure className="mt-20 border-t border-primary-foreground/20 pt-12">
          <blockquote className="max-w-4xl text-balance font-serif text-3xl leading-snug md:text-5xl">
            {'“Northfold gave us a home that feels like it has always been there — calm, warm and completely ours.”'}
          </blockquote>
          <figcaption className="mt-6 text-sm text-primary-foreground/60">
            Maya & Tom Ellison — Hillside House
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
