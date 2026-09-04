import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Compass,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

const services = [
  {
    number: '01',
    icon: Compass,
    title: 'Product strategy',
    description:
      'Turn an ambitious idea or stubborn business problem into a focused product plan your team can act on.',
    details: ['Discovery and roadmaps', 'UX and product design', 'Technical direction'],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Custom software',
    description:
      'Design and build dependable software around the way your business actually works, from first release to scale.',
    details: ['Web and cloud applications', 'Internal tools and portals', 'API and systems integration'],
  },
  {
    number: '03',
    icon: Cloud,
    title: 'Modernization',
    description:
      'Untangle aging systems, remove operational drag, and create a practical path to a modern cloud platform.',
    details: ['Architecture modernization', 'Cloud and DevOps enablement', 'Fractional technical leadership'],
  },
]

const engagements = [
  {
    label: 'Launch',
    title: 'Bring a new digital product to market.',
    description:
      'Move from a validated opportunity to a polished, production-ready product without building a full team first.',
    tags: ['Product discovery', 'MVP delivery', 'Cloud architecture'],
    tone: 'mint',
  },
  {
    label: 'Modernize',
    title: 'Make critical systems easier to run.',
    description:
      'Replace fragile workflows and legacy software with clear, maintainable tools built for the people using them.',
    tags: ['Workflow design', 'Systems integration', 'Platform renewal'],
    tone: 'blue',
  },
  {
    label: 'Accelerate',
    title: 'Give your team senior technical leverage.',
    description:
      'Add experienced product and engineering leadership exactly where a complex initiative needs it most.',
    tags: ['Technical strategy', 'Delivery leadership', 'Team enablement'],
    tone: 'coral',
  },
]

const process = [
  {
    number: '01',
    title: 'Find the signal',
    description:
      'We get close to the business, the users, and the constraints before recommending a direction.',
  },
  {
    number: '02',
    title: 'Shape the solution',
    description:
      'We turn what we learn into a clear product experience, technical plan, and sequence of smart bets.',
  },
  {
    number: '03',
    title: 'Build in the open',
    description:
      'Small releases, visible progress, and frequent decisions keep the work honest and momentum high.',
  },
  {
    number: '04',
    title: 'Leave you stronger',
    description:
      'You get maintainable software, useful documentation, and a team that understands how to carry it forward.',
  },
]

