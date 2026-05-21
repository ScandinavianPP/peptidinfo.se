import { NextResponse } from 'next/server';
import { articles } from '../data/articles';

export async function GET() {
  const baseUrl = 'https://peptidinfo.se';

  const staticRoutes = [
    `${baseUrl}/`,
    `${baseUrl}/faq`,
    `${baseUrl}/about`,
  ];

  const dynamicRoutes = [...new Set(articles.map((article) => `${baseUrl}/articles/${article.slug}`))];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .concat(dynamicRoutes)
    .map((url) => {
      return `<url><loc>${url}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    })
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
