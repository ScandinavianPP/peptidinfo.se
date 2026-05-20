import './globals.css';
import Link from 'next/link';

export const metadata = {
  metadataBase: new URL('https://peptidinfo.se'),
  title: {
    default: 'Peptidinfo - Informationshub om peptider',
    template: '%s | Peptidinfo',
  },
  description: 'Peptidinfo.se - kvalitativ kunskap om peptider, forskning, användning och säkerhet. Skandinavisk designad informationshub.',
  keywords: ['peptider', 'peptidinfo', 'peptide research', 'peptide library', 'biohacking', 'skandinavisk design'],
  authors: [{ name: 'Peptidinfo Redaktion' }],
  creator: 'Peptidinfo',
  publisher: 'Peptidinfo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Peptidinfo - Informationshub om peptider',
    description: 'Peptidinfo.se - kvalitativ kunskap om peptider, forskning och nyheter.',
    siteName: 'Peptidinfo',
    type: 'website',
    url: 'https://peptidinfo.se',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptidinfo - Informationshub om peptider',
    description: 'Kvalitativ kunskap om peptider och forskning.',
  },
}

export default function RootLayout({ children }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Peptidinfo',
    url: 'https://peptidinfo.se',
    description: 'Informationshub för peptider och peptidbaserad forskning',
    inLanguage: 'sv-SE',
    isPartOf: {
      '@type': 'Organization',
      name: 'Peptidinfo',
      url: 'https://peptidinfo.se',
    },
  };

  return (
    <html lang="sv">
      <head>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </head>
      <body>
        <nav className="main-nav">
          <div className="nav-container">
            <div className="nav-logo">
              <Link href="/">Peptidinfo</Link>
            </div>
            <ul className="nav-menu">
              <li><Link href="/">Start</Link></li>
              <li><Link href="/vad-ar-peptider">Vad är peptider</Link></li>
              <li><Link href="/guides">Peptidguider</Link></li>
              <li><Link href="/forskning">Forskning</Link></li>
              <li><Link href="/#articles">Artiklar</Link></li>
              <li><Link href="/about">Om sidan</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
        </nav>

        {children}

        <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>Om Peptidinfo</h4>
              <p>En neutral, forskningsbaserad informationshub om peptider, utbildning och säkerhet. Vi strävar efter högsta kvalitet i all innehål.</p>
            </div>
            
            <div className="footer-section">
              <h4>Länkar</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li><Link href="/about">Om sidan</Link></li>
                <li><Link href="/kontakt">Kontakt</Link></li>
                <li><Link href="/policy">Integritet och policy</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Disclaimer</h4>
              <p style={{fontSize: '0.85rem', color: '#666'}}>Peptidinfo.se är endast avsedd för utbildningssyfte och vetenskaplig information. Innehållet är inte medicinsk rådgivning. Konsultera alltid en läkare före användning av något ämne som diskuteras här.</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 Peptidinfo. Alla rättigheter förbehållna. | Uppdaterad: {new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
