import { Arrow } from './components/Icons';
import type { ReactNode } from 'react';
// @ts-ignore - prospect modules are generated as JavaScript by Agency OS.
import { getProspect } from './prospects/index.js';

type Service = { number?: string; title: string; detail: string };
type Prospect = {
  slug: string; name: string; city?: string; eyebrow: string; headline: string;
  description: string; seoTitle?: string; seoDescription?: string; accent?: string;
  phone?: string; email?: string; address?: string; heroImage?: string;
  services: Service[]; hours?: Array<{ day?: string; time?: string; [key: string]: unknown }>;
  sampleImage?: boolean; demoStage?: string;
};

const slug = decodeURIComponent(location.pathname.split('/').filter(Boolean)[0] || 'sample');
const prospect = getProspect(slug) as Prospect | null;

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" />{children}</p>;
}

function contactHref(p: Prospect) {
  if (p.phone) return `tel:${p.phone.replace(/[^\d+]/g, '')}`;
  if (p.email) return `mailto:${p.email}`;
  return '#contact';
}

function contactLabel(p: Prospect) {
  return p.phone ? 'Call now' : p.email ? 'Email us' : 'Enquire now';
}

function containsAgencyCopy(value: string) {
  return /website|web design|digital|online introduction|online presence|\bpresence\b|\bidentity\b|information presentation|first impression|local visibility|local discovery|focused experience|professional training presence/i.test(value);
}

function imageUrl(path: string | undefined, fallback: string) {
  if (!path) return `${import.meta.env.BASE_URL}images/${fallback}`;
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export default function App() {
  if (!prospect) {
    return <main className="not-found"><p className="eyebrow">GYM NOT FOUND</p><h1>This page isn’t available.</h1><a className="button" href="/">Return home <Arrow /></a></main>;
  }

  const p = prospect;
  const heroImage = imageUrl(p.heroImage, 'conditioning.jpg');
  const services = Array.isArray(p.services) ? p.services : [];
  const description = containsAgencyCopy(p.description)
    ? `Discover ${p.name}${p.city ? ` in ${p.city}` : ''}. Get in touch to learn more about training and getting started.`
    : p.description;
  const headline = containsAgencyCopy(p.headline) ? `Train with ${p.name}` : p.headline;
  const serviceFallbacks = [
    { title: 'Find your training focus', detail: `Explore the training experience at ${p.name} and find out more.` },
    { title: 'Make a start', detail: 'Get in touch to learn more and decide what feels right for you.' },
    { title: 'Train locally', detail: `Connect with ${p.name}${p.city ? ` in ${p.city}` : ''} to ask about training.` },
  ];
  const trainingServices = services.map((service, index) =>
    containsAgencyCopy(`${service.title} ${service.detail}`)
      ? { ...service, ...serviceFallbacks[index % serviceFallbacks.length] }
      : service,
  );
  const title = p.seoTitle || `${p.name}${p.city ? ` | ${p.city}` : ''}`;
  document.title = title;
  document.documentElement.style.setProperty('--accent', p.accent || '#d18a53');

  return <>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${p.name} home`}>{p.name}</a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a><a href="#about">About</a><a href="#training">Training</a><a href="#contact">Contact</a>
      </nav>
      <a className="button header-cta" href={contactHref(p)}>{contactLabel(p)} <Arrow diagonal /></a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1>{headline}</h1>
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <a className="button button-accent" href={contactHref(p)}>{contactLabel(p)} <Arrow diagonal /></a>
            <a className="hero-secondary" href="#training">Explore training <Arrow /></a>
          </div>
          {p.city && <p className="hero-location">{p.city}</p>}
        </div>
        <div className="hero-image">
          <img src={heroImage} alt={`${p.name} — fitness and training`} fetchPriority="high" />
          <span className="image-index">01 <i /> FITNESS · {p.city || 'TRAINING'}</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image"><img src={`${import.meta.env.BASE_URL}images/strength.jpg`} alt="Strength training" loading="lazy" /></div>
        <div className="about-copy">
          <Eyebrow>WELCOME TO {p.name}</Eyebrow>
          <h2>Make space<br />for your next move.</h2>
          <p>{description}</p>
          <a className="text-link" href="#contact">Find out more <Arrow /></a>
        </div>
      </section>

      <section className="training-section" id="training">
        <div className="section-heading">
          <div><Eyebrow>YOUR TRAINING</Eyebrow><h2>Explore what’s<br />right for you.</h2></div>
          <p>Explore the training options at {p.name}{p.city ? ` in ${p.city}` : ''}. Get in touch to learn more.</p>
        </div>
        <div className="training-grid">
          {trainingServices.map((service, index) => <article className="training-card" key={`${service.title}-${index}`}>
            <span className="training-number">{service.number || String(index + 1).padStart(2, '0')}</span>
            <div className="training-card-image"><img src={`${import.meta.env.BASE_URL}images/${index % 2 ? 'conditioning' : 'hero'}.jpg`} alt="Fitness training" loading="lazy" /></div>
            <div className="training-card-copy"><h3>{service.title}</h3><p>{service.detail}</p></div>
          </article>)}
        </div>
      </section>

      <section className="movement-section">
        <img src={`${import.meta.env.BASE_URL}images/conditioning.jpg`} alt="Movement and fitness training" loading="lazy" />
        <div className="movement-overlay"><Eyebrow>TRAIN WITH INTENTION</Eyebrow><p>Show up.<br />Find your rhythm.</p><a href={contactHref(p)} aria-label={contactLabel(p)}><Arrow diagonal /></a></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2>Start your<br />next chapter.</h2>
          <p>Contact {p.name} to find out more.</p>
          <a className="button button-accent" href={contactHref(p)}>{contactLabel(p)} <Arrow diagonal /></a>
        </div>
        <div className="contact-details">
          <h3>{p.name}</h3>
          {p.city && <p><span>Location</span>{p.city}</p>}
          {p.address && <p><span>Address</span>{p.address}</p>}
          {p.phone && <p><span>Phone</span><a href={`tel:${p.phone.replace(/[^\d+]/g, '')}`}>{p.phone}</a></p>}
          {p.email && <p><span>Email</span><a href={`mailto:${p.email}`}>{p.email}</a></p>}
          {p.hours?.length ? <div className="hours"><span>Hours</span>{p.hours.map((hour, i) => <p key={i}>{hour.day && <b>{hour.day}</b>} {hour.time || Object.values(hour).filter(value => typeof value === 'string').join(' · ')}</p>)}</div> : null}
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <a className="wordmark" href="#home">{p.name}</a>
      <div className="footer-links"><a href="#about">About</a><a href="#training">Training</a><a href="#contact">Contact</a></div>
      {p.city && <span className="footer-city">{p.city}</span>}
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {p.name}</span><span className="disclosure">Website concept prepared by Aslisite. Sample imagery may be used for presentation.</span></div>
    </footer>
  </>;
}
