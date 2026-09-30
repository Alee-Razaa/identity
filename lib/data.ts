// All page content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Ali Raza Memon',
  role: 'AI Automation Engineer',
  location: 'Islamabad, Pakistan',
  email: 'alirazamemonofficial@gmail.com',
  github: 'https://github.com/Alee-Razaa',
  linkedin: 'https://www.linkedin.com/in/realalirazamemon',
  summary:
    'AI engineer building voice agents, RAG and business automation end to end. Co-founder of XEMTECH with 30+ projects delivered for UK clients.',
}

export const proof = [
  { value: '30+', label: 'projects delivered for UK clients' },
  { value: '£11k+', label: 'client revenue in the first six months' },
  { value: '20', label: 'certifications, from Anthropic to Google Cloud' },
  { value: 'Top 100', label: 'fully funded STHP scholarship' },
]

export const about = [
  'I am an AI engineer who learned the job by selling it. In September 2025 I co-founded XEMTECH, a small studio in Sukkur. Within six months we had delivered more than 30 projects for UK clients and brought in over £11,000. I scoped the work, built it, and answered the support messages afterwards.',
  'That taught me something a model demo never does: an AI feature only counts when someone can depend on it on a Monday morning. So I care about the unglamorous parts. Clean data going in, clear prompts, a fallback for when the model is wrong, and an interface a non-technical person can use.',
  'I graduated in 2026 with a BS in Computer Science (AI) from Sukkur IBA University. I am now looking for an AI specialist role where I can go deep with one team.',
]

export type ProjectLink = { label: string; href: string }

export const smartLens = {
  title: 'SmartLens',
  kind: 'Final year project, computer vision',
  lead: 'Small shops in Pakistan run CCTV that nobody watches until after something has gone wrong. SmartLens watches it for them.',
  body: [
    'A YOLOv8 model looks for fire, fighting, knives and guns in the live feed. The system records only when there is motion, then sends the shopkeeper a phone alert with the clip attached.',
    'We fine-tuned the detector on 1,793 labelled images and added motion gating and temporal filtering to cut false alarms. Gun detection is still the weakest class at 0.60 AP50, and that is what I would train on next.',
  ],
  metrics: [
    { value: '0.85', label: 'precision' },
    { value: '0.75', label: 'mAP50' },
    { value: '4', label: 'threat classes' },
  ],
  note: 'Built with two teammates at Sukkur IBA University.',
  stack: ['YOLOv8', 'PyTorch', 'OpenCV', 'FastAPI', 'Flutter', 'Supabase', 'Firebase'],
  links: [
    { label: 'View code', href: 'https://github.com/Alee-Razaa/Smart-Lens-FYP' },
    { label: 'Read thesis', href: 'https://github.com/Alee-Razaa/SmartLens-Thesis' },
  ] as ProjectLink[],
}

export const cryptoSocial = {
  title: 'CryptoSocial Research',
  kind: 'Founder, live product',
  lead: 'An independent crypto market research publication that I founded and run.',
  body: [
    'It covers ETF flows, regulation and Fed policy, and links every figure to the record it came from.',
    'Each article is published three ways from one source: a page for people, structured data for search engines, and JSON at a versioned API for bots. Research and drafting run through an automated pipeline with editorial rules and a duplicate check, so it publishes daily without me writing every post by hand.',
  ],
  stack: ['Next.js', 'Supabase', 'LLM pipeline', 'MCP connector', 'Public JSON API'],
  links: [
    { label: 'Visit site', href: 'https://www.cryptosocial.media' },
    { label: 'Open API', href: 'https://www.cryptosocial.media/api/v1/posts' },
  ] as ProjectLink[],
}

export const voiceAgent = {
  title: 'Restaurant voice agent',
  kind: 'Client project, voice AI',
  body: 'A voice assistant I built for a restaurant client. Gemini, set up in Google AI Studio, handles the conversation. ElevenLabs and gTTS turn its replies into speech.',
  flow: ['Customer speaks', 'Gemini', 'ElevenLabs or gTTS', 'Spoken reply'],
  stack: ['Gemini', 'Google AI Studio', 'ElevenLabs', 'gTTS', 'Python'],
  links: [
    {
      label: 'Ask for a walkthrough',
      href: `mailto:${profile.email}?subject=Restaurant%20voice%20agent%20walkthrough`,
    },
  ] as ProjectLink[],
}

