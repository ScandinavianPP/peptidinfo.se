'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';

export default function KontaktPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'DIN-WEB3FORMS-NYCKEL-HÄR', // ← byt ut mot din nyckel från web3forms.com
          from_name: 'Peptidinfo Kontaktformulär',
          subject: `Kontaktformulär: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <PageHero
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Kontakt' }]}
        badge="Hör av dig"
        title="Kontakt"
        subtitle="Frågor, feedback eller samarbetsförfrågningar? Fyll i formuläret så återkommer vi inom 1–3 arbetsdagar."
        pills={['Feedback', 'Felrapportering', 'Samarbete', 'Presskontakt']}
        theme="amber"
      />

      <div className="container">
        <div className="contact-layout">

          {/* Contact form */}
          <section className="contact-form-section card">
            <h2>Skicka ett meddelande</h2>

            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Meddelandet är skickat!</h3>
                <p>Tack för att du hörde av dig. Vi svarar normalt inom 1–3 arbetsdagar.</p>
                <button
                  className="btn-primary"
                  onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Skicka ett nytt meddelande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Honeypot – skyddar mot spam */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Namn <span className="required">*</span></label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ditt namn"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-postadress <span className="required">*</span></label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="din@epost.se"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Ämne <span className="required">*</span></label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                  >
                    <option value="">Välj ämne...</option>
                    <option value="Allmän fråga">Allmän fråga</option>
                    <option value="Feedback på innehåll">Feedback på innehåll</option>
                    <option value="Felaktig information">Felaktig information</option>
                    <option value="Samarbete / backlink">Samarbete / backlink</option>
                    <option value="Presskontakt">Presskontakt</option>
                    <option value="Övrigt">Övrigt</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Meddelande <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beskriv ditt ärende..."
                    rows={6}
                    required
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error">
                    Något gick fel. Försök igen eller mejla oss direkt.
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
                </button>
              </form>
            )}
          </section>

          {/* Info column */}
          <aside className="contact-info">
            <div className="card contact-info-card">
              <h3>Innan du skriver</h3>
              <p>Kanske hittar du svar direkt i vår dokumentation:</p>
              <ul className="contact-links">
                <li><Link href="/faq">→ Vanliga frågor (FAQ)</Link></li>
                <li><Link href="/guides">→ Peptidguider</Link></li>
                <li><Link href="/forskning">→ Forskningsöversikt</Link></li>
                <li><Link href="/articles/vad-ar-peptider">→ Vad är peptider?</Link></li>
              </ul>
            </div>

            <div className="card contact-info-card">
              <h3>Svarstid</h3>
              <p>Vi svarar normalt inom <strong>1–3 arbetsdagar</strong>. Vid hög belastning kan det ta lite längre.</p>
            </div>

            <div className="card contact-info-card">
              <h3>Medicinsk rådgivning</h3>
              <p>
                Vi erbjuder <strong>inte</strong> medicinsk rådgivning. Frågor om dosering, säkerhet eller behandling
                ska alltid riktas till legitimerad läkare.
              </p>
            </div>

            <div className="card contact-info-card">
              <h3>Samarbete</h3>
              <p>
                Vi välkomnar samarbeten med seriösa aktörer inom peptid- och biohacking-branschen.
                Välj ämnet <em>Samarbete / backlink</em> i formuläret.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
