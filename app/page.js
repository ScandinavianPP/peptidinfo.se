'use client';

import Link from 'next/link';
import { useState } from 'react';
import { articles, searchArticles } from './data/articles';
import { blogArticles, searchBlogArticles } from './data/blog-articles';
import { blogArticles2, searchBlogArticles2 } from './data/blog-articles-2';
import PageHero from './components/PageHero';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  
  const allContent = [...blogArticles2, ...blogArticles, ...articles];
  const featuredArticles = allContent.slice(0, 6);
  const filteredArticles = searchQuery
    ? [...searchBlogArticles2(searchQuery), ...searchBlogArticles(searchQuery), ...searchArticles(searchQuery)]
    : featuredArticles;

  const faqItems = [
    {
      question: 'Vad är peptider?',
      answer: 'Peptider är korta kedjor av aminosyror som är byggstenar för proteiner. De är mindre än proteiner men spelar viktiga roller i kroppen. Läs mer i vår detaljerade guide om vad peptider är.'
    },
    {
      question: 'Är peptider lagliga i Sverige?',
      answer: 'Statusen av peptider varierar beroende på typ och användningsändamål. Vissa är godkända läkemedel, medan andra klassificeras som forskningskeemikalier. Konsultera alltid en läkare innan användning.'
    },
    {
      question: 'Vilka peptider är mest populära?',
      answer: 'Bland de mest utforskade peptiderna återfinns semaglutide för viktkontroll, ipamorelin för muskeluppbyggnad, BPC 157 för vävnadshealing och MOTS-c för mitokondriell hälsa. Var och en har olika användningsområden.'
    },
    {
      question: 'Hur säkra är peptider?',
      answer: 'Många peptider har god säkerhetsprofil när de används under medicinsk övervakning. Dock kan bieffekter förekomma. Vi tillhandahåller detaljerad säkerhetsinformation för varje peptid i våra artiklar.'
    },
    {
      question: 'Kan peptider öka muskeluppbyggnad?',
      answer: 'Ja, peptider som ipamorelin, CJC 1295 och andra GH-stimulerare kan stödja muskeluppbyggnad genom att öka tillväxthormonnivåer. Resultaten varierar och måste kombineras med träning och kost.'
    },
    {
      question: 'Var kan jag läsa mer om peptider?',
      answer: 'Vi erbjuder över 20 detaljerade artiklar om peptider, deras mekanismer, säkerhet och användningsområden. Utforska vårt bibliotek eller besök externa resurser som PubMed för vetenskaplig forskning.'
    }
  ];

  const researchAreas = [
    {
      title: 'Metabolisk Hälsa',
      description: 'Peptider för viktkontroll, diabetes och metabolisk optimering'
    },
    {
      title: 'Muskeluppbyggnad',
      description: 'Tillväxthormonstimulering och muskelregenering för prestationsförbättring'
    },
    {
      title: 'Vävnadshealing',
      description: 'Peptider för senor, ligament och muskelskador'
    },
    {
      title: 'Anti-aging',
      description: 'Hormonell optimering och cellulär regenerering för livslängd'
    }
  ];

  const categoryMap = [
    {
      name: 'Metabolism & Vikt',
      filter: (article) => /metabol|vikt|glp|gip|ti(?:rzepatid|z)/i.test(article.slug),
    },
    {
      name: 'Muskel & Prestation',
      filter: (article) => /muskel|growth|ipamorelin|cjc|gh/gi.test(article.slug),
    },
    {
      name: 'Vävnadshealing',
      filter: (article) => /bpc|tb|healing|reparation|ligament|tendon/i.test(article.slug),
    },
    {
      name: 'Anti-aging & Mitokondrier',
      filter: (article) => /mots|nad|antiaging|aging|åldrande/i.test(article.slug),
    },
  ];

  const guides = [
    { title: 'Nybörjarguide', slug: 'vad-ar-peptider', desc: 'Förstå grunderna om peptider och hur de fungerar' },
    { title: 'Peptider för Muskler', slug: 'peptider-muskeltillvaxt', desc: 'Utforska hur peptider stödjer muskeluppbyggnad och styrka' },
    { title: 'Säkerhet & Forskning', slug: 'peptidforskning-2026', desc: 'Läs om senaste rönen och säkerhetsprofiler' }
  ];

  return (
    <main>
      <PageHero
        badge="Kunskapshub om peptider"
        title="Peptidinfo – En informerad kunskapskälla"
        subtitle="Evidensbaserad information om peptider, forskning och hälsooptimering – utan marknadsföring eller överdrifter."
        pills={['150+ artiklar & guider', 'Peer-reviewed källor', 'Uppdaterat 2026', 'Skrivet på svenska']}
        theme="blue"
        disclaimer="Utbildningssyfte – ej medicinsk rådgivning. Konsultera alltid läkare."
      />

      {/* Pillar Section */}
      <section className="pillar-section">
        <div className="container">
          <h2>Vad är peptider?</h2>
          <p>Peptider är korta kedjor av aminosyror som fungerar som signalsubstanser i kroppen. De är mindre än proteiner men spelar viktiga roller inom hormonreglering, muskeluppbyggnad, vävnadshealing och metabolisk kontroll.</p>
          <Link href="/vad-ar-peptider" className="cta-link">
            Läs den kompletta guiden →
          </Link>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="research-section container">
        <h2>Forskningsområden</h2>
        <div className="grid">
          {researchAreas.map((area, idx) => (
            <div key={idx} className="card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Section */}
      <section className="categories-section container">
        <h2>Peptidkategorier för SEO</h2>
        <p>Vi delar in alla artiklar i forskningsenliga teman för bättre navigering och tydlig SEO-struktur.</p>
        <div className="grid">
          {categoryMap.map((category, index) => {
            const count = articles.filter(category.filter).length;
            return (
              <div key={index} className="card grid-item">
                <h3>{category.name}</h3>
                <p>{count} artiklar</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guides Section */}
      <section className="guides-section container">
        <h2>Toppguider för att komma igång</h2>
        <div className="grid">
          {guides.map((guide, idx) => (
            <div key={idx} className="card">
              <h3>{guide.title}</h3>
              <p>{guide.desc}</p>
              <Link href={`/articles/${guide.slug}`}>
                Läs guide →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Search & Featured Articles */}
      <section className="search-section container">
        <h2>Artiklar & Blogg</h2>
        <div className="search-box">
          <input
            type="search"
            placeholder="Sök peptider, mekanismer, säkerhet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Sök artiklar"
          />
          <p className="search-results">{filteredArticles.length} artiklar hittade</p>
        </div>

        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <article key={article.slug} className="card">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <Link href={`/articles/${article.slug}`}>
                Läs artikel →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section container">
        <div className="faq-figure-wrapper">
          <svg className="faq-icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#0066cc" opacity="0.08"/><path d="M32 50v-4" stroke="#0066cc" strokeWidth="4" strokeLinecap="round"/><path d="M32 18c-7 0-10 5-10 9c0 4 2 6 5 8c3 2 3 4 3 7" stroke="#0066cc" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
          <h2>Vanliga frågor</h2>
          <p className="faq-figure-text">En frågefigur symboliserar vår dedikation till tydlighet och evidensbaserade svar.</p>
        </div>
        <div className="faq-container">
          {faqItems.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openFAQIndex === idx}
              onToggle={() => setOpenFAQIndex(openFAQIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      {/* External Resources Section */}
      <section className="resources-section container">
        <h2>Externa resurser & links</h2>
        <p>För att utöka din kunskap rekommenderar vi följande externa resurser:</p>
        
        <div className="grid">
          <div className="card">
            <h3>Forum & Diskussioner</h3>
            <p>
              <a href="https://www.flashback.org" target="_blank" rel="noopener noreferrer">
                Flashback Forum
              </a> har en stor tråd om peptider där svenska användare delar erfarenheter och diskuterar resultat.
            </p>
          </div>

          <div className="card">
            <h3>Peptider i Sverige</h3>
            <p>
              <a href="https://www.penpeptider.com" target="_blank" rel="noopener noreferrer">
                Penpeptider.com
              </a> erbjuder utbildningsresurser och information om peptider från ett svenskt perspektiv.
            </p>
          </div>

          <div className="card">
            <h3>Vetenskaplig Forskning</h3>
            <p>
              <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer">
                PubMed
              </a> innehåller tusentals peer-reviewed studier om peptider, mekanismer och kliniska prövningar.
            </p>
          </div>

          <div className="card">
            <h3>Kliniska Prövningar</h3>
            <p>
              <a href="https://www.clinicaltrials.gov" target="_blank" rel="noopener noreferrer">
                ClinicalTrials.gov
              </a> listar alla pågående kliniska prövningar med peptider världen över.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Ansvarsfriskrivning:</strong> Denna webbplats tillhandahåller endast utbildningsinnehål. Vi rekommenderar inte användning av några substanser utan medicinsk övervakning. Alla externa länkar är för informationsändamål och vi förespråkar inte användning av något material utan läkarbedömning.
        </p>
      </section>
    </main>
  );
}