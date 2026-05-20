# Deployment Guide – Peptidinfo

## 1. Deploy til Vercel (Rekommenderat)

### Steg 1: Förbered GitHub (eller GitLab)
```bash
cd "c:\Users\zlato\Desktop\knoledge hub\peptidinfo-website"
git init
git add .
git commit -m "Initial commit: peptidinfo-website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/peptidinfo-website.git
git push -u origin main
```

### Steg 2: Anslut till Vercel
1. Gå till [vercel.com](https://vercel.com)
2. Logga in / Skapa konto
3. Klicka "New Project"
4. Välj ditt GitHub-repo `peptidinfo-website`
5. Klicka "Deploy"

### Steg 3: Domain Setup
1. I Vercel Project Settings → Domains
2. Lägg till `peptidinfo.se` och `www.peptidinfo.se`
3. Uppdatera DNS-poster hos din domain-registrar:
   - Nameservers eller CNAME-record enligt Vercel-instruktioner

## 2. Lokal utveckling (Medan du väntar på domain)

```bash
npm install
npm run dev
# Öppna http://localhost:3000 (eller :3002 om portar är upptagna)
```

## 3. Uppdatera innehål

### Lägg till nya artiklar
Redigera `app/data/articles.js`:
```javascript
{
  slug: 'ny-artikel-slug',
  title: 'Titel på ny artikel',
  summary: 'Kort sammanfattning.',
  content: 'Långt, detaljerat innehål...'
}
```

### Deploy uppdateringar
```bash
git add .
git commit -m "Lägg till ny artikel: xvixtar xyz"
git push origin main
# Vercel deployar automatiskt!
```

## 4. SEO Checklist

- [x] robots.txt – genereras automatiskt via `/robots.txt`
- [x] sitemap.xml – genereras automatiskt via `/sitemap.xml`
- [x] OpenGraph + Twitter Cards – inbyggt i layout
- [x] Schema.org JSON-LD – inbyggt i FAQ + About + Articles
- [x] Backlinks – länka från penpeptider.com till peptidinfo.se
- [ ] Google Search Console – registrera webbplats
- [ ] Google Analytics – lägg till tracking
- [ ] Bing Webmaster Tools – registrera webbplats
- [ ] AI Search Optimization – möjliggöra AI-sökning (Perplexity, ChatGPT)

## 5. AI Search Optimization

### Perplexity & SearchGPT
- Lägg till `<meta name="robots" content="follow, index">` (redan gjort)
- Uppdatera `robots.txt` för att tillåta AI-crawlers (redan gjort)
- Fokusera på **långformig, utbildande innehål** (redan gjort)

### Schema.org Structured Data
- Lägg till `NewsArticle` schema för tidsrelevanta artiklar

## 6. Automatisk E-postuppdateringar

(Frivilligt) Lägg till Newsletter:
- Integrera Mailchimp eller Substack
- Låt läsare prenumerera på nya artiklar

---

## Snabb checklista innan lansering

- [ ] npm install & npm run build – LYCKAS
- [ ] npm run dev – webbplatsen visas
- [ ] Testa alla sidor: /, /articles/*, /faq, /about
- [ ] Testa /robots.txt och /sitemap.xml (de ska visa JSON/XML)
- [ ] GitHub-repo är pushad
- [ ] Vercel-projekt är skapat & linked till GitHub
- [ ] Domain DNS är uppdaterad
- [ ] SSL-certifikat är aktiverat (auto på Vercel)

---

## Support & Framtida Uppdateringar

- **Logga in på Vercel** för att se deployment-logs
- **Övervaka performance** med Lighthouse (Vercel har built-in)
- **Lägg till Google Analytics** för trafik-tracking
- **Uppdatera innehål regelbundet** för bättre SEO ranking

Lycka till! 🚀
