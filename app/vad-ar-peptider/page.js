import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Vad är peptider? – Komplett guide till peptiders kemi och funktion | Peptidinfo',
  description: 'Lär dig allt om peptider: aminosyror, struktur, biologiska funktioner, syntetiska peptider, administrering och lagstatus i Sverige. Evidensbaserad grundguide.',
  keywords: ['vad är peptider', 'peptider förklaring', 'aminosyror', 'peptider kroppen', 'syntetiska peptider', 'peptider Sverige'],
  openGraph: {
    title: 'Vad är peptider? – Komplett guide | Peptidinfo',
    description: 'Allt du behöver veta om peptider – från grundläggande kemi till klinisk användning.',
    url: 'https://peptidinfo.se/vad-ar-peptider',
    type: 'article',
  },
};

/* ── SVG-ikoner för kategorikort ──────────────────────────────────── */
function IconMetabolism() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="cat-svg-icon">
      <circle cx="32" cy="32" r="28" stroke="#0066cc" strokeWidth="2" fill="#eef5ff"/>
      <ellipse cx="22" cy="32" rx="9" ry="13" stroke="#0066cc" strokeWidth="2" fill="#c8dcff"/>
      <ellipse cx="42" cy="32" rx="9" ry="13" stroke="#0066cc" strokeWidth="2" fill="#c8dcff"/>
      <line x1="31" y1="32" x2="33" y2="32" stroke="#0066cc" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="22" cy="32" r="3" fill="#0066cc"/>
      <circle cx="42" cy="32" r="3" fill="#0066cc"/>
      <path d="M16 20 Q22 14 28 20" stroke="#0055aa" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M36 20 Q42 14 48 20" stroke="#0055aa" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function IconMuscle() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="cat-svg-icon">
      <rect x="8" y="26" width="48" height="12" rx="6" fill="#e8f5e9" stroke="#2e8b57" strokeWidth="2"/>
      <rect x="12" y="28" width="8" height="8" rx="2" fill="#2e8b57" opacity="0.4"/>
      <rect x="24" y="28" width="8" height="8" rx="2" fill="#2e8b57" opacity="0.6"/>
      <rect x="36" y="28" width="8" height="8" rx="2" fill="#2e8b57" opacity="0.8"/>
      <rect x="44" y="28" width="8" height="8" rx="2" fill="#2e8b57" opacity="0.4"/>
      <path d="M8 32 Q16 18 24 32 Q32 18 40 32 Q48 18 56 32" stroke="#1a6b3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="32" cy="14" r="4" fill="#2e8b57" opacity="0.3"/>
      <line x1="32" y1="18" x2="32" y2="26" stroke="#2e8b57" strokeWidth="1.5" strokeDasharray="2 2"/>
    </svg>
  );
}

function IconHealing() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="cat-svg-icon">
      <circle cx="32" cy="32" r="20" stroke="#8b2e8b" strokeWidth="2" fill="#f5eaff"/>
      <path d="M22 32 Q27 22 32 28 Q37 22 42 32 Q37 42 32 36 Q27 42 22 32Z" fill="#d4a0ff" stroke="#8b2e8b" strokeWidth="1.5"/>
      <line x1="32" y1="24" x2="32" y2="40" stroke="#6a1b9a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="32" x2="40" y2="32" stroke="#6a1b9a" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3" fill="#d4a0ff" stroke="#8b2e8b" strokeWidth="1"/>
      <circle cx="50" cy="14" r="3" fill="#d4a0ff" stroke="#8b2e8b" strokeWidth="1"/>
      <circle cx="14" cy="50" r="3" fill="#d4a0ff" stroke="#8b2e8b" strokeWidth="1"/>
    </svg>
  );
}

function IconDNA() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="cat-svg-icon">
      <path d="M24 8 Q32 20 24 32 Q16 44 24 56" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M40 8 Q32 20 40 32 Q48 44 40 56" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <line x1="24" y1="16" x2="40" y2="16" stroke="#e8a0a0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="27" y1="22" x2="37" y2="22" stroke="#e8a0a0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="32" x2="40" y2="32" stroke="#e8a0a0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="27" y1="42" x2="37" y2="42" stroke="#e8a0a0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="48" x2="40" y2="48" stroke="#e8a0a0" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="32" r="3" fill="#c0392b"/>
      <circle cx="40" cy="32" r="3" fill="#c0392b"/>
    </svg>
  );
}

function IconNeuron() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="cat-svg-icon">
      <circle cx="32" cy="32" r="9" fill="#b3d9f5" stroke="#1a6680" strokeWidth="2"/>
      <circle cx="32" cy="32" r="4" fill="#1a6680"/>
      <line x1="32" y1="10" x2="32" y2="23" stroke="#1a6680" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15" y1="20" x2="25" y2="27" stroke="#1a6680" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="35" x2="23" y2="33" stroke="#1a6680" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="32" y1="41" x2="32" y2="56" stroke="#1a6680" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 56 L28 50 M32 56 L36 50" stroke="#1a6680" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="32" cy="10" r="2.5" fill="#5aabcc"/>
      <circle cx="12" cy="17" r="2.5" fill="#5aabcc"/>
      <circle cx="8" cy="36" r="2.5" fill="#5aabcc"/>
    </svg>
  );
}

function IconSkin() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="cat-svg-icon">
      <rect x="8" y="10" width="48" height="10" rx="3" fill="#fde8c8" stroke="#c8864a" strokeWidth="1.5"/>
      <text x="32" y="18" textAnchor="middle" fontSize="7" fill="#c8864a" fontWeight="600">Epidermis</text>
      <rect x="8" y="22" width="48" height="14" rx="0" fill="#ffd0a0" stroke="#c8864a" strokeWidth="1.5"/>
      <text x="32" y="31" textAnchor="middle" fontSize="7" fill="#8b4a10" fontWeight="600">Dermis</text>
      <circle cx="20" cy="29" r="3" fill="#e8986a" opacity="0.6"/>
      <circle cx="32" cy="27" r="3" fill="#e8986a" opacity="0.6"/>
      <circle cx="44" cy="29" r="3" fill="#e8986a" opacity="0.6"/>
      <rect x="8" y="38" width="48" height="14" rx="0" fill="#f5c090" stroke="#c8864a" strokeWidth="1.5"/>
      <text x="32" y="47" textAnchor="middle" fontSize="7" fill="#8b4a10" fontWeight="600">Hypodermis</text>
      <path d="M20 20 Q20 10 20 10" stroke="#c8864a" strokeWidth="1" strokeDasharray="2 2"/>
      <path d="M44 20 Q44 10 44 10" stroke="#c8864a" strokeWidth="1" strokeDasharray="2 2"/>
    </svg>
  );
}