export const chatbot = {
  title: 'MMC AI, a multimodal chatbot',
  kind: 'Personal project, LLM app',
  body: 'One chat window for several models. Talk to Gemini, switch to GPT-3.5 or Mistral through OpenRouter, generate images with Stability AI, pull text out of a photo with OCR, and have answers read back to you. Speech and OCR run as separate Python services behind a Node.js API.',
  flow: ['React UI', 'Node.js API', 'Gemini, OpenRouter, Stability AI', 'Python TTS and OCR'],
  stack: ['React', 'Node.js', 'Python', 'MongoDB', 'JWT'],
  links: [
    { label: 'View code', href: 'https://github.com/Alee-Razaa/Multimodal-AI-Chatbot' },
  ] as ProjectLink[],
}

export const leadWorkspace = {
  title: 'Lead Workspace',
  kind: 'Internal tool, data cleaning',
  body: 'Lead lists arrive as messy spreadsheets. This workspace imports several CSV or Excel files at once, maps the columns, links duplicates, and remembers which file, sheet and row every value came from. Leads are then qualified in batches of ten with written reasons. I built it for my own outreach.',
  stack: ['Next.js', 'TypeScript', 'Supabase Postgres', 'Vercel'],
  links: [
    { label: 'Open app', href: 'https://my-lead-manager-seven.vercel.app' },
    { label: 'View code', href: 'https://github.com/Alee-Razaa/My-lead-Manager' },
  ] as ProjectLink[],
}

export const jobRadar = {
  title: 'PPH Job Radar',
  kind: 'Chrome extension, v1.0 shipped',
  body: 'New jobs on PeoplePerHour get buried within minutes. This extension watches the jobs page and fires a sound and a desktop notification when a matching one appears. You choose how often it checks and filter by keyword, budget and proposal count. It has 122 automated tests, with the core logic at 100% coverage.',
  stack: ['JavaScript', 'Chrome MV3', 'Service worker'],
  links: [
    { label: 'View code', href: 'https://github.com/Alee-Razaa/PPH-Extension' },
  ] as ProjectLink[],
}

export const moreRepos = [
  {
    title: 'Age and gender prediction',
    note: 'CNN with real-time webcam inference',
    href: 'https://github.com/Alee-Razaa/cv-age-gender-project',
  },
  {
    title: 'Movie recommendation system',
    note: 'data structures and algorithms project',
    href: 'https://github.com/Alee-Razaa/movie-recommendation-system-website-dsa-projet',
  },
  {
    title: 'TensorFlow and Keras tutorial',
    note: 'human activity recognition in Colab',
    href: 'https://github.com/Alee-Razaa/tensorflow-keras-colab-tutorial',
  },
]

export const experience = [
  {
    org: 'XEMTECH',
    href: 'https://xemtech.vercel.app',
    role: 'Co-founder and AI Automation Engineer',
    when: 'Sep 2025 to present',
    where: 'Sukkur, hybrid',
    points: [
      'Delivered 30+ projects for UK clients in the first six months, worth over £11,000 in revenue.',
      'Build AI features and business process automation with OpenAI, Claude, Gemini, n8n and Make.com.',
      'Ship full-stack and WordPress builds, from the first call to handover.',
      'Handle clients directly: scoping, estimates, progress updates and support.',
    ],
  },
  {
    org: 'Arch Technologies',
    role: 'AI Intern',
    when: 'Jun 2026 to Jul 2026',
    where: 'Remote',
    points: [
      'Worked with Claude on prompt engineering and retrieval-augmented generation (RAG).',
    ],
  },
  {
    org: 'CryptoSocial',
    href: 'https://www.cryptosocial.media',
    role: 'Founder and research analyst',
    when: 'Ongoing',
    where: 'Remote',
    points: [
      'Run a live research publication on Next.js and Supabase with an automated research and publishing pipeline.',
    ],
  },
]

