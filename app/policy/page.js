import Link from 'next/link';

export const metadata = {
  title: 'Integritet och policy | Peptidinfo',
  description: 'Peptidinfos integritetspolicy och användarvillkor. Information om cookies, datainsamling och hur vi hanterar dina uppgifter.',
  openGraph: {
    title: 'Integritetspolicy | Peptidinfo',
    url: 'https://peptidinfo.se/policy',
  },
};

export default function PolicyPage() {
  return (
    <main className="container">
      <article className="article-page">
        <header className="article-header">
          <h1>Integritet och policy</h1>
          <p className="article-meta">Senast uppdaterad: april 2026</p>
        </header>

        <div className="article-content">
          <p className="article-intro">
            Peptidinfo.se värnar om din integritet. Den här sidan förklarar hur vi samlar in, använder och skyddar information när du besöker vår webbplats.
          </p>

          <h2>1. Personuppgiftsansvarig</h2>
          <p>
            Peptidinfo är ansvarig för behandlingen av personuppgifter på peptidinfo.se. Vi följer dataskyddsförordningen (GDPR) och tillämplig svensk lagstiftning.
          </p>

          <h2>2. Vilka uppgifter samlar vi in?</h2>

          <h3>Kontaktformulär</h3>
          <p>
            När du skickar ett meddelande via vårt <Link href="/kontakt">kontaktformulär</Link> behandlar vi de uppgifter du anger: namn, e-postadress och meddelandeinnehåll. Dessa används uteslutande för att besvara din förfrågan.
          </p>
          <p>
            Formuläret hanteras via tjänsten <strong>Web3Forms</strong> (web3forms.com). Dina uppgifter skickas krypterat (HTTPS) och lagras inte permanent av Web3Forms efter leverans.
          </p>

          <h3>Webbanalys</h3>
          <p>
            Vi kan använda anonymiserade analysverktyg (t.ex. Plausible eller liknande cookiefri lösning) för att förstå hur webbplatsen används. Dessa verktyg samlar inte in personidentifierbar information och sätter inga spårningscookies.
          </p>

          <h3>Serverloggar</h3>
          <p>
            Som alla webbplatser loggar vår server automatiskt IP-adress, webbläsartyp, besökt sida och tidpunkt. Dessa loggar lagras kortvarigt för drift och säkerhet och delas inte med tredje part.
          </p>

          <h2>3. Hur använder vi dina uppgifter?</h2>
          <ul>
            <li>För att besvara frågor och förfrågningar via kontaktformuläret</li>
            <li>För att förbättra webbplatsens innehåll och prestanda</li>
            <li>För att uppfylla rättsliga skyldigheter</li>
          </ul>
          <p>Vi säljer, delar eller hyr aldrig ut dina uppgifter till tredje part i marknadsföringssyfte.</p>

          <h2>4. Rättslig grund för behandling</h2>
          <p>
            Behandlingen av uppgifter från kontaktformuläret sker med stöd av artikel 6.1(b) GDPR – behandlingen är nödvändig för att fullgöra en åtgärd på begäran av dig (att besvara din fråga). Serverloggar behandlas med stöd av artikel 6.1(f) – berättigat intresse för drift och säkerhet.
          </p>

          <h2>5. Dina rättigheter</h2>
          <p>Enligt GDPR har du rätt att:</p>
          <ul>
            <li><strong>Tillgång</strong> – begära en kopia av de uppgifter vi har om dig</li>
            <li><strong>Rättelse</strong> – begära att felaktiga uppgifter rättas</li>
            <li><strong>Radering</strong> – begära att dina uppgifter raderas ("rätten att bli glömd")</li>
            <li><strong>Begränsning</strong> – begära att behandlingen av dina uppgifter begränsas</li>
            <li><strong>Invändning</strong> – invända mot behandling baserad på berättigat intresse</li>
          </ul>
          <p>
            Kontakta oss via <Link href="/kontakt">kontaktformuläret</Link> för att utöva dina rättigheter. Du har även rätt att lämna klagomål till <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">Integritetsskyddsmyndigheten (IMY)</a>.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Peptidinfo.se strävar efter att fungera utan spårningscookies. Vi sätter inga tredjepartscookies för annonsering eller profilskapande. Om tekniska sessionscookies används för webbplatsens funktion raderas dessa när du stänger webbläsaren.
          </p>

          <h2>7. Externa länkar</h2>
          <p>
            Webbplatsen innehåller länkar till externa webbplatser, bland annat{' '}
            <a href="https://www.penpeptider.com" target="_blank" rel="noopener noreferrer">penpeptider.com</a>,{' '}
            <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer">PubMed</a> och{' '}
            <a href="https://www.clinicaltrials.gov" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov</a>.
            Vi ansvarar inte för dessa webbplatsers integritetspolicyer eller innehåll.
          </p>

          <h2>8. Dataskydd och säkerhet</h2>
          <p>
            All kommunikation med peptidinfo.se sker via krypterad HTTPS-anslutning. Vi vidtar tekniska och organisatoriska åtgärder för att skydda dina uppgifter mot obehörig åtkomst, förlust eller förstöring.
          </p>

          <h2>9. Medicinsk ansvarsfriskrivning</h2>
          <p>
            Peptidinfo.se tillhandahåller uteslutande utbildnings- och informationsmaterial. Ingenting på denna webbplats utgör medicinsk rådgivning, diagnos eller behandlingsrekommendation. Konsultera alltid en legitimerad läkare eller annan behörig vårdpersonal innan du vidtar åtgärder baserade på information du finner här.
          </p>

          <h2>10. Ändringar av denna policy</h2>
          <p>
            Vi kan uppdatera denna integritetspolicy vid behov. Senaste uppdateringsdatum anges alltid överst på sidan. Fortsatt användning av webbplatsen efter en uppdatering innebär att du accepterar den reviderade policyn.
          </p>

          <h2>11. Kontakt</h2>
          <p>
            Frågor om vår integritetspolicy besvaras via <Link href="/kontakt">kontaktformuläret</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