/* ── Kategorier ────────────────────────────────────────────────────── */
const categories = [
  {
    name: 'Metabolism & Vikt',
    Icon: IconMetabolism,
    desc: 'GLP-1-agonister som semaglutide och tirzepatide, och trippelagonisten retatrutide – peptider som förändrar hur kroppen hanterar energi och hunger.',
    links: [
      { label: 'Semaglutide-guide', href: '/articles/semaglutide-guide' },
      { label: 'Retatrutide-guide', href: '/articles/retatrutide-guide' },
      { label: 'Tirzepatide-guide', href: '/articles/tirzepatide-guide' },
    ],
    penpeptider: 'https://www.penpeptider.com/collections/peptider-for-viktnedgang-fettmetabolism',
    penpeptiderLabel: 'Metabola peptider på Penpeptider',
  },
  {
    name: 'Muskel & Prestation',
    Icon: IconMuscle,
    desc: 'GHRH-analoger och GHRP:er som ipamorelin och CJC-1295 stimulerar kroppens eget tillväxthormon – ett alternativ till direkt GH-tillförsel.',
    links: [
      { label: 'Ipamorelin-guide', href: '/articles/ipamorelin-guide' },
      { label: 'CJC-1295-guide', href: '/articles/cjc-1295-guide' },
      { label: 'Guide: Peptider för muskler', href: '/articles/peptider-muskeltillvaxt' },
    ],
    penpeptider: 'https://www.penpeptider.com/collections/peptider-for-traning',
    penpeptiderLabel: 'Träningspeptider på Penpeptider',
  },
  {
    name: 'Vävnadshealing',
    Icon: IconHealing,
    desc: 'BPC-157 och TB-500 forskas intensivt för sin potential att påskynda senne-, ligament- och muskelskadeläkning – trots att mänskliga RCT-studier ännu saknas.',
    links: [
      { label: 'BPC-157-guide', href: '/articles/bpc-157-guide' },
      { label: 'TB-500-guide', href: '/articles/tb-500-guide' },
    ],
    penpeptider: null,
    penpeptiderLabel: null,
  },
  {
    name: 'Anti-aging & Mitokondrier',
    Icon: IconDNA,
    desc: 'MOTS-c och SS-31 kodas av mitokondriellt DNA och påverkar cellulär energiproduktion. Epithalon forskas för sin koppling till telomerbiologi.',
    links: [
      { label: 'MOTS-c-guide', href: '/articles/mots-c-guide' },
      { label: 'SS-31-guide', href: '/articles/ss-31-guide' },
      { label: 'Epithalon-guide', href: '/articles/epithalon-guide' },
    ],
    penpeptider: null,
    penpeptiderLabel: null,
  },
  {
    name: 'Neurologi & Kognition',
    Icon: IconNeuron,
    desc: 'Selank och semax är godkända läkemedel i Ryssland men forskningspeptider i EU. De verkar på GABA- och serotoninsystem och studeras för ångest och kognition.',
    links: [
      { label: 'Selank-guide', href: '/articles/selank-guide' },
      { label: 'Semax-guide', href: '/articles/semax-guide' },
    ],
    penpeptider: null,
    penpeptiderLabel: null,
  },
  {
    name: 'Hud & Kosmetik',
    Icon: IconSkin,
    desc: 'GHK-Cu är en naturlig tripeptid som kroppen producerar själv – kopplad till kollagensyntes och sårläkning. Den används brett i hudvårdsprodukter.',
    links: [
      { label: 'GHK-Cu-guide', href: '/articles/ghk-cu-guide' },
      { label: 'Melanotan II-guide', href: '/articles/melanotan-2-guide' },
    ],
    penpeptider: null,
    penpeptiderLabel: null,
  },
];

const keyFacts = [
  { num: '7 000+', label: 'Naturliga peptider i kroppen' },
  { num: '20', label: 'Aminosyror i det genetiska alfabetet' },
  { num: '80+', label: 'FDA-godkända peptidläkemedel' },
  { num: '1921', label: 'Insulin isolerades för första gången' },
];

const faqItems = [
  {
    q: 'Vad är skillnaden mellan en peptid och ett protein?',
    a: 'Gränsen är egentligen godtycklig – kedjor under ungefär 50 aminosyror kallas peptider, längre kedjor kallas proteiner. I praktiken är det mer nyanserat: insulin har 51 aminosyror men klassas ofta fortfarande som protein av tradition. Det som faktiskt skiljer dem åt är att peptider tenderar att vara mer flexibla och snabbare i sin biologiska signalering, medan proteiner bildar mer komplexa tredimensionella strukturer.',
  },
  {
    q: 'Är peptider säkra?',
    a: 'Det varierar enormt beroende på vilken peptid. Insulin och semaglutide har studerats på hundratusentals människor och har välkända säkerhetsprofiler. Andra peptider – som BPC-157 eller MOTS-c – har starka djurdata men saknar stora kliniska prövningar på människa. Att säga "peptider är säkra" är lika meningslöst som att säga "kemikalier är farliga" – allt hänger på substansen, dosen och kontexten.',
  },
  {
    q: 'Kan peptider tas som tabletter?',
    a: 'I teorin ja, i praktiken sällan för bioaktiva peptider. Magsyra och enzymer bryter ner de flesta peptider innan de hinner absorberas. Subkutan injektion är standardmetoden. Undantag finns – kollagenpeptider absorberas oralt, och vissa kortkedjiga peptider kan formuleras för oral tillförsel. Det är ett aktivt forskningsområde just nu.',
  },
  {
    q: 'Är peptider lagliga i Sverige?',
    a: 'Det beror på vilken peptid. Godkända läkemedel som insulin och semaglutide kräver recept men är helt lagliga. De flesta forskningspeptider klassas som kemikalier – lagliga att köpa och inneha för forskningsändamål, men inte för att använda kliniskt på sig själv utan läkartillsyn. Melanotan II är ett undantag – det är narkotikaklassat i Sverige.',
  },
  {
    q: 'Varför injiceras de flesta peptider?',
    a: 'Samma anledning som insulin injiceras: peptider är proteinbaserade molekyler som kroppen känner igen som "mat". Magsystemet är bra på att bryta ner dem. Injektioner kringgår det problemet och ger förutsägbar absorption. Det låter mer dramatiskt än det är – moderna injektionsnålar är tunnare än ett hårstrå och de flesta vänjer sig snabbt.',
  },
  {
    q: 'Skiljer sig peptider från anabola steroider?',
    a: 'Ja, fundamentalt. Steroider är kolesterolbaserade molekyler som diffunderar in i cellen och binder direkt till kärnreceptorer – de påverkar genuttryck på ett brett och varaktigt sätt med välkända risker för lever, hjärt-kärlsystem och hormonsystem. Peptider verkar via ytreceptorer, har kortare halveringstid och bryts ner till aminosyror. Det gör dem inte riskfria, men mekanismerna är helt olika.',
  },
];

