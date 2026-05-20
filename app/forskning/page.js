import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Peptidforskning – Evidens, studier och aktuell vetenskap | Peptidinfo',
  description: 'Genomgång av kliniska studier, fas-prövningar och aktuell forskning om peptider. Vi skiljer tydligt mellan bevisad effekt och pågående teorier.',
  openGraph: {
    title: 'Peptidforskning | Peptidinfo',
    description: 'Evidensbaserad genomgång av klinisk peptidforskning.',
    url: 'https://peptidinfo.se/forskning',
  },
};

const evidenceLevels = [
  {
    level: 'Stark evidens (Fas 3 / godkänt läkemedel)',
    color: '#2e8b57',
    bg: '#f0faf4',
    border: '#2e8b57',
    description: 'Resultat bekräftade i stora randomiserade kontrollerade studier (RCT). Godkänd klinisk användning.',
    peptides: [
      {
        name: 'Semaglutide (Ozempic, Wegovy)',
        indication: 'Typ 2-diabetes och fetma',
        study: 'STEP 1-studien (NEJM 2021): 14,9% viktminskning vs 2,4% placebo över 68 veckor (n=1961)',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/34170647/',
        note: 'FDA- och EMA-godkänt. Stark kardiovaskulär evidens via SELECT-studien (NEJM 2023, PMID 37952378).',
      },
      {
        name: 'Tirzepatide (Mounjaro, Zepbound)',
        indication: 'Typ 2-diabetes och fetma',
        study: 'SURMOUNT-1 (NEJM 2022): upp till 22,5% viktminskning vid 15 mg vs 2,4% placebo (n=2539)',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/35658024/',
        note: 'FDA-godkänt. Dual GIP/GLP-1-agonist med överlägsen effekt jämfört med semaglutide i head-to-head (SURPASS-2).',
      },
      {
        name: 'PT-141 / Bremelanotide (Vyleesi)',
        indication: 'Hypoaktiv sexuell lust hos premenopausala kvinnor',
        study: 'RECONNECT-studien: signifikant förbättring av sexuell lust och minskat oro-relaterat lidande vs placebo',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/31082367/',
        note: 'FDA-godkänt 2019. Melanokortinreceptoragonist (MC3R/MC4R).',
      },
    ],
  },
  {
    level: 'Lovande evidens (Fas 2 avslutad / pågående Fas 3)',
    color: '#e67e00',
    bg: '#fff8f0',
    border: '#e67e00',
    description: 'Fas 2-data är publicerade med statistiskt signifikanta resultat. Fas 3-studier pågår eller planeras. Klinisk effekt trolig men ännu ej slutgiltigt bevisad i stora populationer.',
    peptides: [
      {
        name: 'Retatrutide',
        indication: 'Fetma och metabola sjukdomar',
        study: 'Fas 2 (NEJM 2023, PMID 37366324): 24,2% viktminskning vid 48 veckor, 12 mg dos. Visceralt fett och levervolym minskade signifikant.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/37366324/',
        note: 'TRIUMPH-1 (Fas 3) pågår. Trippelagonist GLP-1/GIP/glukagon – en av de starkaste metabola effekterna som dokumenterats farmakologiskt.',
      },
      {
        name: 'SS-31 / Elamipretide',
        indication: 'Hjärtsvikt, mitokondriell myopati (Barths syndrom)',
        study: 'MMPOWER-3 (Fas 3 mot Barths): primärt endpunkt uppnått ej (6-minuters gångtest), men sekundära endpunkter visade signifikant förbättring i muskelstyrka.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/35973464/',
        note: 'Riktar cardiolipin i inre mitokondriella membranet. Fas 2-data för hjärtsvikt (STATIS) visade förbättrad systolisk funktion (Szeto HH et al.).',
      },
      {
        name: 'AOD-9604',
        indication: 'Fetma',
        study: 'Fas 3 avslutad utan att primärt endpunkt (viktminskning) uppnåddes statistiskt signifikant i hela populationen. Subgruppsanalyser visade effekt hos patienter med BMI 27–35.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/16524121/',
        note: 'Fragment av tillväxthormon (177–191). FDA-godkänt som GRAS-ingrediens i livsmedel. Fettmobilisering utan insulinresistens i djurstudier.',
      },
    ],
  },
  {
    level: 'Tidig/preliminär evidens (Fas 1–2 / djurstudier)',
    color: '#1a6680',
    bg: '#f0f7fa',
    border: '#1a6680',
    description: 'Studier finns men i begränsad skala eller primärt i djurmodeller. Mekanismer är välbeskrivna, human klinisk evidens är otillräcklig för kliniska rekommendationer.',
    peptides: [
      {
        name: 'BPC-157',
        indication: 'Vävnadshealing, magsår, inflammation',
        study: 'Övertygande data i råttmodeller (Sikiric et al., >200 studier). Påvisat effekt på sårläkning, ligamentläkning och gastrisk mukosa i djurstudier.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/30609583/',
        note: 'OBS: Inga publicerade RCT på människa. All klinisk evidens är anekdotisk eller retrospektiv. Mekanism involverar VEGF, NO-syntas och eNOS.',
      },
      {
        name: 'TB-500 / Thymosin Beta-4',
        indication: 'Vävnadshealing, hjärtskydd',
        study: 'Fas 2 för hjärtinfarkt (Goldstein AL et al.) visade säkert men ingen signifikant förbättring av ejektion. Djurstudier visar axonregenerering och vävnadsreparation.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/22236308/',
        note: 'Endogen peptid, naturligt förekommande i höga koncentrationer i trombocyter. G-aktin-bindande peptid. Begränsad human data.',
      },
      {
        name: 'MOTS-c',
        indication: 'Metabol hälsa, insulinkänslighet, åldrande',
        study: 'Lee et al. (Cell Metabolism 2015, PMID 25738459): MOTS-c injekterat i möss förbättrade insulinkänslighet och minskade fetma vid högfettkost via AMPK-aktivering.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/25738459/',
        note: 'Mitokondriell peptid kodad av mitokondriellt DNA (12S rRNA). Human observationsstudier visar korrelation med lägre MOTS-c vid metabolt syndrom. Inga RCT på människa.',
      },
      {
        name: 'Ipamorelin',
        indication: 'Tillväxthormonstimulering, postoperativ tarmrörlighet',
        study: 'Raun et al. (1998, PMID 9737079): selektiv GH-frisättning utan kortisol- eller prolaktinhöjning i råttmodeller. Fas 2 för postoperativ ileus (CPC-201) visade förkortad tarmåterhämtning.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/9737079/',
        note: 'Kliniskt mycket studerad GHRP utan kardiovaskulära bieffekter (till skillnad från GHRP-6/Hexarelin). Används kliniskt i Norden av vissa privata kliniker off-label.',
      },
      {
        name: 'Epithalon / Epitalon',
        indication: 'Telomerförlängning, anti-aging',
        study: 'Khavinson et al. (2002): In vitro-studie visade telomerförlängning och förhöjd telomerasaktivitet i mänskliga somatiska celler. Djurstudier visade ökad livslängd hos råttor.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/12539978/',
        note: 'Tetrapeptid (Ala-Glu-Asp-Gly). Forskning primärt från Khavinson-gruppen i S:t Petersburg. Oberoende replikationsstudier saknas. Tolka med försiktighet.',
      },
      {
        name: 'Selank',
        indication: 'Ångest, kognitiv funktion',
        study: 'Seredenin et al.: Jämförande studie mot fenazepam i Ryssland (godkänt läkemedel i Ryssland 2009). Visade anxiolytisk effekt utan sedation. Studiekvalitet begränsad av litet urval.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/19240853/',
        note: 'Analogt till tuftsin (Thr-Lys-Pro-Arg). Godkänt läkemedel i Ryssland men ej i EU/USA. Modulerar GABA-A och serotoninsystem. Stärker BDNF-expression.',
      },
      {
        name: 'GHK-Cu',
        indication: 'Hudföryngring, sårläkning',
        study: 'Pickart et al.: Serum GHK-Cu sjunker markant med åldern. In vitro-studier visar kollagensyntes, antioxidant och anti-inflammatorisk aktivitet.',
        pubmed: 'https://pubmed.ncbi.nlm.nih.gov/25506719/',
        note: 'Endogen tripeptid som binder koppar. Välstudiert in vitro och i djur. Klinisk data för topisk användning begränsad till små studier. Används brett i kosmetik.',
      },
    ],
  },
];

