import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container">
      <section className="card">
        <h1>404 - Sidan hittades inte</h1>
        <p>Vi kan tyvärr inte hitta den sida du letar efter. Prova sökfunktionen eller gå tillbaka till startsidan.</p>
        <Link href="/">Gå till startsidan</Link>
      </section>
    </main>
  );
}
