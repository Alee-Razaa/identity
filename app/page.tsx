import Image from 'next/image'
import Tilt from '@/components/Tilt'
import CopyEmail from '@/components/CopyEmail'
import {
  profile,
  proof,
  about,
  smartLens,
  cryptoSocial,
  voiceAgent,
  chatbot,
  leadWorkspace,
  jobRadar,
  moreRepos,
  experience,
  education,
  skills,
  featuredCerts,
  otherCerts,
  type ProjectLink,
} from '@/lib/data'
import road from '@/assets/road.jpg'
import portrait from '@/assets/portrait.jpg'
import slDashboard from '@/assets/smartlens-dashboard.jpg'
import slAlerts from '@/assets/smartlens-alerts.jpg'
import slClips from '@/assets/smartlens-clips.jpg'
import cryptoShot from '@/assets/cryptosocial.jpg'
import leadShot from '@/assets/lead-workspace.jpg'
import radarShot from '@/assets/job-radar.jpg'

const mailto = `mailto:${profile.email}`

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
            <li><a href="#certifications">Certifications</a></li>
          </ul>
          <a className="btn btn--accent btn--sm" href={mailto}>
            Email me
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">{profile.name}, AI engineer</p>
              <h1>AI agents and automation, built end to end.</h1>
              <p className="hero__sub">
                Co-founder of XEMTECH: 30+ projects shipped for UK clients in six months. Now looking for an AI
                specialist role.
              </p>
              <div className="hero__cta">
                <a className="btn btn--accent" href="#work">
                  See my work
                </a>
                <a className="btn btn--glass" href={mailto}>
                  Email me
                </a>
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
                </ul>
              </div>
            </Tilt>
          </div>
        </section>

        <section className="wrap" aria-label="At a glance">
          <dl className="proof glass">
            {proof.map((p) => (
              <div key={p.label}>
                <dt>{p.label}</dt>
                <dd>{p.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section wrap" id="work">
          <div className="section__head reveal">
            <h2>Selected work</h2>
            <p>Six things I have built, from a thesis project to products that are live today. Every one has a link you can open.</p>
          </div>

          <article className="feature glass reveal">
            <div className="feature__copy">
              <p className="kind">{smartLens.kind}</p>
              <h3>{smartLens.title}</h3>
              <p className="lead">{smartLens.lead}</p>
              {smartLens.body.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <dl className="metrics">
                {smartLens.metrics.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
              <Stack items={smartLens.stack} />
              <p className="note">{smartLens.note}</p>
              <Links links={smartLens.links} name={smartLens.title} />
            </div>
            <Tilt className="phones" max={6}>
              <div className="phone phone--left">
                <Image src={slAlerts} alt="SmartLens app: alert history listing fire and threat alerts by camera" sizes="(max-width: 900px) 30vw, 190px" />
              </div>
              <div className="phone phone--center">
                <Image src={slDashboard} alt="SmartLens app: dashboard with clip, threat and storage counts" sizes="(max-width: 900px) 34vw, 220px" />
              </div>
              <div className="phone phone--right">
                <Image src={slClips} alt="SmartLens app: saved clips tagged as fire or threat" sizes="(max-width: 900px) 30vw, 190px" />
              </div>
            </Tilt>
          </article>

          <article className="feature feature--flip glass reveal">
            <div className="feature__copy">
              <p className="kind">{cryptoSocial.kind}</p>
              <h3>{cryptoSocial.title}</h3>
              <p className="lead">{cryptoSocial.lead}</p>
              {cryptoSocial.body.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <Stack items={cryptoSocial.stack} />
              <Links links={cryptoSocial.links} name={cryptoSocial.title} />
            </div>
            <Tilt className="screen" max={5}>
              <a href={cryptoSocial.links[0].href} target="_blank" rel="noreferrer" aria-label="Open cryptosocial.media">
                <Image src={cryptoShot} alt="CryptoSocial Research home page: Analysis you can read. Data your bot can parse." sizes="(max-width: 900px) 92vw, 560px" />
              </a>
            </Tilt>
          </article>

          <div className="bento">
            <article className="cell cell--narrow glass reveal">
              <Flow steps={voiceAgent.flow} />
              <p className="kind">{voiceAgent.kind}</p>
              <h3>{voiceAgent.title}</h3>
              <p>{voiceAgent.body}</p>
              <Stack items={voiceAgent.stack} />
              <Links links={voiceAgent.links} name={voiceAgent.title} />
            </article>

            <article className="cell cell--wide glass reveal">
              <div className="cell__media">
                <Image src={leadShot} alt="Lead Workspace sign-in screen" sizes="(max-width: 900px) 92vw, 640px" />
              </div>
              <p className="kind">{leadWorkspace.kind}</p>
              <h3>{leadWorkspace.title}</h3>
              <p>{leadWorkspace.body}</p>
              <Stack items={leadWorkspace.stack} />
              <Links links={leadWorkspace.links} name={leadWorkspace.title} />
            </article>

            <article className="cell cell--wide glass reveal">
              <div className="cell__media">
                <Image src={radarShot} alt="PPH Job Radar settings: monitoring toggle, check interval and alert window" sizes="(max-width: 900px) 92vw, 640px" />
              </div>
              <p className="kind">{jobRadar.kind}</p>
              <h3>{jobRadar.title}</h3>
              <p>{jobRadar.body}</p>
              <Stack items={jobRadar.stack} />
              <Links links={jobRadar.links} name={jobRadar.title} />
            </article>

            <article className="cell cell--narrow glass reveal">
              <Flow steps={chatbot.flow} />
              <p className="kind">{chatbot.kind}</p>
              <h3>{chatbot.title}</h3>
              <p>{chatbot.body}</p>
              <Stack items={chatbot.stack} />
              <Links links={chatbot.links} name={chatbot.title} />
            </article>
          </div>

          <p className="more reveal">
            Also on GitHub:{' '}
            {moreRepos.map((r, i) => (
              <span key={r.href}>
                <a href={r.href} target="_blank" rel="noreferrer">
                  {r.title}
                </a>{' '}
                ({r.note}){i < moreRepos.length - 1 ? ', ' : '.'}
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
            <p>The tools I have used on real projects. No percentage bars, because those never mean anything.</p>
          </div>
          <dl className="skills glass panel reveal">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section wrap" id="certifications">
          <div className="section__head reveal">
            <h2>Certifications</h2>
            <p>Twenty in total. The three most recent first, and every link opens the issuer&apos;s own record.</p>
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
          <div className="glass panel certs reveal">
            {otherCerts.map((g) => (
              <div key={g.issuer}>
                <h3>{g.issuer}</h3>
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
        </section>

        <section className="section wrap" id="contact">
          <div className="contact glass reveal">
            <h2>Hiring for an AI role? Let&apos;s talk.</h2>
            <p>
              Email is the fastest way to reach me: <a href={mailto}>{profile.email}</a>
            </p>
            <div className="contact__cta">
              <a className="btn btn--accent" href={mailto}>
                Email me
              </a>
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
        <p>Built with Next.js. Last updated September 2026.</p>
      </footer>
    </>
  )
}
