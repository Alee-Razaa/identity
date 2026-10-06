import Image, { type StaticImageData } from 'next/image'
import Tilt from '@/components/Tilt'
import CopyEmail from '@/components/CopyEmail'
import {
  profile,
  cryptoSocial,
  smartLens,
  jobRadar,
  archive,
  earlyProjects,
  about,
  experience,
  education,
  skills,
  featuredCerts,
  otherCerts,
  type ProjectLink,
  type Block,
  type ArchiveItem,
} from '@/lib/data'
import road from '@/assets/road.jpg'
import portrait from '@/assets/portrait.jpg'
import slDashboard from '@/assets/smartlens-dashboard.jpg'
import slAlerts from '@/assets/smartlens-alerts.jpg'
import slClips from '@/assets/smartlens-clips.jpg'
import cryptoShot from '@/assets/cryptosocial.jpg'
import cryptoApi from '@/assets/cryptosocial-api.jpg'
import radarShot from '@/assets/job-radar.jpg'
import moviehub from '@/assets/moviehub.jpg'
import urlSaver from '@/assets/url-saver.jpg'
import localChat from '@/assets/local-chatbot.jpg'
import ageGender from '@/assets/age-gender.jpg'

const mailto = `mailto:${profile.email}`

const archiveImages: Record<NonNullable<ArchiveItem['image']>, StaticImageData> = {
  moviehub,
  urlSaver,
  localChat,
  ageGender,
}

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Links({ links, name }: { links: ProjectLink[]; name: string }) {
  return (
    <ul className="links">
      {links.map((l) => {
        const external = l.href.startsWith('http')
        return (
          <li key={l.href}>
            <a
              className="link"
              href={l.href}
              aria-label={`${l.label}: ${name}`}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {l.label}
              <Arrow />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack" aria-label="Built with">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flow" aria-label="How it works">
      {steps.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  )
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b) => (
        <div className="block" key={b.heading}>
          <h4>{b.heading}</h4>
          {b.text.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      ))}
    </>
  )
}

function CvButton({ variant = 'glass' }: { variant?: 'glass' | 'accent' }) {
  return (
    <a className={`btn btn--${variant}`} href={profile.cv} download>
      Download CV
    </a>
  )
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="backdrop" aria-hidden="true">
        <Image src={road} alt="" fill priority sizes="100vw" quality={70} placeholder="blur" />
      </div>

      <header className="nav">
        <nav className="nav__bar" aria-label="Main">
          <a className="nav__name" href="#top">
            {profile.name}
          </a>
          <ul className="nav__links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a className="btn btn--accent btn--sm" href={profile.cv} download>
            Download CV
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">{profile.name}, applied AI engineer</p>
              <h1>AI agents and automation, built end to end.</h1>
              <p className="hero__sub">
                I build LLM agents and computer vision pipelines, plus the guardrails and tests that keep them
                reliable. Available for full-time work now.
              </p>
              <div className="hero__cta">
                <a className="btn btn--accent" href="#work">
                  See my work
                </a>
                <CvButton />
              </div>
            </div>

            <Tilt className="idcard">
              <div className="idcard__glass" aria-hidden="true" />
              <div className="idcard__photo">
                <Image
                  src={portrait}
                  alt="Portrait of Ali Raza Memon"
                  priority
                  sizes="(max-width: 900px) 80vw, 340px"
                  placeholder="blur"
                />
              </div>
              <div className="idcard__body">
                <p className="idcard__name">{profile.name}</p>
                <p className="idcard__role">{profile.role}</p>
                <dl className="idcard__facts">
                  <div>
                    <dt>Based in</dt>
                    <dd>{profile.location}</dd>
                  </div>
                  <div>
                    <dt>Availability</dt>
                    <dd>{profile.availability}</dd>
                  </div>
                  <div>
                    <dt>Degree</dt>
                    <dd>BS Computer Science (AI), 2026</dd>
                  </div>
                </dl>
                <ul className="idcard__links">
                  <li>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn <Arrow />
                    </a>
                  </li>
                  <li>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      GitHub <Arrow />
                    </a>
                  </li>
                  <li>
                    <a href={mailto}>Email</a>
                  </li>
                </ul>
              </div>
            </Tilt>
          </div>
        </section>

        <section className="section wrap" id="work">
          <div className="section__head reveal">
            <h2>Selected work</h2>
            <p>
              Three projects in depth. Each one says what I owned, what broke and how I fixed it, and what it still
              cannot do.
            </p>
          </div>

          <article className="case glass">
            <div className="case__copy">
              <p className="kind">{cryptoSocial.kind}</p>
              <h3>{cryptoSocial.title}</h3>
              <p className="lead">{cryptoSocial.lead}</p>
              <Blocks blocks={cryptoSocial.blocks} />
              <Stack items={cryptoSocial.stack} />
              <Links links={cryptoSocial.links} name={cryptoSocial.title} />
            </div>
            <div className="case__media">
              <Tilt className="screens" max={5}>
                <a className="screen" href={cryptoSocial.links[0].href} target="_blank" rel="noreferrer" aria-label="Open cryptosocial.media">
                  <Image src={cryptoShot} alt="CryptoSocial Research home page: Analysis you can read. Data your bot can parse." sizes="(max-width: 900px) 92vw, 520px" />
                </a>
                <a className="screen screen--back" href={cryptoSocial.links[2].href} target="_blank" rel="noreferrer" aria-label="Open the CryptoSocial JSON API">
                  <Image src={cryptoApi} alt="CryptoSocial API section showing a live JSON response from /api/v1/posts" sizes="(max-width: 900px) 92vw, 520px" />
                </a>
              </Tilt>
            </div>
          </article>

          <article className="case case--flip glass">
            <div className="case__copy">
              <p className="kind">{smartLens.kind}</p>
              <h3>{smartLens.title}</h3>
              <p className="lead">{smartLens.lead}</p>
              <p className="role">{smartLens.role}</p>
              <Blocks blocks={smartLens.blocks} />
              <table className="results">
                <caption>{smartLens.table.caption}</caption>
                <thead>
                  <tr>
                    {smartLens.table.head.map((h) => (
                      <th key={h} scope="col">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {smartLens.table.rows.map(([m, a, b]) => (
                    <tr key={m}>
                      <th scope="row">{m}</th>
                      <td>{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Stack items={smartLens.stack} />
              <Links links={smartLens.links} name={smartLens.title} />
            </div>
            <div className="case__media">
              <Tilt className="phones" max={6}>
                <div className="phone phone--left">
                  <Image src={slAlerts} alt="SmartLens app: alert history listing fire and threat alerts by camera" sizes="(max-width: 900px) 30vw, 170px" />
                </div>
                <div className="phone phone--center">
                  <Image src={slDashboard} alt="SmartLens app: dashboard with clip, threat and storage counts" sizes="(max-width: 900px) 34vw, 200px" />
                </div>
                <div className="phone phone--right">
                  <Image src={slClips} alt="SmartLens app: saved clips tagged as fire or threat" sizes="(max-width: 900px) 30vw, 170px" />
                </div>
              </Tilt>
            </div>
          </article>

          <article className="case glass">
            <div className="case__copy">
              <p className="kind">{jobRadar.kind}</p>
              <h3>{jobRadar.title}</h3>
              <p className="lead">{jobRadar.lead}</p>
              <Blocks blocks={jobRadar.blocks} />
              <Stack items={jobRadar.stack} />
              <Links links={jobRadar.links} name={jobRadar.title} />
            </div>
            <div className="case__media">
              <Tilt className="screens" max={5}>
                <div className="screen">
                  <Image src={radarShot} alt="PPH Job Radar settings: monitoring toggle, check interval and alert window" sizes="(max-width: 900px) 92vw, 520px" />
                </div>
              </Tilt>
            </div>
          </article>
        </section>

        <section className="section wrap" id="projects">
          <div className="section__head reveal">
            <h2>More projects</h2>
            <p>Client, team and university work, with what I did on each.</p>
          </div>
          <div className="archive">
            {archive.map((p) => (
              <article className="card glass reveal" key={p.title}>
                {p.image ? (
                  <div className="card__media">
                    <Image src={archiveImages[p.image]} alt={p.imageAlt ?? ''} sizes="(max-width: 900px) 92vw, 360px" />
                  </div>
                ) : p.flow ? (
                  <Flow steps={p.flow} />
                ) : null}
                <p className="kind">{p.kind}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Links links={p.links} name={p.title} />
              </article>
            ))}
          </div>
          <p className="more reveal">
            Earlier web projects from 2024:{' '}
            {earlyProjects.map((r, i) => (
              <span key={r.href}>
                <a href={r.href} target="_blank" rel="noreferrer">
                  {r.label}
                </a>
                {i < earlyProjects.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </section>

        <section className="section wrap about" id="about">
          <h2 className="reveal">Why hire me</h2>
          <div className="about__text reveal">
            {about.map((t, i) => (
              <p key={t} className={i === 0 ? 'lead' : undefined}>
                {t}
              </p>
            ))}
          </div>
        </section>

        <section className="section wrap" id="experience">
          <div className="section__head reveal">
            <h2>Experience</h2>
          </div>
          <div className="glass panel reveal">
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.org}>
                  <div className="timeline__when">
                    <span>{e.when}</span>
                    <span>{e.where}</span>
                  </div>
                  <div>
                    <h3>
                      {e.role},{' '}
                      {e.href ? (
                        <a href={e.href} target="_blank" rel="noreferrer">
                          {e.org}
                        </a>
                      ) : (
                        e.org
                      )}
                    </h3>
                    <ul>
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <li>
                <div className="timeline__when">
                  <span>{education.when}</span>
                  <span>Education</span>
                </div>
                <div>
                  <h3>
                    {education.degree}, {education.org}
                  </h3>
                  <ul>
                    <li>{education.note}</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section wrap" id="skills">
          <div className="section__head reveal">
            <h2>Skills</h2>
            <p>Each skill is listed with the project where you can see it used.</p>
          </div>
          <dl className="skills glass panel reveal">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  {s.items}
                  {s.where ? <span className="skills__where">Used in {s.where}</span> : null}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section wrap" id="certifications">
          <div className="section__head reveal">
            <h2>Certifications</h2>
            <p>
              Courses and skill badges show what I have studied; the projects above show what I can build. Linked
              items open the issuer&apos;s own record.
            </p>
          </div>
          <ul className="certs-top reveal">
            {featuredCerts.map((c) => (
              <li key={c.name}>
                <a className="glass" href={c.href} target="_blank" rel="noreferrer">
                  <span className="certs-top__issuer">
                    {c.issuer}, {c.when}
                  </span>
                  <span className="certs-top__name">{c.name}</span>
                  <span className="certs-top__go">
                    Verify <Arrow />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <details className="glass panel certs reveal">
            <summary>All courses and badges</summary>
            <div className="certs__groups">
              {otherCerts.map((g) => (
                <div key={g.group}>
                  <h3>{g.group}</h3>
                  <ul>
                    {g.items.map((c) => (
                      <li key={c.name}>
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noreferrer">
                            {c.name}
                          </a>
                        ) : (
                          <span>{c.name}</span>
                        )}
                        <span className="certs__when">{c.when}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </section>

        <section className="section wrap" id="contact">
          <div className="contact glass reveal">
            <h2>Hiring for an applied AI role? Let&apos;s talk.</h2>
            <p>
              I can start full-time now. Email is the fastest way to reach me:{' '}
              <a href={mailto}>{profile.email}</a>
            </p>
            <div className="contact__cta">
              <a className="btn btn--accent" href={mailto}>
                Email me
              </a>
              <CvButton />
              <CopyEmail email={profile.email} />
              <a className="btn btn--glass" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a className="btn btn--glass" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <p>
          {profile.name}, {profile.location}
        </p>
        <p>Built with Next.js. Last updated October 2026.</p>
      </footer>
    </>
  )
}
