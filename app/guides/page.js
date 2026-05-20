import Link from 'next/link';
import PageHero from '../components/PageHero';
import { guides } from '../data/guides';

export const metadata = {
  title: 'Peptidguider – Komplett information om varje peptid | Peptidinfo',
  description: 'Djupgående guider om de vanligaste peptiderna – semaglutide, BPC-157, ipamorelin, SS-31 och 15+ till. Evidensbaserad information på svenska.',
  openGraph: {
    title: 'Peptidguider | Peptidinfo',
    description: 'Komplett samling evidensbaserade peptidguider på svenska.',
    url: 'https://peptidinfo.se/guides',
  },
};

const categoryOrder = [
  'Grundläggande',
  'Metabolism & Vikt',
  'Muskel & Prestation',
  'Vävnadshealing',
  'Anti-aging & Mitokondrier',
  'Neurologi & Kognition',
  'Övrigt',
];

function getCategoryColor(cat) {
  const map = {
    'Grundläggande': '#0066cc',
    'Metabolism & Vikt': '#e67e00',
    'Muskel & Prestation': '#2e8b57',
    'Vävnadshealing': '#8b2e8b',
    'Anti-aging & Mitokondrier': '#c0392b',
    'Neurologi & Kognition': '#1a6680',
    'Övrigt': '#555',
  };
  return map[cat] || '#555';
}

export default function GuidesPage() {
  const featured = guides.filter((g) => g.featured);
  const byCategory = categoryOrder.reduce((acc, cat) => {
    const items = guides.filter((g) => g.category === cat && !g.featured);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  // catch any uncategorised
  guides.forEach((g) => {
    if (!g.featured && !categoryOrder.includes(g.category)) {
      if (!byCategory['Övrigt']) byCategory['Övrigt'] = [];
      byCategory['Övrigt'].push(g);
    }
  });

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Peptidguider',
    description: 'Komplett samling evidensbaserade peptidguider på svenska.',
    url: 'https://peptidinfo.se/guides',
    hasPart: guides.map((g) => ({
      '@type': 'Article',
      name: g.title,
      url: `https://peptidinfo.se/articles/${g.slug}`,
      description: g.summary,
    })),
  };

  return (
    <main>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <PageHero
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Peptidguider' }]}
        badge="Guidebibliotek"
        title="Peptidguider"
        subtitle="Djupgående, evidensbaserade guider om de mest studerade peptiderna – skrivet på svenska med vetenskapliga källor."
        pills={[`${guides.length} kompletta guider`, 'Mekanismer & forskning', 'Säkerhetsprofiler', 'Uppdaterat 2026']}
        theme="green"
        disclaimer="Guiderna är uteslutande för utbildningssyfte och ersätter inte medicinsk rådgivning."
      />

      <div className="container">

        {/* Featured pillar article */}
        {featured.length > 0 && (
          <section className="guides-featured-section">
            <h2>Börja här – Grundguide</h2>
            {featured.map((g) => (
              <Link key={g.slug} href={`/articles/${g.slug}`} className="guide-featured-card">
                <div className="guide-featured-label">Rekommenderad start</div>
                <h3>{g.title}</h3>
                <p>{g.summary}</p>
                <span className="guide-read-link">Läs komplett guide →</span>
              </Link>
            ))}
          </section>
        )}

        {/* By category */}
        {categoryOrder.map((cat) => {
          const items = byCategory[cat];
          if (!items) return null;
          return (
            <section key={cat} className="guides-category-section">
              <h2>
                <span
                  className="category-dot"
                  style={{ backgroundColor: getCategoryColor(cat) }}
                />
                {cat}
              </h2>
              <div className="guides-grid">
                {items.map((g) => (
                  <Link key={g.slug} href={`/articles/${g.slug}`} className="guide-card">
                    <span className="guide-category-tag" style={{ color: getCategoryColor(cat) }}>
                      {g.category}
                    </span>
                    <h3>{g.title}</h3>
                    <p>{g.summary}</p>
                    <span className="guide-read-link">Läs guide →</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <section className="guides-bottom-cta card">
          <h2>Hittar du inte det du söker?</h2>
          <p>
            Utöver guiderna har vi {'>'}100 artiklar i vårt{' '}
            <Link href="/#articles">artikelbibliotek</Link>, och du kan söka fritt
            efter peptider, mekanismer och ämnen. Har du frågor? Se vår{' '}
            <Link href="/faq">FAQ-sida</Link> eller{' '}
            <Link href="/kontakt">kontakta oss</Link>.
          </p>
        </section>

      </div>
    </main>
  );
}
