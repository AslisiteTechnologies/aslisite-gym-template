import { Arrow } from './components/Icons';
// @ts-ignore - prospect modules are generated as JavaScript by Agency OS.
import { getProspect } from './prospects/index.js';

type Service = { number?: string; title: string; detail: string };
type Prospect = {
  slug: string; name: string; city?: string; eyebrow: string; headline: string;
  description: string; seoTitle?: string; seoDescription?: string; accent?: string;
  phone?: string; email?: string; heroImage?: string; services: Service[];
};

const slug = decodeURIComponent(location.pathname.split('/').filter(Boolean)[0] || 'sample');
const prospect = getProspect(slug) as Prospect | null;

function Eyebrow({children}:{children:string}) {
  return <p className="eyebrow"><span className="square"/>{children}</p>;
}

function contactHref(p: Prospect) {
  if (p.phone) return `tel:${p.phone.replace(/[^\d+]/g,'')}`;
  if (p.email) return `mailto:${p.email}`;
  return '#contact';
}

export default function App() {
  if (!prospect) {
    return <main className="section not-found"><Eyebrow>DEMO NOT FOUND</Eyebrow><h1>THIS PREVIEW<br/>ISN'T AVAILABLE.</h1></main>;
  }

  const p = prospect;
  const headline = String(p.headline || '').split('\n').filter(Boolean);
  const heroImage = p.heroImage && !p.heroImage.startsWith('http')
    ? p.heroImage
    : `${import.meta.env.BASE_URL}images/conditioning.jpg`;

  document.title = p.seoTitle || `${p.name} | Website Concept`;
  document.documentElement.style.setProperty('--orange', p.accent || '#ef5c35');

  return <>
    <div className="announcement">
      <span>PERSONALIZED WEBSITE CONCEPT</span>
      <a href="#contact">EXPLORE THE IDEA <Arrow/></a>
      <span className="announcement-right">CREATED BY ASLISITE</span>
    </div>

    <header className="site-header">
      <a className="logo" href="/" onClick={e=>e.preventDefault()} aria-label={`${p.name} demo home`}>
        {p.name}
      </a>
      <nav className="main-nav" aria-label="Demo navigation">
        <a href="#concept">The concept</a>
        <a href="#presence">Digital presence</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="button dark header-cta" href={contactHref(p)}>Get in touch <Arrow diagonal/></a>
    </header>

    <main>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1>{headline.map((line,i)=><span key={line+i} className={i===headline.length-1?'orange':''}>{line}{i<headline.length-1&&<br/>}</span>)}</h1>
          <p className="hero-description">{p.description}</p>
          <div className="hero-actions">
            <a className="button primary" href={contactHref(p)}>Start a conversation <Arrow diagonal/></a>
            <a className="text-link" href="#concept">See the concept <Arrow/></a>
          </div>
          <div className="hero-community">
            <div className="mini-symbol">↗</div>
            <div><strong>{p.name}</strong><span>{p.city || 'Local business'} · Website concept</span></div>
          </div>
          <span className="hero-coordinate">{(p.city || 'LOCAL').toUpperCase()} · PERSONALIZED DEMO</span>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Sample fitness imagery used for this website concept" fetchPriority="high"/>
          <div className="photo-top"><span>WEBSITE CONCEPT</span><span>SAMPLE IMAGERY ↗</span></div>
          <div className="round-stamp"><span>BUILT TO</span><b>STAND<br/>OUT.</b><span>ONLINE.</span></div>
          <div className="photo-bottom"><span>01 / DIGITAL FIRST IMPRESSION</span><p>LOOK SHARP.<br/>FEEL CLEAR.</p><span className="photo-cross">+</span></div>
        </div>
      </section>

      <div className="values-strip">
        <span>MOBILE READY</span><i>✳</i><span>CLEAR ENQUIRIES</span><i>✳</i><span>MODERN PRESENCE</span><i>✳</i><span>BUILT TO ADAPT</span>
      </div>

      <section className="section programs-section" id="concept">
        <div className="section-heading">
          <div><Eyebrow>DESIGNED AROUND THE BUSINESS</Eyebrow><h2>A STRONGER<br/><span className="muted">FIRST IMPRESSION.</span></h2></div>
          <div className="section-intro"><p>This concept uses verified business details where available and keeps unknown information out of the demo.</p></div>
        </div>
        <div className="program-grid">
          {p.services.map((s,i)=><article className="program-card" key={s.title}>
            <div className="program-image">
              <img src={`${import.meta.env.BASE_URL}images/${i===1?'hero':i===2?'strength':'conditioning'}.jpg`} alt="Sample gym website imagery" loading="lazy"/>
              <span className="card-number">{s.number || String(i+1).padStart(2,'0')}</span>
              <div className="card-category"><span>{s.title}</span><Arrow diagonal/></div>
            </div>
            <div className="card-copy"><Eyebrow>WEBSITE PRESENTATION CONCEPT</Eyebrow><h3>{s.title}</h3><p>{s.detail}</p></div>
          </article>)}
        </div>
      </section>

      <section className="club-section" id="presence">
        <div className="club-image"><img src={`${import.meta.env.BASE_URL}images/hero.jpg`} alt="Sample fitness space imagery" loading="lazy"/><span className="image-caption">SAMPLE VISUAL · REPLACEABLE WITH CLIENT IMAGERY</span></div>
        <div className="club-copy">
          <Eyebrow>MADE TO BECOME YOURS</Eyebrow>
          <h2>YOUR BRAND.<br/>YOUR CONTENT.<br/><span className="orange">YOUR WEBSITE.</span></h2>
          <p>This is a sales concept, not the finished official website. The final site can be customized with approved branding, services, photos, business information and integrations.</p>
          <div className="club-principles">
            <div><b>01</b><span>Responsive across desktop and mobile.</span></div>
            <div><b>02</b><span>Business-specific content and contact actions.</span></div>
            <div><b>03</b><span>Designed for fast customization and launch.</span></div>
          </div>
        </div>
      </section>

      <section className="section contact-grid" id="contact">
        <div>
          <Eyebrow>LIKE THE DIRECTION?</Eyebrow>
          <h1>MAKE IT<br/><span className="orange">YOUR OWN.</span></h1>
          <p className="page-intro">This concept was prepared to show a possible direction for {p.name}. The final website would be built using approved business content.</p>
          {(p.phone || p.email) && <a className="button primary" href={contactHref(p)}>Contact {p.name} <Arrow diagonal/></a>}
        </div>
        <div className="contact-panel">
          <span className="eyebrow">BUSINESS DETAILS AVAILABLE</span>
          <h2>{p.name}</h2>
          {p.city && <p>Location <strong>{p.city}</strong></p>}
          {p.phone && <p>Phone <strong>{p.phone}</strong></p>}
          {p.email && <p>Email <strong>{p.email}</strong></p>}
          <hr/>
          <span className="eyebrow">DEMO NOTICE</span>
          <p>Concept website by Aslisite. Sample imagery is used for presentation and does not claim to show the actual business.</p>
        </div>
      </section>
    </main>

    <footer>
      <div className="footer-top">
        <div><div className="logo">{p.name}</div><p>Website concept.<br/>Ready to customize.</p></div>
        <div><span className="eyebrow">LOCATION</span><p>{p.city || 'Business location not supplied'}</p></div>
      </div>
      <div className="footer-word" aria-hidden="true">MOVE FORWARD.</div>
      <div className="footer-bottom"><span>Concept for {p.name}</span><span className="template-label">ASLISITE · PROSPECT DEMO</span></div>
    </footer>
  </>;
}
