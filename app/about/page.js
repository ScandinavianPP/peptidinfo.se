import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Om Peptidinfo – Vår mission och metod',
  description: 'Lär dig om Peptidinfo – en oberoende, forskningsbaserad informationshub om peptider på svenska. Vår mission är att göra komplex vetenskap tillgänglig.',
  openGraph: {
    title: 'Om Peptidinfo',
    description: 'En oberoende informationshub för peptidvetenskap på svenska.',
    url: 'https://peptidinfo.se/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Om Peptidinfo' }]}
        badge="Om oss"
        title="Om Peptidinfo"
        subtitle="En oberoende, forskningsbaserad informationshub om peptider – skriven på svenska, utan kommersiella intressen."
        pills={['Oberoende', 'Forskningsbaserat', 'På svenska', 'Löpande uppdaterat']}
        theme="teal"
      />

      <div className="container">
        <article className="about-article">

          <section className="card">
            <h2>Vår mission</h2>
            <p>
              Peptidinfo är en oberoende informationshub dedikerad till att samla och tillgängliggöra
              högkvalitativ information om peptider, forskning och deras tillämpningar. Vi tror att
              välgrundad kunskap är en förutsättning för informerade beslut.
            </p>
            <p>
              Peptidfältet är spännande och snabbrörligt – men också fyllt med överdrifter, missförstånd
              och marknadsföringsdriven information. Peptidinfo är vår motpol: neutral, källhänvisad och
              utan produktförsäljning.
            </p>
          </section>

          <section className="card">
            <h2>Varför Peptidinfo finns</h2>
            <p>Trots ett explosivt intresse för peptider finns det knappt någon kvalitativ information på svenska. Peptidinfo fyller den luckan med:</p>
            <div className="about-grid">
              {[
                { icon: '📚', title: 'Grundad forskning', desc: 'Varje påstående backas av peer-reviewed studier med direktlänkar till PubMed och primärkällor.' },
                { icon: '🇸🇪', title: 'Skandinaviskt fokus', desc: 'Information om lagstatus i Sverige, svenska resurser och relevant kontext för svenska läsare.' },
                { icon: '🔍', title: 'Sökbar databas', desc: '150+ artiklar och guider med fulltextsökning för att snabbt hitta rätt information.' },
                { icon: '🔄', title: 'Löpande uppdaterat', desc: 'Ny forskning läggs till kontinuerligt. Vi bevakar kliniska fas-övergångar och publicerade studier.' },
                { icon: '⚖️', title: 'Balanserat perspektiv', desc: 'Vi skiljer tydligt mellan bevisad effekt, lovande data och tidig/spekulativ forskning.' },
                { icon: '🔗', title: 'Öppna källhänvisningar', desc: 'Alla externa källor länkas direkt. Du ska aldrig behöva lita blint på oss.' },
              ].map(item => (
                <div key={item.title} className="about-feature">
                  <span className="about-feature-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h2>Vad vi är – och inte är</h2>
            <div className="about-comparison">
              <div className="about-yes">
                <h3>✓ Vi är</h3>
                <ul>
                  <li>En utbildningsresurs om peptider och peptidforskning</li>
                  <li>Källhänvisade till vetenskaplig litteratur</li>
                  <li>Transparenta om osäkerhet och kunskapsluckor</li>
                  <li>Oberoende av produktleverantörer</li>
                </ul>
              </div>
              <div className="about-no">
                <h3>✗ Vi är inte</h3>
                <ul>
                  <li>En medicinsk rådgivningstjänst</li>
                  <li>En webshop eller produktrekommendation</li>
                  <li>Ansvariga för beslut baserade på vår information</li>
                  <li>En ersättning för konsultation med läkare</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="card">
            <h2>Vårt nätverk och samarbeten</h2>
            <p>
              Peptidinfo välkomnar samarbeten med seriösa aktörer inom branschen. Vi samarbetar bland
              annat med{' '}
              <a href="https://www.penpeptider.com" target="_blank" rel="noopener noreferrer">
                Penpeptider.com
              </a>{' '}
              – en svensk aktör inom forskningspeptider med ett brett sortiment och utbildningsresurser
              på sin{' '}
              <a href="https://www.penpeptider.com/blogs/news" target="_blank" rel="noopener noreferrer">
                blogg
              </a>.
            </p>
            <p>
              Är du intresserad av samarbete, korrigering av information eller har du feedback?{' '}
              <Link href="/kontakt">Kontakta oss</Link>.
            </p>
          </section>

          <section className="card">
            <h2>Utforska webbplatsen</h2>
            <div className="about-nav-grid">
              {[
                { href: '/vad-ar-peptider', label: 'Vad är peptider?', desc: 'Grundläggande guide' },
                { href: '/guides', label: 'Peptidguider', desc: '20 djupgående guider' },
                { href: '/forskning', label: 'Forskning', desc: 'Evidensnivåer och studier' },
                { href: '/faq', label: 'FAQ', desc: 'Vanliga frågor' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="about-nav-card">
                  <strong>{item.label}</strong>
                  <span>{item.desc}</span>
                </Link>
              ))}
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
