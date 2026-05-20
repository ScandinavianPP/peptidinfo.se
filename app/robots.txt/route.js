import { NextResponse } from 'next/server';

export async function GET() {
  const content = `User-agent: *
Allow: /\n
Sitemap: https://peptidinfo.se/sitemap.xml
Host: peptidinfo.se
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