function LogoMark() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 42 42"
      role="img"
      aria-label="Sane"
    >
      <rect width="42" height="42" rx="13" fill="currentColor" />
      <path
        d="M29.6 13.8c-2.2-1.8-5-2.8-8.1-2.8-5.1 0-8.8 2.5-8.8 6.4 0 3.6 2.7 5.2 8.2 6.2 3 .5 4 1.1 4 2.2 0 1.2-1.4 2-3.7 2-3.1 0-5.9-1.2-8.2-3.3l-2.7 4.2c2.8 2.4 6.5 3.7 10.7 3.7 5.7 0 9.4-2.6 9.4-6.9 0-3.7-2.5-5.3-8.3-6.4-2.8-.5-3.9-1-3.9-2 0-1.1 1.2-1.7 3.2-1.7 2.4 0 4.5.8 6.2 2.2l2-3.8Z"
        fill="#08130f"
      />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Sane LLC home">
            <LogoMark />
            <span>Sane</span>
          </a>

          <nav
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            id="mobile-navigation"
            aria-label="Main navigation"
          >
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#work" onClick={closeMenu}>
              How we help
            </a>
            <a href="#approach" onClick={closeMenu}>
              Approach
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Start a project
              <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow light">
                <span className="status-dot" />
                Strategy, software, and systems
              </div>
              <h1>
                Complex software.
                <span>Clear outcomes.</span>
              </h1>
              <p className="hero-lede">
                Sane helps ambitious teams design, build, and modernize the software that moves their business forward.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Let&apos;s build something
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="text-link light-link" href="#services">
                  Explore our services
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <div className="hero-proof">
                <span>From first decision</span>
                <span className="proof-line" aria-hidden="true" />
                <span>to production</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Sane product delivery system illustration">
              <div className="floating-chip chip-strategy">
                <Compass aria-hidden="true" />
                <span>Clear direction</span>
              </div>
              <div className="floating-chip chip-shipping">
                <Sparkles aria-hidden="true" />
                <span>Ready to ship</span>
              </div>

              <div className="system-window">
                <div className="window-bar">
                  <div className="window-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>sane.system</span>
                  <span className="live-label">
                    <i />
                    Live
                  </span>
                </div>

                <div className="system-canvas">
                  <div className="grid-lines" aria-hidden="true" />
                  <div className="orbit orbit-one" aria-hidden="true" />
                  <div className="orbit orbit-two" aria-hidden="true" />
                  <div className="core-node">
                    <LogoMark />
                    <strong>Product core</strong>
                    <span>Aligned and moving</span>
                  </div>
                  <div className="satellite satellite-one">
                    <Compass aria-hidden="true" />
                    <span>Strategy</span>
                  </div>
                  <div className="satellite satellite-two">
                    <Code2 aria-hidden="true" />
                    <span>Build</span>
                  </div>
                  <div className="satellite satellite-three">
                    <Cloud aria-hidden="true" />
                    <span>Scale</span>
                  </div>
                </div>

                <div className="system-status">
                  <div>
                    <span className="status-icon">
                      <Check aria-hidden="true" />
                    </span>
                    <span>
                      <small>Delivery status</small>
                      <strong>Everything in sync</strong>
                    </span>
                  </div>
                  <div className="status-bars" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="capability-strip" aria-label="Capabilities">
          <div className="capability-track">
            <span>Product strategy</span>
            <i />
            <span>Experience design</span>
            <i />
            <span>Software engineering</span>
            <i />
            <span>Cloud platforms</span>
            <i />
            <span>AI and automation</span>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">What we do</span>
                <h2>Practical expertise for meaningful software.</h2>
              </div>
              <p>
                We connect business thinking, product design, and senior engineering so good ideas do not get lost between teams.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-card-top">
                      <span className="card-number">{service.number}</span>
                      <span className="service-icon">
                        <Icon aria-hidden="true" />
                      </span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.details.map((detail) => (
                        <li key={detail}>
                          <ArrowRight aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="work-heading">
              <span className="eyebrow light">Where we create leverage</span>
              <h2>Built to move the business, not just the backlog.</h2>
            </div>

            <div className="engagement-list">
              {engagements.map((engagement, index) => (
                <article className={`engagement-card ${engagement.tone}`} key={engagement.label}>
                  <div className="engagement-meta">
                    <span>{engagement.label}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{engagement.title}</h3>
                  <p>{engagement.description}</p>
                  <div className="tag-list">
                    {engagement.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach-section" id="approach">
          <div className="container approach-grid">
            <div className="approach-intro">
              <span className="eyebrow">How we work</span>
              <h2>Low drama. High clarity. Real progress.</h2>
              <p>
                The best software work feels calm because the right conversations happen early and the important decisions stay visible.
              </p>
              <a className="text-link" href="#contact">
                Talk through your challenge
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="process-list">
              {process.map((step) => (
                <article className="process-step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="clarity-visual" aria-hidden="true">
              <div className="clarity-orbit orbit-problem">
                <span>Problem</span>
                <div className="clarity-orbit orbit-people">
                  <span>People</span>
                  <div className="clarity-center">
                    <LogoMark />
                    <strong>Sane</strong>
                  </div>
                </div>
              </div>
              <div className="visual-note note-top">Start with why</div>
              <div className="visual-note note-bottom">Build what matters</div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">Why Sane</span>
              <h2>Better software starts with better questions.</h2>
              <p className="about-lede">
                Sane is a modern software company for organizations that need thoughtful partners, not another layer of process.
              </p>
              <p>
                We bring business context and technical depth to the same table. That means fewer handoffs, faster learning, and software your team can trust long after launch.
              </p>
              <div className="principles">
                <div>
                  <Check aria-hidden="true" />
                  <span>
                    <strong>Senior attention</strong>
                    Experienced people stay close to the work.
                  </span>
                </div>
                <div>
                  <Check aria-hidden="true" />
                  <span>
                    <strong>Plain language</strong>
                    Clear tradeoffs, no technical theater.
                  </span>
                </div>
                <div>
                  <Check aria-hidden="true" />
                  <span>
                    <strong>Built to last</strong>
                    Maintainable systems without needless complexity.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <span className="eyebrow">Have a project in mind?</span>
                <h2>Let&apos;s make the next move feel obvious.</h2>
                <p>
                  Tell us what is changing, what is stuck, or what you want to build. We will help you find a practical way forward.
                </p>
              </div>
              <a
                className="contact-button"
                href="mailto:hello@sane.llc?subject=Project%20inquiry"
              >
                <span>
                  <small>Start a conversation</small>
                  hello@sane.llc
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-orbit" aria-hidden="true">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a className="brand footer-brand" href="#top" aria-label="Sane LLC home">
              <LogoMark />
              <span>Sane</span>
            </a>
            <p>Custom software. Clear thinking. Lasting momentum.</p>
            <a className="back-to-top" href="#top">
              Back to top
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Sane LLC. All rights reserved.</span>
            <div>
              <span>Software consulting</span>
              <span>Custom solutions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
