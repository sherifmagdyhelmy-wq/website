import Image from 'next/image'

const projects = [
  {
    title: 'Hillside House',
    location: 'Big Sur, California',
    category: 'Residential · 2025',
    image: '/images/project-1.png',
    alt: 'Timber and stone house set into a coastal hillside at golden hour',
    className: 'md:col-span-2 aspect-[4/3] md:aspect-[16/9]',
  },
  {
    title: 'Walnut Kitchen',
    location: 'Copenhagen, Denmark',
    category: 'Interiors · 2024',
    image: '/images/project-2.png',
    alt: 'Minimal kitchen with walnut cabinets, stone counters and clay pendant lights',
    className: 'aspect-[4/5]',
  },
  {
    title: 'Clay Café',
    location: 'Lisbon, Portugal',
    category: 'Hospitality · 2024',
    image: '/images/project-3.png',
    alt: 'Café with a curved plaster bar, terracotta floor tiles and oak stools',
    className: 'aspect-[4/5]',
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-16 bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Selected work</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-6xl">Recent projects</h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Every project begins with the site, the light and the people who will live with it.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title} className={project.className.includes('col-span') ? 'md:col-span-2' : ''}>
              <article className="group flex flex-col gap-4">
                <div className={`relative overflow-hidden rounded-sm ${project.className.replace('md:col-span-2 ', '')}`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground">{project.category}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