export default function VadArPeptiderPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vad är peptider? – Komplett guide till peptiders kemi och funktion',
    description: 'Lär dig allt om peptider: aminosyror, struktur, biologiska funktioner, syntetiska peptider och lagstatus i Sverige.',
    url: 'https://peptidinfo.se/vad-ar-peptider',
    author: { '@type': 'Organization', name: 'Peptidinfo', url: 'https://peptidinfo.se' },
    publisher: { '@type': 'Organization', name: 'Peptidinfo', url: 'https://peptidinfo.se' },
    datePublished: '2026-01-15',
    dateModified: '2026-04-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://peptidinfo.se/vad-ar-peptider' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <PageHero
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Vad är peptider?' }]}
        badge="Grundguide"
        title="Vad är peptider?"
        subtitle="Kroppens egna kemiska budbärare – korta aminosyrakedjor som styr allt från hunger och sömnkvalitet till muskeltillväxt och cellulär energi. Den här guiden förklarar hur de verkligen fungerar."
        pills={['Vetenskapliga källor', 'Uppdaterat april 2026', 'Skrivet på svenska']}
        theme="blue"
        disclaimer="Utbildningssyfte – ersätter inte medicinsk rådgivning. Konsultera läkare."
      />

      {/* Key facts bar */}
      <div className="keyfacts-bar">
        {keyFacts.map((f, i) => (
          <div key={i} className="keyfact">
            <span className="keyfact-num">{f.num}</span>
            <span className="keyfact-label">{f.label}</span>
          </div>
        ))}
      </div>

      <div className="pillar-container">

        {/* Innehållsförteckning */}
        <aside className="toc-sidebar">
          <div className="toc-box">
            <h3>Innehåll</h3>
            <ol className="toc-list">
              <li><a href="#definition">Vad är en peptid?</a></li>
              <li><a href="#aminosyror">Aminosyrorna</a></li>
              <li><a href="#struktur">Struktur och bindningar</a></li>
              <li><a href="#funktioner">Funktioner i kroppen</a></li>
              <li><a href="#naturliga-syntetiska">Naturliga vs syntetiska</a></li>
              <li><a href="#kategorier">Peptidkategorier</a></li>
              <li><a href="#tillverkning">Tillverkning – SPPS</a></li>
              <li><a href="#administrering">Administrering</a></li>
              <li><a href="#medicin">Peptider i medicin</a></li>
              <li><a href="#lagstatus">Lagstatus i Sverige</a></li>
              <li><a href="#forskning">Läsa forskning kritiskt</a></li>
              <li><a href="#faq">Vanliga frågor</a></li>
            </ol>
          </div>
        </aside>

        {/* Artikelinnehåll */}
        <article className="pillar-article">

          {/* ── 1. Definition ── */}
          <section id="definition">
            <h2>Vad är en peptid, egentligen?</h2>
            <p>
              Tänk dig en rad pärlor på ett snöre – varje pärla är en aminosyra och snöret är peptidbindningen som håller ihop dem. Det är ungefär vad en peptid är. Mer formellt: en kedja av aminosyror bundna via kovalenta peptidbindningar, där varje bindning bildas mellan karboxylgruppen (–COOH) hos en aminosyra och aminogruppen (–NH₂) hos nästa, med en vattenmolekyl som frigörs i processen.
            </p>
            <p>
              Var drar man gränsen mot proteiner? Där är biologin lite oprecis. Konventionen brukar sätta gränsen vid <strong>50 aminosyror</strong> – kortare kedjor kallas peptider, längre kallas proteiner. Men insulin har 51 aminosyror och klassas fortfarande ofta som protein av historiska skäl. Det praktiska skiljet är mer om funktion än exakt längd.
            </p>

            {/* Peptidkedja SVG */}
            <figure className="pillar-figure">
              <svg viewBox="0 0 580 130" className="peptide-chain-svg" aria-label="Schematisk bild av en pentapeptid med peptidbindningar">
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#0066cc"/>
                  </marker>
                </defs>
                {/* H2N terminus */}
                <text x="18" y="42" fontSize="10" fill="#0066cc" fontWeight="700">H₂N–</text>
                {/* 5 amino acids */}
                {[0,1,2,3,4].map(i => {
                  const names = ['Gly','Ala','Val','Leu','Pro'];
                  const colors = ['#dceeff','#e8f4fd','#f0f0f0','#e8f4fd','#dcf5e8'];
                  const x = 52 + i * 98;
                  return (
                    <g key={i}>
                      <rect x={x} y="18" width="72" height="48" rx="8" fill={colors[i]} stroke="#aaccee" strokeWidth="1.5"/>
                      <text x={x+36} y="38" textAnchor="middle" fontSize="11" fill="#1a1a1a" fontWeight="700">{names[i]}</text>
                      <text x={x+36} y="54" textAnchor="middle" fontSize="9" fill="#555">AA {i+1}</text>
                      {i < 4 && (
                        <g>
                          <line x1={x+72} y1="42" x2={x+97} y2="42" stroke="#0066cc" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                          <text x={x+84} y="37" textAnchor="middle" fontSize="7.5" fill="#0066cc">peptid-</text>
                          <text x={x+84} y="47" textAnchor="middle" fontSize="7.5" fill="#0066cc">bindning</text>
                        </g>
                      )}
                    </g>
                  );
                })}
                {/* COOH terminus */}
                <text x="545" y="42" fontSize="10" fill="#0066cc" fontWeight="700">–COOH</text>
                <text x="290" y="118" textAnchor="middle" fontSize="11" fill="#666" fontStyle="italic">
                  Pentapeptid — N-terminus till vänster, C-terminus till höger
                </text>
              </svg>
              <figcaption>En pentapeptid med fem aminosyror. Peptidbindningarna (–CO–NH–) binder ihop kedjan; varje bindning bildas med avgivning av en vattenmolekyl.</figcaption>
            </figure>

            <div className="info-box">
              <strong>Kedjelängd och nomenklatur</strong>
              <div className="peptide-length-visual">
                {[
                  { name: 'Dipeptid', range: '2', example: 'Asp-Phe (aspartam)' },
                  { name: 'Tripeptid', range: '3', example: 'Glu-Cys-Gly (glutation)' },
                  { name: 'Oligopeptid', range: '4–20', example: 'Oxytocin (9 AA)' },
                  { name: 'Polypeptid', range: '21–50', example: 'Glukagon (29 AA)' },
                  { name: 'Protein', range: '>50', example: 'Albumin (585 AA)' },
                ].map(row => (
                  <div key={row.name} className="peptide-length-row">
                    <span className="peptide-length-name">{row.name}</span>
                    <span className="peptide-length-range">{row.range} AA</span>
                    <span className="peptide-length-example">{row.example}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 2. Aminosyror ── */}
          <section id="aminosyror">
            <h2>De 20 aminosyrorna – peptidernas alfabet</h2>
            <p>
              Det genetiska systemet kodar för exakt 20 standard-aminosyror. Det kan verka lite – men med bara 20 "bokstäver" kan kroppen skriva ett i princip oändligt antal "ord". En peptid med tio aminosyror kan ha 20<sup>10</sup> – drygt 10 biljoner – unika sekvenser. Där finns utrymme för otrolig specificitet.
            </p>
            <p>
              Varje aminosyra har en gemensam ryggrad (aminogrupp + karboxylgrupp + alfakolbunden väteatom) och en unik sidokedja som ger den dess personlighet. Glycin har det enklast möjliga – bara ett väte. Tryptofan har ett komplext aromatiskt ringsystem. Cystein har en svavelatom som kan bilda disulfidbindningar och skapa ringstrukturer.
            </p>

            {/* Aminosyra-SVG diagram */}
            <figure className="pillar-figure">
              <svg viewBox="0 0 400 180" aria-label="Grundstruktur för en aminosyra" className="peptide-chain-svg">
                <rect x="20" y="20" width="360" height="140" rx="10" fill="#f8fbff" stroke="#ddd" strokeWidth="1"/>
                {/* Central carbon */}
                <circle cx="200" cy="90" r="18" fill="#0066cc" opacity="0.15" stroke="#0066cc" strokeWidth="2"/>
                <text x="200" y="95" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0055aa">Cα</text>
                {/* Amino group */}
                <rect x="60" y="72" width="80" height="36" rx="6" fill="#dcf5e8" stroke="#2e8b57" strokeWidth="1.5"/>
                <text x="100" y="87" textAnchor="middle" fontSize="11" fill="#1a5c2e" fontWeight="600">H₂N–</text>
                <text x="100" y="101" textAnchor="middle" fontSize="9" fill="#2e8b57">aminogrupp</text>
                <line x1="140" y1="90" x2="182" y2="90" stroke="#555" strokeWidth="1.5"/>
                {/* Carboxyl group */}
                <rect x="260" y="72" width="100" height="36" rx="6" fill="#ffeedd" stroke="#e07c00" strokeWidth="1.5"/>
                <text x="310" y="87" textAnchor="middle" fontSize="11" fill="#7a3900" fontWeight="600">–COOH</text>
                <text x="310" y="101" textAnchor="middle" fontSize="9" fill="#e07c00">karboxylgrupp</text>
                <line x1="218" y1="90" x2="260" y2="90" stroke="#555" strokeWidth="1.5"/>
                {/* H above */}
                <text x="200" y="50" textAnchor="middle" fontSize="13" fill="#333" fontWeight="600">H</text>
                <line x1="200" y1="55" x2="200" y2="72" stroke="#555" strokeWidth="1.5"/>
                {/* R group below */}
                <rect x="152" y="128" width="96" height="26" rx="6" fill="#f0e8ff" stroke="#8b2e8b" strokeWidth="1.5"/>
                <text x="200" y="144" textAnchor="middle" fontSize="11" fill="#5a1a7a" fontWeight="700">R-grupp</text>
                <line x1="200" y1="108" x2="200" y2="128" stroke="#555" strokeWidth="1.5"/>
                <text x="200" y="170" textAnchor="middle" fontSize="9" fill="#888" fontStyle="italic">sidokedja – unik för varje aminosyra</text>
              </svg>
              <figcaption>Grundstrukturen för en L-aminosyra. Alfakolet (Cα) är centralt – kopplat till aminogrupp, karboxylgrupp, ett väte och sidokedjan (R). Det är R-gruppen som avgör aminosyrans egenskaper.</figcaption>
            </figure>

            <h3>Essentiella aminosyror – de du måste äta</h3>
            <p>
              Nio av de 20 kan kroppen inte tillverka själv och måste tillföras via kosten – de kallas essentiella: leucin, isoleucin, valin, lysin, metionin, fenylalanin, treonin, tryptofan och histidin. Det är bland annat därför fullständiga proteinkällor (kött, ägg, mjölk) värderas högt i nutritionsforskning – de innehåller alla nio.
            </p>

            <h3>D- och L-aminosyror – spegelbilder med stora konsekvenser</h3>
            <p>
              Naturliga aminosyror förekommer i L-konfiguration. Syntetiska peptider kan inkorporera D-aminosyror – spegelbilder av de naturliga – för att göra dem mer stabila. Kroppens enzymer känner inte lika lätt igen D-aminosyrorna och bryter ner peptiden långsammare. Det är en vanlig strategi för att förlänga peptiders verkningstid.
            </p>
          </section>

          {/* ── 3. Struktur ── */}
          <section id="struktur">
            <h2>Struktur och bindningar – från kedja till funktion</h2>
            <p>
              En peptids förmåga att göra något biologiskt nyttigt hänger direkt på dess tredimensionella form. Sekvensen av aminosyror dikterar formen, och formen dikterar funktionen – det är ett av biologins grundprinciper.
            </p>

            <figure className="pillar-figure">
              <svg viewBox="0 0 500 160" aria-label="Strukturnivåer hos peptider" className="peptide-chain-svg">
                {/* Level 1 */}
                <rect x="20" y="20" width="100" height="120" rx="8" fill="#eef5ff" stroke="#0066cc" strokeWidth="1.5"/>
                <text x="70" y="42" textAnchor="middle" fontSize="9" fill="#0066cc" fontWeight="700">PRIMÄR</text>
                <text x="70" y="55" textAnchor="middle" fontSize="8" fill="#444">Sekvens</text>
                <g transform="translate(35,65)">
                  {['G','A','V','L','P','K'].map((aa, i) => (
                    <g key={aa}>
                      <circle cx={i*12} cy="12" r="7" fill="#0066cc" opacity="0.7"/>
                      <text x={i*12} y="16" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">{aa}</text>
                      {i < 5 && <line x1={i*12+7} y1="12" x2={i*12+5} y2="12" stroke="#0066cc" strokeWidth="1"/>}
                    </g>
                  ))}
                </g>
                <text x="70" y="115" textAnchor="middle" fontSize="7.5" fill="#666">AA-ordningsföljd</text>

                {/* Arrow */}
                <text x="130" y="88" fontSize="18" fill="#aaa">→</text>

                {/* Level 2 */}
                <rect x="148" y="20" width="100" height="120" rx="8" fill="#f0faf4" stroke="#2e8b57" strokeWidth="1.5"/>
                <text x="198" y="42" textAnchor="middle" fontSize="9" fill="#2e8b57" fontWeight="700">SEKUNDÄR</text>
                <text x="198" y="55" textAnchor="middle" fontSize="8" fill="#444">Alfa-helix / beta-flak</text>
                <path d="M163 65 Q175 55 187 65 Q199 75 211 65 Q223 55 235 65 Q223 75 211 85 Q199 95 187 85 Q175 75 163 85 Q175 95 187 105" fill="none" stroke="#2e8b57" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="198" y="120" textAnchor="middle" fontSize="7.5" fill="#666">Lokal vikning</text>

                {/* Arrow */}
                <text x="258" y="88" fontSize="18" fill="#aaa">→</text>

                {/* Level 3 */}
                <rect x="278" y="20" width="110" height="120" rx="8" fill="#fff8f0" stroke="#e07c00" strokeWidth="1.5"/>
                <text x="333" y="42" textAnchor="middle" fontSize="9" fill="#e07c00" fontWeight="700">TERTIÄR</text>
                <text x="333" y="55" textAnchor="middle" fontSize="8" fill="#444">3D-form</text>
                <ellipse cx="333" cy="88" rx="32" ry="22" fill="#ffe0b2" stroke="#e07c00" strokeWidth="1.5" opacity="0.7"/>
                <path d="M310 88 Q320 70 333 75 Q346 80 350 95 Q340 108 328 100 Q318 96 310 88Z" fill="#e07c00" opacity="0.25"/>
                <circle cx="333" cy="88" r="6" fill="#e07c00" opacity="0.5"/>
                <text x="333" y="120" textAnchor="middle" fontSize="7.5" fill="#666">Receptor-passform</text>

                {/* Arrow */}
                <text x="395" y="88" fontSize="18" fill="#aaa">→</text>

                {/* Result */}
                <rect x="415" y="52" width="65" height="56" rx="8" fill="#faf0ff" stroke="#8b2e8b" strokeWidth="1.5"/>
                <text x="447" y="74" textAnchor="middle" fontSize="9" fill="#8b2e8b" fontWeight="700">EFFEKT</text>
                <text x="447" y="88" textAnchor="middle" fontSize="8" fill="#444">Signal</text>
                <text x="447" y="100" textAnchor="middle" fontSize="8" fill="#444">aktiveras</text>
              </svg>
              <figcaption>Från sekvens till biologisk effekt: aminosyrornas ordning skapar en tredimensionell form som passar in i specifika receptorer – som en nyckel i ett lås.</figcaption>
            </figure>

            <p>
              Korta peptider (under ~10 aminosyror) har sällan en fast stabil struktur i lösning – de är flexibla och tar den form som bäst passar den receptor de möter. Det är faktiskt en fördel: samma peptid kan interagera med flera receptorer beroende på kontext.
            </p>
            <p>
              <strong>Cykliska peptider</strong> är ett viktigt undantag. Här sluter en peptidbindning eller en disulfidbindning kedjan till en ring, vilket låser strukturen och ger ökad stabilitet och receptorselektivitet. BPC-157 är ett välkänt exempel.
            </p>
          </section>

          {/* ── 4. Funktioner ── */}
          <section id="funktioner">
            <h2>Vad gör peptider i kroppen?</h2>
            <p>
              Kroppen producerar uppskattningsvis över 7 000 naturliga peptider. De sköter ett häpnadsväckande brett spektrum av uppgifter – från att reglera hunger till att läka sår, från att styra sömncykler till att koordinera immunsvar. Här är de viktigaste rollerna:
            </p>

            {/* Funktion-diagram */}
            <figure className="pillar-figure">
              <svg viewBox="0 0 560 220" aria-label="Peptidernas funktioner i kroppen" className="peptide-chain-svg">
                <rect x="10" y="10" width="540" height="200" rx="10" fill="#fafafa" stroke="#eee" strokeWidth="1"/>
                {/* Central peptide icon */}
                <circle cx="280" cy="110" r="30" fill="#0066cc" opacity="0.12" stroke="#0066cc" strokeWidth="2"/>
                <text x="280" y="106" textAnchor="middle" fontSize="11" fill="#0066cc" fontWeight="700">Peptid</text>
                <text x="280" y="120" textAnchor="middle" fontSize="9" fill="#0066cc">receptor</text>
                {/* Function boxes */}
                {[
                  { label: 'Hormoner', sub: 'insulin, GLP-1', x: 70, y: 40, color: '#2e8b57' },
                  { label: 'Immunförsvar', sub: 'AMP, thymosin', x: 420, y: 40, color: '#8b2e8b' },
                  { label: 'Vävnadsrep.', sub: 'BPC-157, TB-500', x: 70, y: 160, color: '#e07c00' },
                  { label: 'Neurologi', sub: 'endorfiner', x: 420, y: 160, color: '#1a6680' },
                  { label: 'Tillväxt', sub: 'GH-axeln', x: 245, y: 28, color: '#c0392b' },
                  { label: 'Ämnesomsättn.', sub: 'MOTS-c, GLP-1', x: 245, y: 178, color: '#0066cc' },
                ].map(({ label, sub, x, y, color }) => (
                  <g key={label}>
                    <rect x={x-45} y={y-16} width="90" height="38" rx="6" fill={`${color}18`} stroke={color} strokeWidth="1.5"/>
                    <text x={x} y={y+2} textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{label}</text>
                    <text x={x} y={y+16} textAnchor="middle" fontSize="8" fill="#666">{sub}</text>
                    {/* Line to center */}
                    <line
                      x1={x + (280 - x) * 0.5} y1={y + (110 - y) * 0.5}
                      x2={280 + (x - 280) * 0.38} y2={110 + (y - 110) * 0.38}
                      stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6"
                    />
                  </g>
                ))}
              </svg>
              <figcaption>Peptider fungerar som kroppens interna kommunikationsnätverk – med separata "kanaler" för hormoner, immunförsvar, neurologi, tillväxt, ämnesomsättning och vävnadsreparation.</figcaption>
            </figure>

            <h3>Hormoner och hungersignalering</h3>
            <p>
              Många av kroppens viktigaste hormoner är peptider. Insulin reglerar blodsockret. Glukagon mobiliserar glykogen. GLP-1 frisätts när du äter och signalerar mättnad till hjärnan medan det bromsar magtömningen. Det är exakt den mekanismen semaglutide imiterar – och varför det fungerar så väl mot fetma. Mer om det i vår <Link href="/articles/semaglutide-guide">Semaglutide-guide</Link>.
            </p>

            <h3>Tillväxthormonaxeln</h3>
            <p>
              Hypotalamus frisätter GHRH som triggar hypofysen att producera tillväxthormon, som i sin tur stimulerar IGF-1-produktion i levern. Syntetiska GHRH-analoger som CJC-1295 och GHRP:er som ipamorelin kan förstärka den här kedjan utan att tillföra exogent GH. Det är den mest studerade tillämpningen för peptider inom idrottskontext. Se <Link href="/articles/ipamorelin-guide">Ipamorelin-guiden</Link>.
            </p>

            <h3>Mitokondriella peptider – ett nyare fält</h3>
            <p>
              MOTS-c och SS-31 är peptider kodade av mitokondriellt DNA – inte av cellkärnans DNA som de flesta proteiner. De verkar på cellulär energiproduktion och skyddar mot oxidativ stress. Det är ett relativt nytt och spännande forskningsområde, men mänskliga kliniska studier är fortfarande begränsade. Läs mer i <Link href="/articles/mots-c-guide">MOTS-c-guiden</Link> och <Link href="/articles/ss-31-guide">SS-31-guiden</Link>.
            </p>
          </section>

          {/* ── 5. Naturliga vs syntetiska ── */}
          <section id="naturliga-syntetiska">
            <h2>Naturliga peptider vs syntetiska – vad är skillnaden?</h2>
            <p>
              Kroppen producerar sina egna peptider i exakta mängder, vid exakta tidpunkter, i response på exakta signaler. Det är ett elegant och finjusterat system. Syntetiska peptider är ett sätt att antingen förstärka, efterlikna eller modifiera det systemet utifrån.
            </p>

            <div className="comparison-grid">
              <div className="comparison-card">
                <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" style={{marginBottom:'10px'}}>
                  <circle cx="24" cy="24" r="20" fill="#e8f5e9" stroke="#2e8b57" strokeWidth="2"/>
                  <path d="M16 24 Q20 16 24 20 Q28 16 32 24 Q28 32 24 28 Q20 32 16 24Z" fill="#a5d6a7" stroke="#2e8b57" strokeWidth="1.5"/>
                  <circle cx="24" cy="24" r="4" fill="#2e8b57"/>
                </svg>
                <h3>Naturliga peptider</h3>
                <p>Produceras av kroppen (endogena) eller förekommer i livsmedel som kollagen och vassleprotein. Regleras av komplexa feedbacksystem och justeras kontinuerligt. Nivåerna sjunker med åldern – GH-frisättning minskar, MOTS-c sjunker vid metabolt syndrom.</p>
              </div>
              <div className="comparison-card">
                <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" style={{marginBottom:'10px'}}>
                  <rect x="4" y="4" width="40" height="40" rx="6" fill="#eef5ff" stroke="#0066cc" strokeWidth="2"/>
                  <line x1="14" y1="24" x2="34" y2="24" stroke="#0066cc" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="14" cy="24" r="4" fill="#0066cc"/>
                  <circle cx="24" cy="16" r="4" fill="#5ab3ff"/>
                  <circle cx="34" cy="24" r="4" fill="#0066cc"/>
                  <circle cx="24" cy="32" r="4" fill="#5ab3ff"/>
                  <line x1="14" y1="24" x2="24" y2="16" stroke="#0066cc" strokeWidth="1.5"/>
                  <line x1="24" y1="16" x2="34" y2="24" stroke="#0066cc" strokeWidth="1.5"/>
                  <line x1="34" y1="24" x2="24" y2="32" stroke="#0066cc" strokeWidth="1.5"/>
                  <line x1="24" y1="32" x2="14" y2="24" stroke="#0066cc" strokeWidth="1.5"/>
                </svg>
                <h3>Syntetiska peptider</h3>
                <p>Tillverkas kemiskt via fast-fas peptidsyntes. Kan vara identiska kopior av naturliga peptider (insulin), analoger med justerade egenskaper (semaglutide med förlängd halveringstid), eller helt nya sekvenser (BPC-157). Möjliggör precis dosering och valfri timing.</p>
              </div>
            </div>

            <h3>Varför modifiera en naturlig peptid?</h3>
            <p>
              Kroppens egna peptider bryts ofta ner på minuter. Det är bra i kroppen – snabb reglering. Men som läkemedel är det opraktiskt; du vill inte injicera en peptid var femte minut. Läkemedelsindustrin löser det med flera knep:
            </p>
            <ul>
              <li><strong>PEGylering</strong> – polyetylenglykol-kedjor som klistras på och fördröjer enzymatisk nedbrytning (semaglutide)</li>
              <li><strong>Fettsyraakonjugering</strong> – peptiden binds till albumin i blodet och stannar kvar längre</li>
              <li><strong>D-aminosyror</strong> – enzymer känner inte lika lätt igen dem, så peptiden håller längre</li>
              <li><strong>Cyklisering</strong> – stänger ringen och ger ökad stabilitet mot proteolyse</li>
            </ul>
          </section>

          {/* ── 6. Kategorier ── */}
          <section id="kategorier">
            <h2>Sex områden där peptider forskas mest</h2>
            <p>
              Peptider studeras inom ett brett spektrum av tillämpningar. Nedan är de sex viktigaste kategorierna – med länkade guider för varje enskild substans.
            </p>

            <div className="category-showcase">
              {categories.map((cat) => (
                <div key={cat.name} className="category-showcase-card">
                  <cat.Icon />
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  <div className="category-showcase-links">
                    {cat.links.map((l) => (
                      <Link key={l.href} href={l.href} className="cat-link">{l.label}</Link>
                    ))}
                    {cat.penpeptider && (
                      <a href={cat.penpeptider} target="_blank" rel="noopener noreferrer" className="cat-link cat-link-ext">
                        {cat.penpeptiderLabel} ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="pillar-note">
              Se samtliga guider i vårt <Link href="/guides">peptidguidebibliotek</Link>. Bläddrar du efter produkter hittar du dem hos <a href="https://www.penpeptider.com/collections/alla-peptider" target="_blank" rel="noopener noreferrer">Penpeptider.com</a>.
            </p>
          </section>

          {/* ── 7. Tillverkning ── */}
          <section id="tillverkning">
            <h2>Hur syntetiska peptider tillverkas</h2>
            <p>
              Det stora flertalet syntetiska peptider tillverkas via <strong>Solid-Phase Peptide Synthesis (SPPS)</strong> – en metod uppfunnen av Robert Bruce Merrifield på 1960-talet, som gav honom Nobelpriset i kemi 1984. Metoden revolutionerade fältet och gör det möjligt att bygga komplexa peptider metodiskt, aminosyra för aminosyra.
            </p>

            <figure className="pillar-figure">
              <svg viewBox="0 0 520 120" aria-label="SPPS-processen steg för steg" className="peptide-chain-svg">
                {[
                  { step: '1', label: 'Harts', sub: 'fast bärare', color: '#e07c00' },
                  { step: '2', label: 'Koppla AA', sub: 'en i taget', color: '#2e8b57' },
                  { step: '3', label: 'Upprepa', sub: 'n gånger', color: '#0066cc' },
                  { step: '4', label: 'Klyvning', sub: 'från harts', color: '#8b2e8b' },
                  { step: '5', label: 'HPLC-rening', sub: '>98% renhet', color: '#c0392b' },
                ].map(({ step, label, sub, color }, i) => (
                  <g key={step} transform={`translate(${20 + i * 100}, 20)`}>
                    <rect x="0" y="0" width="85" height="60" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.5"/>
                    <circle cx="16" cy="16" r="11" fill={color}/>
                    <text x="16" y="20" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">{step}</text>
                    <text x="44" y="22" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{label}</text>
                    <text x="44" y="36" textAnchor="middle" fontSize="8.5" fill="#555">{sub}</text>
                    {i < 4 && (
                      <text x="95" y="35" textAnchor="middle" fontSize="16" fill="#aaa">›</text>
                    )}
                  </g>
                ))}
                <text x="260" y="105" textAnchor="middle" fontSize="10" fill="#888" fontStyle="italic">
                  Varje batch avslutas med masspektrometriverifiering av korrekt molekylmassa
                </text>
              </svg>
              <figcaption>SPPS-processen i fem steg. Rening med HPLC (vätskekromatografi) säkerställer att slutprodukten är tillräckligt ren för forskning.</figcaption>
            </figure>

            <div className="info-box">
              <strong>Vad är ett COA och varför spelar det roll?</strong> Ett Certificate of Analysis (COA) är labbrapporten som visar peptidpreparatets renhet, identitet och eventuella föroreningar. Seriösa leverantörer bifogar alltid COA med HPLC-kromatogram och masspektrometridata. <Link href="/articles/vad-ar-coa">Läs vår guide om COA</Link> för att förstå hur du läser och tolkar ett sådant dokument.
            </div>
          </section>

          {/* ── 8. Administrering ── */}
          <section id="administrering">
            <h2>Hur administreras peptider?</h2>
            <p>
              Administreringssättet avgör hur mycket av peptiden som faktiskt når sitt mål i kroppen – det som kallas biotillgänglighet. Rätt metod beror på peptidens kemiska egenskaper.
            </p>

            <figure className="pillar-figure">
              <svg viewBox="0 0 500 130" aria-label="Administreringsvägar för peptider" className="peptide-chain-svg">
                {[
                  { method: 'Subkutan', desc: 'Injiceras under huden. Standardmetod för de flesta forskningspeptider. Förutsägbar absorption.', bio: '85–100%', color: '#0066cc' },
                  { method: 'Nasal', desc: 'Selank, semax. Kringgår delvis blod-hjärnbarriären via näshålan. Snabb verkan.', bio: '30–60%', color: '#2e8b57' },
                  { method: 'Oral', desc: 'Fungerar för kollagen och kortkedjiga peptider. De flesta bioaktiva peptider bryts ned i magsystemet.', bio: '1–10%', color: '#e07c00' },
                  { method: 'Topisk', desc: 'GHK-Cu i hudvård. Lokal effekt i dermis. Ingen systemisk absorption av klinisk relevans.', bio: 'Lokal', color: '#8b2e8b' },
                ].map(({ method, desc, bio, color }, i) => (
                  <g key={method} transform={`translate(${10 + i * 122}, 10)`}>
                    <rect x="0" y="0" width="112" height="110" rx="8" fill={`${color}0f`} stroke={color} strokeWidth="1.5"/>
                    <text x="56" y="20" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{method}</text>
                    <rect x="8" y="25" width="96" height="18" rx="4" fill={color} opacity="0.15"/>
                    <text x="56" y="37" textAnchor="middle" fontSize="9" fill={color} fontWeight="600">Biotillg.: {bio}</text>
                    <foreignObject x="8" y="48" width="96" height="56">
                      <p xmlns="http://www.w3.org/1999/xhtml" style={{fontSize:'8px',margin:0,color:'#444',lineHeight:'1.4'}}>{desc}</p>
                    </foreignObject>
                  </g>
                ))}
              </svg>
              <figcaption>De fyra vanligaste administreringsvägarna. Biotillgänglighet anger ungefär hur stor andel av dosen som faktiskt når systemcirkulationen.</figcaption>
            </figure>

            <p>
              Subkutan injektion låter mer dramatiskt än det är. Moderna insulinnålar är tunnare än ett hårstrå och de flesta som börjar med regelbundna injektioner vänjyer sig snabbt. Mer om praktiken i vår guide om <Link href="/articles/forsta-injektionen">din första injektion</Link>.
            </p>
          </section>

          {/* ── 9. Medicin ── */}
          <section id="medicin">
            <h2>Peptider i modern medicin</h2>
            <p>
              Peptiders historia som läkemedel börjar 1921 när Banting och Best isolerade insulin från hundbukspottkörtel i Kanada. Patienter med typ 1-diabetes dog utan tillgång till insulin. Den isolerade substansen räddade liv omedelbart – och är fortfarande grunden i diabetesbehandling hundra år senare.
            </p>
            <p>
              Sedan dess har peptidläkemedel expanderat dramatiskt. Över <strong>80 peptidbaserade läkemedel</strong> är idag godkända av FDA, och det är ett av de snabbast växande segmenten i läkemedelsindustrin. Här är några representativa exempel:
            </p>

            <div className="medicine-table">
              <div className="medicine-row medicine-header">
                <span>Peptid / Läkemedel</span>
                <span>Indikation</span>
                <span>Godkänd</span>
              </div>
              {[
                ['Insulin (Humalin, Novolin)', 'Diabetes mellitus typ 1 & 2', 'FDA 1982 (rekombinant)'],
                ['Semaglutide (Ozempic / Wegovy)', 'Typ 2-diabetes och fetma', 'FDA/EMA 2021'],
                ['Tirzepatide (Mounjaro)', 'Typ 2-diabetes och fetma', 'FDA 2022'],
                ['Liraglutide (Victoza / Saxenda)', 'Diabetes och viktkontroll', 'FDA 2010/2014'],
                ['Bremelanotide / PT-141 (Vyleesi)', 'HSDD – sexuell lust', 'FDA 2019'],
                ['Leuprolide (Lupron)', 'Prostatacancer, endometrios', 'FDA 1985'],
                ['Thymosin alpha-1 (Zadaxin)', 'Immunmodulering, hepatit B', '35+ länder'],
                ['Oxytocin (Syntocinon)', 'Förlossningsstimulering', 'Sedan 1960-talet'],
              ].map(([name, ind, app]) => (
                <div key={name} className="medicine-row">
                  <span><strong>{name}</strong></span>
                  <span>{ind}</span>
                  <span>{app}</span>
                </div>
              ))}
            </div>

            <p style={{marginTop:'16px', color:'var(--text-light)', fontSize:'0.9rem'}}>
              För en djupare genomgång av kliniska studier och evidensnivåer – se vår <Link href="/forskning">forskningssida</Link>.
            </p>
          </section>

          {/* ── 10. Lagstatus ── */}
          <section id="lagstatus">
            <h2>Lagstatus i Sverige – vad gäller?</h2>
            <p>
              Det är en fråga vi får ofta, och svaret är tyvärr inte ett enkelt ja eller nej. Det beror helt på vilken peptid du frågar om.
            </p>

            <div className="legal-grid">
              <div className="legal-card legal-green">
                <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true" style={{marginBottom:'8px'}}>
                  <circle cx="20" cy="20" r="18" fill="#2e8b57" opacity="0.15" stroke="#2e8b57" strokeWidth="2"/>
                  <polyline points="10,20 17,28 30,12" stroke="#2e8b57" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Godkända läkemedel</h3>
                <p>Insulin, semaglutide, tirzepatide och liraglutide är godkända läkemedel. Helt lagliga med recept från läkare.</p>
              </div>
              <div className="legal-card legal-yellow">
                <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true" style={{marginBottom:'8px'}}>
                  <circle cx="20" cy="20" r="18" fill="#e07c00" opacity="0.15" stroke="#e07c00" strokeWidth="2"/>
                  <text x="20" y="27" textAnchor="middle" fontSize="22" fill="#e07c00" fontWeight="900">!</text>
                </svg>
                <h3>Forskningspeptider</h3>
                <p>De flesta syntetiska peptider (BPC-157, ipamorelin, CJC-1295) klassas som kemikalier. Lagliga att förvärva och inneha för forskning, men inte för klinisk användning utan läkartillsyn.</p>
              </div>
              <div className="legal-card legal-red">
                <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true" style={{marginBottom:'8px'}}>
                  <circle cx="20" cy="20" r="18" fill="#c0392b" opacity="0.15" stroke="#c0392b" strokeWidth="2"/>
                  <line x1="12" y1="12" x2="28" y2="28" stroke="#c0392b" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="28" y1="12" x2="12" y2="28" stroke="#c0392b" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <h3>Narkotikaklassade</h3>
                <p>Melanotan II är narkotikaklassat i Sverige sedan 2021. Innehav och överlåtelse är straffbart. Kontrollera alltid aktuell lagstiftning.</p>
              </div>
            </div>

            <div className="disclaimer-box" style={{marginTop:'24px'}}>
              Lagstiftningen ändras. Peptidinfo lämnar ingen juridisk rådgivning – kontrollera alltid aktuell status hos <a href="https://www.lakemedelsverket.se" target="_blank" rel="noopener noreferrer">Läkemedelsverket</a> och <a href="https://www.tullverket.se" target="_blank" rel="noopener noreferrer">Tullverket</a>.
            </div>
          </section>

          {/* ── 11. Läsa forskning ── */}
          <section id="forskning">
            <h2>Hur du läser peptidforskning kritiskt</h2>
            <p>
              Peptidfältet är fullt av lovande data. Det är också fullt av hype, missförstånd och selektiv citering. Att kunna skilja på "det finns en råttstudie" och "det är kliniskt bevisat" är grundläggande för att navigera det här området.
            </p>

            <div className="evidence-pyramid">
              <svg viewBox="0 0 400 200" aria-label="Evidenshierarki – från anekdot till systematisk översikt" className="peptide-chain-svg">
                <defs>
                  <linearGradient id="pyramidGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2e8b57" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#e07c00" stopOpacity="0.7"/>
                  </linearGradient>
                </defs>
                {[
                  { y: 20, w: 80, label: 'Meta-analyser & systematiska översikter', level: 'Högst evidens' },
                  { y: 52, w: 140, label: 'Randomiserade kontrollerade studier (RCT)', level: 'Fas 3' },
                  { y: 84, w: 200, label: 'Kohort- och fallkontrollstudier', level: 'Fas 2' },
                  { y: 116, w: 280, label: 'Djurstudier och in vitro', level: 'Fas 1' },
                  { y: 148, w: 360, label: 'Fallrapporter och anekdoter', level: 'Lägst evidens' },
                ].map(({ y, w, label, level }, i) => (
                  <g key={i}>
                    <rect x={(400 - w) / 2} y={y} width={w} height={28} rx="4"
                      fill={`hsl(${140 - i * 30}, 60%, ${60 - i * 5}%)`} opacity="0.85"/>
                    <text x="200" y={y + 12} textAnchor="middle" fontSize="8.5" fill="white" fontWeight="700">{label}</text>
                    <text x="200" y={y + 24} textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.8)">{level}</text>
                  </g>
                ))}
              </svg>
              <figcaption>Evidenshierarkin – ju högre upp, desto starkare är stödet för ett påstående. Många peptidpåståenden baseras på djurstudier, som befinner sig nära botten av pyramiden.</figcaption>
            </div>

            <div className="checklist">
              {[
                ['Vem gjordes studien på?', 'Celler (in vitro), djur eller människa? Varje steg uppåt är en stor validering.'],
                ['Hur stor var studien?', 'Fas 1 har typiskt 10–80 deltagare. Fas 3 har 1 000+. Liten studie = svagare bevis.'],
                ['Var är den publicerad?', 'Peer-reviewed tidskrift (PubMed) är mer tillförlitligt än en preprint eller ett blogginlägg.'],
                ['Vem finansierade?', 'Industristudier kan ha bias. Oberoende replikation är guldstandarden.'],
                ['Vilket primärt endpoint?', 'Kliniskt relevant (viktminskning, mortalitet) är mer värt än en surrogatmarkör.'],
              ].map(([term, desc]) => (
                <div key={term} className="checklist-item">
                  <svg viewBox="0 0 22 22" width="22" height="22" aria-hidden="true" className="checklist-svg">
                    <circle cx="11" cy="11" r="10" fill="#e8f7ee" stroke="#2e8b57" strokeWidth="1.5"/>
                    <polyline points="6,11 9.5,15 16,7" stroke="#2e8b57" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div><strong>{term}</strong> {desc}</div>
                </div>
              ))}
            </div>

            <p style={{marginTop:'20px'}}>
              Vår <Link href="/forskning">forskningssida</Link> kategoriserar peptider efter evidensnivå – från godkänt läkemedel till tidig djurstudiedata – med direktlänkar till PubMed.
            </p>
          </section>

          {/* ── 12. FAQ ── */}
          <section id="faq">
            <h2>Vanliga frågor</h2>
            <div className="pillar-faq">
              {faqItems.map((item, i) => (
                <div key={i} className="pillar-faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="disclaimer-box" style={{marginTop:'48px'}}>
            <strong>Ansvarsfriskrivning:</strong> Den här sidan är utbildningsmaterial och ersätter inte medicinsk rådgivning, diagnos eller behandling. Konsultera alltid en legitimerad läkare eller apotekare innan du vidtar åtgärder baserade på det du läst här.
          </div>

        </article>
      </div>
    </main>
  );
}