const upcomingStudies = [
  { name: 'Retatrutide TRIUMPH-1', focus: 'Fetma + kardiovaskulär sjukdom', status: 'Fas 3 pågår', expected: '2025–2026', link: 'https://www.clinicaltrials.gov/search?term=retatrutide' },
  { name: 'Semaglutide FLOW', focus: 'Kronisk njursjukdom', status: 'Fas 3 slutförd', expected: 'Publiceras 2024–2025', link: 'https://pubmed.ncbi.nlm.nih.gov/38785596/' },
  { name: 'Tirzepatide SURPASS-CVOT', focus: 'Kardiovaskulär säkerhet', status: 'Fas 3 pågår', expected: '2025', link: 'https://www.clinicaltrials.gov/search?term=tirzepatide+cardiovascular' },
  { name: 'SS-31 / Elamipretide (hjärtsvikt)', focus: 'HFrEF – ejektionsfraktion', status: 'Fas 2 avslutad, Fas 3 planeras', expected: 'TBD', link: 'https://www.clinicaltrials.gov/search?term=elamipretide' },
  { name: 'MOTS-c human Fas 1', focus: 'Insulinkänslighet hos äldre', status: 'Rekryterar', expected: '2026', link: 'https://www.clinicaltrials.gov/search?term=MOTS-c' },
];

