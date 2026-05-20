import Link from 'next/link';

/**
 * PageHero – gradient hero used on all interior pages.
 *
 * Props:
 *  breadcrumb  Array<{ label, href? }>   e.g. [{ label:'Start', href:'/' }, { label:'Guides' }]
 *  badge       string                     small label above title
 *  title       string | ReactNode         main heading (h1)
 *  subtitle    string | ReactNode         paragraph below title
 *  pills       Array<string>              small stat/feature badges
 *  theme       'blue'|'green'|'purple'|'teal'|'amber'   gradient preset
 *  disclaimer  string                     optional small disclaimer text
 */
export default function PageHero({
  breadcrumb = [],
  badge,
  title,
  subtitle,
  pills = [],
  theme = 'blue',
  disclaimer,
}) {
  const themes = {
    blue:   { from: '#0d1f3c', via: '#0a4fa3', to: '#1a7fd4', accent: '#5ab3ff' },
    green:  { from: '#0d2a1e', via: '#0d6b42', to: '#14a066', accent: '#4dffb0' },
    purple: { from: '#1a0d2e', via: '#5a2d82', to: '#8b4fcf', accent: '#c792ff' },
    teal:   { from: '#0d2229', via: '#0a6070', to: '#0e9aa7', accent: '#5fecf8' },
    amber:  { from: '#2a1400', via: '#a05a00', to: '#e07c00', accent: '#ffd080' },
  };
  const t = themes[theme] || themes.blue;

  return (
    <div
      className="page-hero"
      style={{
        background: `linear-gradient(135deg, ${t.from} 0%, ${t.via} 55%, ${t.to} 100%)`,
      }}
    >
      {/* Decorative SVG rings */}
      <svg className="page-hero-deco" viewBox="0 0 500 500" aria-hidden="true">
        <circle cx="400" cy="80" r="200" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="60" />
        <circle cx="430" cy="60" r="120" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="40" />
        <circle cx="60"  cy="420" r="140" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="40" />
        {/* Hexagonal molecule dots */}
        {[
          [340,140],[380,140],[360,108],[340,76],[380,76],[360,44],
        ].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill={t.accent} opacity="0.5" />
        ))}
        {[
          [340,140],[380,140],[360,108],[340,76],[380,76],[360,44],
          [340,140],[360,108],[380,76],[360,44],
        ].map(([x1,y1],i,arr) => i < arr.length-1 ? (
          <line key={`l${i}`} x1={x1} y1={y1} x2={arr[i+1][0]} y2={arr[i+1][1]}
            stroke={t.accent} strokeWidth="1.5" opacity="0.35" />
        ) : null)}
      </svg>

      <div className="page-hero-inner">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="page-hero-breadcrumb" aria-label="Brödsmulor">
            {breadcrumb.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="page-hero-sep"> › </span>}
                {crumb.href
                  ? <Link href={crumb.href}>{crumb.label}</Link>
                  : <span className="page-hero-current">{crumb.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <span className="page-hero-badge" style={{ borderColor: t.accent, color: t.accent }}>
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="page-hero-title">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}

        {/* Pills / stats */}
        {pills.length > 0 && (
          <div className="page-hero-pills">
            {pills.map((pill, i) => (
              <span key={i} className="page-hero-pill" style={{ borderColor: `${t.accent}55` }}>
                <span className="page-hero-pill-dot" style={{ background: t.accent }} />
                {pill}
              </span>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        {disclaimer && (
          <p className="page-hero-disclaimer">
            <strong>OBS:</strong> {disclaimer}
          </p>
        )}
      </div>
    </div>
  );
}
