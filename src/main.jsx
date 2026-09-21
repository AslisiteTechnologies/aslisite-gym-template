import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Instagram, Menu, MoveUpRight } from 'lucide-react';
import { getProspectFromPath } from './prospects/index.js';
import './styles.css';

function App() {
  const gym = getProspectFromPath();

  React.useEffect(() => {
    document.title = gym.seoTitle || `${gym.name} · Gym`;
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.append(description); }
    description.content = gym.seoDescription || gym.description;
  }, [gym]);

  const phone = String(gym.phone || '').replace(/\D/g, '');
  const email = String(gym.email || '').trim();
  const hasContact = Boolean(phone || email);
  const whatsapp = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(`Hi ${gym.name}, I'd love to know more about training.`)}` : '';
  const contactHref = phone ? whatsapp : email ? `mailto:${email}` : '#contact';
  const contactLabel = phone ? 'Talk to the team' : email ? 'Email the gym' : 'Details to be confirmed';
  const services = Array.isArray(gym.services) ? gym.services : [];
  const hours = Array.isArray(gym.hours) ? gym.hours : [];
  const isDraft = gym.demoStage === 'draft';
  const isSample = gym.demoStage === 'sample';
  const visualNote = gym.sampleImage ? 'ILLUSTRATIVE IMAGE' : 'TRAIN WITH INTENTION';

  return <>
    <div className="demo-note"><span>{isDraft ? 'UNLISTED DRAFT PREVIEW' : isSample ? 'SAMPLE TEMPLATE PREVIEW' : 'CONCEPT WEBSITE'}</span><span>Made for {gym.name} <i>·</i> {gym.city}</span><a href="#contact">Details <ArrowDownRight size={14}/></a></div>
    <header className="nav wrap">
      <a className="wordmark" href="#top"><span className="mark">{gym.name?.[0]?.toUpperCase() || 'G'}</span><span>{gym.name}<small>GYM WEBSITE CONCEPT</small></span></a>
      <nav><a href="#approach">Our approach</a>{services.length > 0 && <a href="#training">Training</a>}<a href="#contact">Contact</a></nav>
      <a className="nav-cta" href={contactHref} target={hasContact && phone ? '_blank' : undefined} rel={hasContact && phone ? 'noreferrer' : undefined}>{contactLabel} <ArrowUpRight size={15}/></a>
      <button className="mobile-menu" aria-label="Open menu"><Menu/></button>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="pulse"/> {gym.eyebrow || 'A gym website concept'}</div><h1>{String(gym.headline || 'Find your\nstrong place.').split('\n').map((line, i) => <React.Fragment key={`${i}-${line}`}>{i > 0 && <br/>}{line}</React.Fragment>)}</h1><p>{gym.description || `A website concept for ${gym.name} in ${gym.city}. Business details are waiting to be confirmed.`}</p><div className="hero-actions"><a className="button button-dark" href={contactHref} target={hasContact && phone ? '_blank' : undefined} rel={hasContact && phone ? 'noreferrer' : undefined}>{isDraft || !hasContact ? 'Review the concept' : contactLabel} <ArrowUpRight size={16}/></a><a className="text-link" href="#approach">Explore the concept <ArrowDownRight size={15}/></a></div><div className="hero-foot"><span><b>01</b> / {isDraft ? 'DRAFT PREVIEW' : 'YOUR NEXT CHAPTER'}</span><span>{gym.city?.toUpperCase()}</span></div></div>
        <div className="hero-visual" style={{ '--accent': gym.accent || '#d4fb57', backgroundImage: `linear-gradient(180deg, transparent 50%, rgba(0,0,0,.56)), url("${gym.heroImage}")` }}><div className="image-chip"><span className="chip-dot"/> {gym.sampleImage ? 'SAMPLE VISUAL · NOT THE GYM' : 'YOUR SPACE TO GET STRONGER'}</div><div className="image-caption"><span>{visualNote}</span><span>{gym.city?.toUpperCase()}</span></div><div className="hero-stamp">MOVE<br/>WITH<br/><i>purpose.</i></div></div>
        <a className="scroll-cue" href="#approach"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
      </section>

      <section className="manifesto" id="approach"><div className="wrap manifesto-inner"><div className="eyebrow light"><span className="pulse"/> OUR APPROACH</div><h2>Better isn’t a finish line.<br/><span>It’s how you feel tomorrow.</span></h2><div className="manifesto-bottom"><p>A strong first impression starts with a clear point of view. This concept gives {gym.name} a flexible foundation to make its own.</p><a className="round-link" href={services.length ? '#training' : '#contact'} aria-label="Continue exploring"><ArrowDownRight/></a></div><span className="manifesto-index">N° 01 — 03</span></div></section>

      {services.length > 0 && <section className="training wrap" id="training"><div className="section-heading"><div><div className="eyebrow"><span className="pulse"/> FIND YOUR RHYTHM</div><h2>Training that<br/><em>moves you forward.</em></h2></div><p>Explore the training options provided for this gym.</p></div><div className="service-list">{services.map((service, index) => <a className="service-row" href={contactHref} target={hasContact && phone ? '_blank' : undefined} rel={hasContact && phone ? 'noreferrer' : undefined} key={service.number || service.title}><span className="service-number">{service.number || String(index + 1).padStart(2, '0')}</span><div><h3>{service.title}</h3><p>{service.detail}</p></div><span className="service-arrow"><ArrowUpRight size={20}/></span></a>)}</div><div className="training-note"><span>YOUR TRAINING, YOUR PACE.</span><span>GOOD THINGS TAKE REPETITION <ArrowRight size={13}/></span></div></section>}

      <section className="visit" id="contact"><div className="visit-image" style={{backgroundImage:`url("${gym.heroImage}")`}}><div className="visit-stamp"><span>{isDraft ? 'CONCEPT IMAGE' : 'GOOD ENERGY'}</span><span>{isDraft ? 'FOR REVIEW' : 'STARTS HERE'}</span></div></div><div className="visit-info"><div className="eyebrow"><span className="pulse"/> {isDraft ? 'DETAILS TO CONFIRM' : 'COME ON IN'}</div><h2>{isDraft ? <>Let’s make<br/><em>it yours.</em></> : <>Your first session<br/><em>starts here.</em></>}</h2><p>{isDraft ? 'This preview uses illustrative imagery. Add verified services, location, opening hours, and contact details after review.' : 'Come meet the coaches, see the space, and tell us what you’re working towards.'}</p>{hasContact && <a className="button button-dark" href={contactHref} target={phone ? '_blank' : undefined} rel={phone ? 'noreferrer' : undefined}>{contactLabel} <ArrowUpRight size={16}/></a>}<div className="visit-details">{gym.address && <div><span className="detail-label">LOCATION</span><p>{gym.address}</p><a className="detail-link" href={`https://maps.google.com/?q=${encodeURIComponent(gym.address)}`} target="_blank" rel="noreferrer">Get directions <MoveUpRight size={13}/></a></div>}{hours.length > 0 && <div><span className="detail-label">OPENING HOURS</span>{hours.map((hour) => <p className="hours" key={hour}>{hour}</p>)}</div>}{!gym.address && hours.length === 0 && <div><span className="detail-label">CONTACT & LOCATION</span><p>{isDraft ? 'Added after details are verified.' : 'Details coming soon.'}</p></div>}</div></div></section>
    </main>

    <footer className="footer"><div className="wrap footer-top"><a className="wordmark" href="#top"><span className="mark">{gym.name?.[0]?.toUpperCase() || 'G'}</span><span>{gym.name}<small>GYM WEBSITE CONCEPT</small></span></a><span className="footer-line">SHOW UP FOR YOURSELF. WE’LL TAKE IT FROM THERE.</span>{hasContact ? <a className="social" href={contactHref} target={phone ? '_blank' : undefined} rel={phone ? 'noreferrer' : undefined} aria-label={contactLabel}><Instagram size={17}/></a> : <span className="social" aria-label="Contact details not yet added"><Instagram size={17}/></span>}</div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} {gym.name.toUpperCase()}</span>{email ? <a href={`mailto:${email}`}>{email}</a> : <span>CONTACT DETAILS PENDING</span>}{phone ? <a href={`tel:${gym.phone}`}>{gym.phone}</a> : <span/>}<span>BUILT FOR THE LONG RUN <ArrowUpRight size={12}/></span></div><div className="footer-big">SHOW UP.</div></footer>
    {!isDraft && hasContact && <a className="floating-cta" href={contactHref} target={phone ? '_blank' : undefined} rel={phone ? 'noreferrer' : undefined}>{contactLabel} <ArrowUpRight size={15}/></a>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