const keyResearchers = [
  { name: 'Predrag Sikiric', institution: 'Universitetet i Zagreb, Kroatien', area: 'BPC-157 – gastrisk protektion, vävnadshealing', notable: 'Mer än 200 peer-reviewed publikationer om BPC-157 sedan 1990-talet.' },
  { name: 'Hazel Szeto', institution: 'Weill Cornell Medical College, USA', area: 'SS-31 / Elamipretide – mitokondriell medicin', notable: 'Pionjär inom mitokondriellt riktat skydd mot oxidativ stress.' },
  { name: 'Changhan David Lee', institution: 'USC Leonard Davis School, USA', area: 'MOTS-c och mitokondriellt DNA-kodat peptider', notable: 'Identifierade MOTS-c som en mitokondriell hormon (Cell Metabolism 2015).' },
  { name: 'Vladimir Khavinson', institution: 'St. Petersburg Institute of Bioregulation, Ryssland', area: 'Epitalon / Epithalon, bioregulatoriska peptider och åldrande', notable: 'Lång karriär inom peptidgerontologi. Notera: majoriteten av studierna är från samma forskargrupp.' },
  { name: 'Allan Goldstein', institution: 'George Washington University, USA', area: 'Thymosin beta-4 (TB-500)', notable: 'Isolerade thymosin alfa-1 och beta-4. Grundare av RegeneRx Biopharmaceuticals.' },
];

