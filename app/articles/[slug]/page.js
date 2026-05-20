import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticleBySlug } from '../../data/articles';
import { guides, getGuideBySlug } from '../../data/guides';
import { blogArticles, getBlogArticleBySlug } from '../../data/blog-articles';
import { blogArticles2, getBlogArticle2BySlug } from '../../data/blog-articles-2';
import PageHero from '../../components/PageHero';

export async function generateStaticParams() {
  const articleParams = articles.map((a) => ({ slug: a.slug }));
  const guideParams = guides.map((g) => ({ slug: g.slug }));
  const blogParams = blogArticles.map((b) => ({ slug: b.slug }));
  const blog2Params = blogArticles2.map((b) => ({ slug: b.slug }));
  return [...articleParams, ...guideParams, ...blogParams, ...blog2Params];
}

export function generateMetadata({ params }) {
  const item = getGuideBySlug(params.slug) || getBlogArticleBySlug(params.slug) || getBlogArticle2BySlug(params.slug) || getArticleBySlug(params.slug);
  if (!item) return { title: 'Artikel hittades inte – Peptidinfo' };

  return {
    title: `${item.title} | Peptidinfo`,
    description: item.summary,
    openGraph: {
      title: `${item.title} | Peptidinfo`,
      description: item.summary,
      url: `https://peptidinfo.se/articles/${item.slug}`,
      siteName: 'Peptidinfo',
      type: 'article',
      locale: 'sv_SE',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} | Peptidinfo`,
      description: item.summary,
    },
  };
}

export default function ArticlePage({ params }) {
  const item = getGuideBySlug(params.slug) || getBlogArticleBySlug(params.slug) || getBlogArticle2BySlug(params.slug) || getArticleBySlug(params.slug);
  if (!item) notFound();

  const isGuide = !!item.date;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.summary,
    datePublished: item.date || '2026-01-01',
    author: { '@type': 'Organization', name: 'Peptidinfo', url: 'https://peptidinfo.se' },
    publisher: { '@type': 'Organization', name: 'Peptidinfo', url: 'https://peptidinfo.se' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://peptidinfo.se/articles/${item.slug}`,
    },
  };

  const pills = [
    ...(item.category ? [item.category] : []),
    ...(item.date ? [new Date(item.date).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long' })] : []),
    'Peptidinfo Redaktion',
  ];

  return (
    <main>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <PageHero
        breadcrumb={[
          { label: 'Start', href: '/' },
          isGuide
            ? { label: 'Peptidguider', href: '/guides' }
            : { label: 'Artiklar', href: '/#articles' },
          { label: item.title.length > 50 ? item.title.slice(0, 50) + '…' : item.title },
        ]}
        badge={item.category || (isGuide ? 'Peptidguide' : 'Artikel')}
        title={item.title}
        subtitle={item.summary}
        pills={pills}
        theme={isGuide ? 'green' : 'blue'}
      />

      <div className="container">
        <article className="article-page">
          <div className="article-content" dangerouslySetInnerHTML={{ __html: item.content }} />

          <footer className="article-footer">
            <div className="disclaimer-box">
              <strong>Ansvarsfriskrivning:</strong> Innehållet på Peptidinfo är uteslutande för utbildningssyfte och vetenskaplig information. Det utgör inte medicinsk rådgivning och ersätter inte konsultation med legitimerad läkare eller annan behörig vårdpersonal. Konsultera alltid en läkare innan du använder något ämne eller substans som diskuteras på denna webbplats.
            </div>
            <div className="article-nav">
              <Link href={isGuide ? '/guides' : '/'} className="btn-back">
                ← {isGuide ? 'Alla peptidguider' : 'Tillbaka till startsidan'}
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
