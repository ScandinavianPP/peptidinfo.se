'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';

const faqGroups = [
  {
    group: 'Grundläggande om peptider',
    items: [
      {
        q: 'Vad är peptider?',
        a: 'Peptider är korta kedjor av aminosyror (vanligen 2–50 stycken) bundna via peptidbindningar. De är kroppens kemiska budbärare och reglerar processer som hormonproduktion, immunförsvar, vävnadsreparation och ämnesomsättning. Insulin, oxytocin och GLP-1 är välkända exempel. Läs mer i vår kompletta guide: ',
        link: { href: '/vad-ar-peptider', label: 'Vad är peptider?' },
      },
      {
        q: 'Vad är skillnaden mellan peptider och proteiner?',
        a: 'Gränsen är konventionell och sätts vanligen vid 50 aminosyror. Peptider är kortare, ofta mer flexibla och verkar snabbare som biologiska signaler. Proteiner är längre, tredimensionellt vikta och har mer komplexa strukturella och enzymatiska funktioner.',
      },
      {
        q: 'Vad är skillnaden mellan naturliga och syntetiska peptider?',
        a: 'Naturliga peptider produceras av kroppen eller förekommer i livsmedel. Syntetiska peptider tillverkas kemiskt via fast-fas peptidsyntes (SPPS) och kan vara identiska kopior av naturliga peptider, analoger med förändrade egenskaper eller helt nya sekvenser som inte finns i naturen.',
      },
    ],
  },
  {
    group: 'Säkerhet och bieffekter',
    items: [
      {
        q: 'Är peptider säkra?',
        a: 'Det beror helt på vilken peptid. Godkända läkemedel som insulin och semaglutide har genomgått rigorös klinisk testning. Forskningspeptider har varierande säkerhetsprofiler och begränsad human klinisk data. Konsultera alltid legitimerad läkare. Peptidinfo lämnar inte medicinsk rådgivning.',
      },
      {
        q: 'Kan peptider tas oralt?',
        a: 'De flesta bioaktiva peptider bryts ned av magsyra och enzymer i magtarmkanalen och har därför låg oral biotillgänglighet. De administreras vanligen via subkutan injektion. Kollagenpeptider och några kortare peptider absorberas oralt. Oral administrering av peptider är ett aktivt forskningsområde.',
      },
      {
        q: 'Kan peptider ge beroende?',
        a: 'Opioid-peptider (endorfiner, enkefaliner) verkar på samma receptorer som morfin och kan ha beroendeframkallande egenskaper i hög dos. De flesta forskningspeptider (ipamorelin, BPC-157 etc.) är inte förknippade med beroendepotential, men fullständig klinisk data saknas för många substanser.',
      },
    ],
  },
  {
    group: 'Lagstatus och köp',
    items: [
      {
        q: 'Är peptider lagliga i Sverige?',
        a: 'Det varierar per substans. Godkända peptidläkemedel (insulin, semaglutide) kräver recept. De flesta forskningspeptider klassas som forskningskemikalier – lagliga att förvärva och inneha för forskning men ej för klinisk användning. Melanotan II är narkotikaklassat. Kontrollera alltid aktuell lagstiftning hos Läkemedelsverket.',
      },
      {
        q: 'Var kan jag läsa mer och hitta produktinformation?',
        a: 'Penpeptider.com är en svensk aktör med ett brett sortiment av forskningspeptider och utbildningsresurser. De publicerar regelbundna artiklar om peptidvetenskap på sin blogg.',
        link: { href: 'https://www.penpeptider.com/blogs/news', label: 'Penpeptider.com blogg', external: true },
      },
    ],
  },
  {
    group: 'Specifika peptider',
    items: [
      {
        q: 'Vilka peptider är vanligast för viktminskning?',
        a: 'Semaglutide (Ozempic/Wegovy) och tirzepatide (Mounjaro) är de mest kliniskt bevisade med Fas 3-data. Retatrutide är en trippelagonist under Fas 3 med ännu starkare fas 2-data. AOD-9604 är ett GH-fragment som testades specifikt för fettreduktion.',
        link: { href: '/articles/semaglutide-guide', label: 'Semaglutide-guide' },
      },
      {
        q: 'Vilka peptider forskas för muskeltillväxt?',
        a: 'Ipamorelin, CJC-1295, GHRP-2 och hexarelin stimulerar tillväxthormonfrisättning. De kombineras ofta (GHRH+GHRP) för synergistisk effekt. Observera att forskning primärt är på djur och små humana studier – inga stora RCT finns för prestandaapplikationer.',
        link: { href: '/articles/peptider-muskeltillvaxt', label: 'Guide: Peptider för muskler' },
      },
      {
        q: 'Vad är SS-31 och varför är den intressant?',
        a: 'SS-31 (elamipretide) är en mitokondriellt riktad tetrapeptid som binder cardiolipin i inre mitokondriemembrannet och skyddar mot oxidativ stress. Den är i klinisk testning för hjärtsvikt och mitokondriella sjukdomar (Barths syndrom). Fas 3-data är blandade men lovande sekundärendpunkter.',
        link: { href: '/articles/ss-31-guide', label: 'SS-31-guide' },
      },
    ],
  },
];

function FAQItem({ question, answer, link }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        {question}
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
          {link && (
            link.external
              ? <a href={link.href} target="_blank" rel="noopener noreferrer" style={{color:'var(--accent)'}}>{link.label} →</a>
              : <Link href={link.href} style={{color:'var(--accent)'}}>{link.label} →</Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main>
      <PageHero
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'FAQ' }]}
        badge="Frågor & svar"
        title="Vanliga frågor om peptider"
        subtitle="Svar på de vanligaste frågorna om peptiders kemi, säkerhet, lagstatus och specifika substanser."
        pills={['Grundläggande', 'Säkerhet', 'Lagstatus', 'Specifika peptider']}
        theme="purple"
      />

      <div className="container">
        {faqGroups.map((group) => (
          <section key={group.group} style={{ marginBottom: '40px' }}>
            <h2>{group.group}</h2>
            <div className="faq-container">
              {group.items.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} link={item.link} />
              ))}
            </div>
          </section>
        ))}

        <section className="card" style={{ marginTop: '40px' }}>
          <h2>Hittar du inte svar på din fråga?</h2>
          <p>
            Utforska vår{' '}
            <Link href="/vad-ar-peptider">grundguide om peptider</Link>,{' '}
            <Link href="/guides">20 specifika peptidguider</Link> eller{' '}
            <Link href="/forskning">forskningssidan</Link>.
            Kan du fortfarande inte hitta vad du söker?{' '}
            <Link href="/kontakt">Kontakta oss</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