export const education = {
  org: 'Sukkur IBA University',
  degree: 'BS Computer Science (Artificial Intelligence)',
  when: 'Sep 2022 to Jun 2026',
  note: 'Fully funded STHP scholarship, top 100.',
}

export const skills = [
  { group: 'AI and LLMs', items: ['OpenAI', 'Claude', 'Gemini', 'RAG', 'Prompt engineering', 'YOLOv8', 'Computer vision'] },
  { group: 'Automation', items: ['n8n', 'Make.com', 'AWS Lambda', 'REST APIs'] },
  { group: 'Web', items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'] },
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL'] },
  { group: 'Tools', items: ['Git', 'Vercel', 'Google Cloud', 'Cursor'] },
  { group: 'Spoken', items: ['English (professional)', 'Urdu (native)'] },
]

const gcp = (id: string) =>
  `https://www.skills.google/public_profiles/dc535861-0f72-4d39-84d5-1899f5bdaeb9/badges/${id}`

export const featuredCerts = [
  {
    name: 'Claude 101',
    issuer: 'Anthropic',
    when: 'May 2026',
    href: 'https://verify.skilljar.com/c/hz2p5f4eikah',
  },
  {
    name: 'AI Fluency: Framework and Foundations',
    issuer: 'Anthropic',
    when: 'May 2026',
    href: 'https://verify.skilljar.com/c/hdvmf477erdm',
  },
  {
    name: 'Prompt Engineering with ChatGPT',
    issuer: 'Simplilearn',
    when: 'Dec 2025',
    href: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MDUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTU3ODczMV85ODQ1NzY0MTc2NTY1Njc3NDI4NC5wbmciLCJ1c2VybmFtZSI6IkFsaSBSYXphIE1lbW9uIn0%3D',
  },
]

export const otherCerts: { issuer: string; items: { name: string; when: string; href?: string }[] }[] = [
  {
    issuer: 'Google Cloud',
    items: [
      { name: 'Analyze Speech and Language with Google APIs', when: 'Feb 2025', href: 'https://www.credly.com/badges/2a16fe93-5f43-4964-9e22-5cff6bb65c45' },
      { name: 'Analyze Sentiment with Natural Language API', when: 'Feb 2025', href: 'https://www.credly.com/badges/eebc40d6-51f0-4f0a-99e9-aa42b0a4f142' },
      { name: 'Vertex Search and Embeddings', when: 'Jul 2024', href: gcp('10005131') },
      { name: 'Introduction to Vertex AI Studio', when: 'Jul 2024', href: gcp('9972629') },
      { name: 'Create Image Captioning Models', when: 'Jul 2024', href: gcp('9946746') },
      { name: 'Transformer Models and BERT Model', when: 'Jul 2024', href: gcp('9926215') },
      { name: 'Encoder-Decoder Architecture', when: 'Jul 2024', href: gcp('9875385') },
      { name: 'Attention Mechanism', when: 'Jul 2024', href: gcp('9760276') },
      { name: 'Introduction to Image Generation', when: 'Jul 2024' },
      { name: 'Applying AI Principles with Google Cloud', when: 'Jul 2024', href: gcp('9727572') },
      { name: 'Prompt Design in Vertex AI', when: 'Jul 2024', href: gcp('9688900') },
      { name: 'Introduction to Responsible AI', when: 'Jun 2024', href: gcp('9622064') },
      { name: 'Introduction to Large Language Models', when: 'Jun 2024', href: gcp('9606076') },
      { name: 'Introduction to Generative AI', when: 'Jun 2024', href: gcp('9605722') },
    ],
  },
  {
    issuer: 'LinkedIn Learning and Coursera',
    items: [
      { name: 'What Is Generative AI?', when: 'Sep 2024', href: 'https://www.linkedin.com/learning/certificates/5dd162f9cfde50f74b210201b73c580417d5c477abe0860d6ecc5b26c031b36e' },
      { name: 'Introduction to Career Skills in Data Analytics', when: 'Sep 2024', href: 'https://www.linkedin.com/learning/certificates/021ad118522b25bddb3e019c65a6ac183ca8809782cb5f86646a85b380650232' },
      { name: 'Algorithms, Part I (Coursera)', when: 'Aug 2024' },
    ],
  },
]
