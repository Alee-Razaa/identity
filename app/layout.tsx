import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google'
import { profile } from '@/lib/data'
import { siteUrl } from '@/lib/site'
import './globals.css'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const body = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const title = 'Ali Raza Memon | AI Engineer, Agents and Automation'
const description =
  'Portfolio of Ali Raza Memon, an AI engineer in Islamabad building voice agents, RAG and business automation. 30+ projects delivered for UK clients.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    type: 'profile',
    url: '/',
    title,
    description,
    siteName: profile.name,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Ali Raza Memon, AI engineer' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b100e',
  colorScheme: 'dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: profile.name,
      jobTitle: profile.role,
      description: profile.summary,
      url: siteUrl,
      image: `${siteUrl}/og.jpg`,
      email: `mailto:${profile.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Sukkur IBA University' },
      worksFor: { '@type': 'Organization', name: 'XEMTECH' },
      knowsAbout: ['AI agents', 'Retrieval-augmented generation', 'Workflow automation', 'Computer vision', 'Full-stack development'],
      sameAs: [profile.github, profile.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profile.name}, portfolio`,
      author: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
