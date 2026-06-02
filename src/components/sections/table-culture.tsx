import Link from 'next/link'

const articles = [
  {
    title: 'Gaming Under the Stars',
    description: 'How outdoor board gaming became a cherished Australian tradition, from beach picnics to camping trips.',
    category: 'Culture',
    offset: 'md:mt-0',
  },
  {
    title: 'The Rise of Indie Tabletop',
    description: 'Exploring the thriving community of independent game designers across Australia.',
    category: 'Community',
    offset: 'md:mt-12',
  },
  {
    title: 'Social Play in Modern Times',
    description: 'Why board games are bringing people together in an increasingly digital world.',
    category: 'Social',
    offset: 'md:mt-6',
  },
  {
    title: 'Mechanics of Connection',
    description: 'How cooperative gameplay mirrors the collaborative spirit of Australian culture.',
    category: 'Design',
    offset: 'md:mt-16',
  },
]

export function TableCulture() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Australian Table Culture
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl leading-relaxed">
          Stories about the people, places, and traditions that shape how we
          play together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Link
              href="/blog"
              key={index}
              className={`group ${article.offset}`}
            >
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02]">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-6 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-block">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Explore all articles
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