export default function ForskningPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    name: 'Peptidforskning – Evidens och aktuell vetenskap',
    description: 'Genomgång av kliniska studier och evidensnivåer för peptider inom medicinsk forskning.',
    url: 'https://peptidinfo.se/forskning',
    author: { '@type': 'Organization', name: 'Peptidinfo' },
  };

  return (
    <main>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <PageHero
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Forskning' }]}
        badge="Klinisk evidens"
        title="Peptidforskning"
        subtitle="En strukturerad genomgång av kliniska studier och evidensnivåer. Vi skiljer tydligt mellan bevisad effekt, lovande data och tidig/spekulativ forskning."
        pills={['Fas 1–3 studier', 'PubMed-källhänvisningar', 'Nyckelforskare', 'ClinicalTrials-data']}
        theme="teal"
      />

      <div className="container">

        <section className="research-intro card">
          <h2>Hur vi bedömer evidens</h2>
          <p>
            Alla påståenden om peptiders effekter är inte likvärdiga. Vi använder en förenklad version av evidenshierarkin för att tydliggöra hur starkt stöd varje peptid har i vetenskaplig litteratur.
          </p>
          <div className="evidence-legend">
            <div className="evidence-badge" style={{ borderColor: '#2e8b57', color: '#2e8b57', background: '#f0faf4' }}>Stark evidens – Fas 3 / godkänt läkemedel</div>
            <div className="evidence-badge" style={{ borderColor: '#e67e00', color: '#e67e00', background: '#fff8f0' }}>Lovande – Fas 2 avslutad / Fas 3 pågår</div>
            <div className="evidence-badge" style={{ borderColor: '#1a6680', color: '#1a6680', background: '#f0f7fa' }}>Tidig evidens – Fas 1–2 / djurstudier</div>
          </div>
          <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            <strong>Viktigt:</strong> Tidig evidens innebär inte att en peptid är ineffektiv – det innebär att vi ännu inte har tillräckliga humana data för kliniska rekommendationer. Djurstudier kan ge värdefulla mekanistiska insikter men översätts inte alltid till human effekt.
          </p>
        </section>

        {evidenceLevels.map((level) => (
          <section key={level.level} className="research-section">
            <div
              className="evidence-level-header"
              style={{ borderLeftColor: level.border, backgroundColor: level.bg }}
            >
              <h2 style={{ color: level.color, borderBottom: 'none', margin: 0, padding: 0 }}>
                {level.level}
              </h2>
              <p style={{ margin: '8px 0 0 0', color: 'var(--text-light)', fontSize: '0.95rem' }}>
                {level.description}
              </p>
            </div>

            <div className="research-cards">
              {level.peptides.map((p) => (
                <div key={p.name} className="research-card card">
                  <div className="research-card-header">
                    <h3>{p.name}</h3>
                    <span className="research-indication">{p.indication}</span>
                  </div>
                  <p className="research-study">{p.study}</p>
                  <p className="research-note">{p.note}</p>
                  <a
                    href={p.pubmed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pubmed-link"
                  >
                    Läs studie på PubMed →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Upcoming studies */}
        <section className="upcoming-section">
          <h2>Pågående och kommande studier att följa</h2>
          <div className="upcoming-table">
            <div className="upcoming-header">
              <span>Studie</span>
              <span>Fokus</span>
              <span>Status</span>
              <span>Förväntat</span>
            </div>
            {upcomingStudies.map((s) => (
              <div key={s.name} className="upcoming-row">
                <span><a href={s.link} target="_blank" rel="noopener noreferrer">{s.name}</a></span>
                <span>{s.focus}</span>
                <span>{s.status}</span>
                <span>{s.expected}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key researchers */}
        <section>
          <h2>Nyckelforskare inom peptidvetenskap</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '24px' }}>
            Forskningsfältet är relativt koncentrerat till ett antal grupper och individer. Att känna till vem som producerar forskning hjälper dig bedöma objektivitet och replikerbarhet.
          </p>
          <div className="grid">
            {keyResearchers.map((r) => (
              <div key={r.name} className="card">
                <h3>{r.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent)', margin: '0 0 8px' }}>{r.institution}</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: '0 0 8px' }}>{r.area}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: 0 }}>{r.notable}</p>
              </div>
            ))}
          </div>
        </section>

        {/* External resources */}
        <section className="card">
          <h2>Hitta primärkällor</h2>
          <p>All information på Peptidinfo backas upp av publik vetenskaplig litteratur. Sök själv i dessa databaser:</p>
          <div className="grid" style={{ marginTop: '16px' }}>
            <div>
              <h3><a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer">PubMed / MEDLINE</a></h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>National Library of Medicine. Världens mest kompletta databas för biomedicinska studier.</p>
            </div>
            <div>
              <h3><a href="https://www.clinicaltrials.gov" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov</a></h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Register över pågående och avslutade kliniska prövningar världen över.</p>
            </div>
            <div>
              <h3><a href="https://www.cochranelibrary.com" target="_blank" rel="noopener noreferrer">Cochrane Library</a></h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Systematiska översikter och meta-analyser – högsta evidensnivån för behandlingseffekter.</p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="card" style={{ marginTop: '40px' }}>
          <h2>Fördjupa dig i enskilda peptider</h2>
          <p>
            Gå till våra <Link href="/guides">peptidguider</Link> för djupgående information om varje substans,
            eller börja med grunderna i <Link href="/articles/vad-ar-peptider">Vad är peptider?</Link>
          </p>
        </section>

      </div>
    </main>
  );
}
