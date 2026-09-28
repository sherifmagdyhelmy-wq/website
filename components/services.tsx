const services = [
  {
    title: 'Architecture',
    description:
      'New builds, extensions and renovations shaped around site, climate and the way you live.',
  },
  {
    title: 'Interior design',
    description:
      'Full interior schemes — layout, joinery, lighting, materials and furniture — resolved as one.',
  },
  {
    title: 'Hospitality',
    description:
      'Cafés, restaurants and boutique stays with a strong sense of place and a practical back of house.',
  },
  {
    title: 'Workplace',
    description:
      'Studios and offices that support focus, gathering and a culture people want to show up for.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 md:flex-row md:gap-16 md:px-8">
        <div className="md:w-1/3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Services</p>
          <h2 className="mt-3 text-balance font-serif text-4xl tracking-tight md:text-5xl">
            One studio, from first sketch to final detail.
          </h2>
        </div>
        <ol className="flex-1 border-t border-border">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="flex flex-col gap-2 border-b border-border py-7 md:flex-row md:gap-10"
            >
              <span className="font-serif text-lg text-muted-foreground md:w-12">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl md:w-56 md:text-3xl">{service.title}</h3>
              <p className="flex-1 leading-relaxed text-muted-foreground">{service.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
