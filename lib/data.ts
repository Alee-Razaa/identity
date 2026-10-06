// All page content lives here. Edit this file to update the portfolio and the CV.

export const profile = {
  name: 'Ali Raza Memon',
  role: 'Applied AI Engineer',
  location: 'Islamabad, Pakistan',
  availability: 'Full-time, available now',
  email: 'alirazamemonofficial@gmail.com',
  github: 'https://github.com/Alee-Razaa',
  linkedin: 'https://www.linkedin.com/in/realalirazamemon',
  cv: '/Ali-Raza-Memon-CV.pdf',
  summary:
    'Applied AI engineer who builds LLM agents, computer vision pipelines and automation, with the guardrails and tests that keep them reliable. Available for full-time work now.',
}

export type ProjectLink = { label: string; href: string }
export type Block = { heading: string; text: string[] }

export const cryptoSocial = {
  title: 'CryptoSocial automated research desk',
  kind: 'My own product, live since 2026',
  lead: 'A crypto research publication where a scheduled AI agent researches, writes and publishes one story per run, with no editor in the loop. Because nobody reviews those posts first, the safeguards have to live in code.',
  blocks: [
    {
      heading: 'How the agent works',
      text: [
        'A topic qualifies only when there is an exact figure from a primary record (SEC, Federal Reserve, congress.gov, ETF flow data), at least two named analysts who read it differently, and no post on the same event in the last 14 days. Every number links to its source. A figure that cannot be linked is cut.',
        'The agent drafts and publishes through an MCP connector I built into the site, and every post is published three ways from one record: a web page, JSON-LD for search engines, and JSON at a versioned public API. Each post is labelled HUMAN or BOT, on the page and in the API.',
      ],
    },
    {
      heading: 'A failure and the fix',
      text: [
        'The agent was told to check the last 14 days, but nothing enforced it, and on September 10 and 11 it published the same ETF outflow story twice. I moved the rule into the server. A draft now counts as a duplicate when its title shares 60% of its distinctive words with a recent post, or 40% plus two specific tags. Generic words like bitcoin or ETF are ignored. I calibrated it on every post to date: it catches that pair and does not flag a preview and its result post.',
        'While designing the connector I also found that any signed-up user could mint their own write key and publish through the API. Nobody had used it. I closed it in code first, because that deploys without a database migration: write access now needs a key minted by the server, or one owned by an admin or analyst.',
      ],
    },
    {
      heading: 'Limits',
      text: [
        'Automated posts go out without human review. Errors are corrected in place with a dated note. The source code is private, so the evidence here is the live site, its methodology page and the public API.',
      ],
    },
  ] as Block[],
  stack: ['Next.js', 'TypeScript', 'Supabase Postgres', 'Claude', 'MCP', 'Public JSON API'],
  links: [
    { label: 'Visit site', href: 'https://www.cryptosocial.media' },
    { label: 'Read methodology', href: 'https://www.cryptosocial.media/methodology' },
    { label: 'Open API', href: 'https://www.cryptosocial.media/api/v1/posts' },
  ] as ProjectLink[],
}

export const smartLens = {
  title: 'SmartLens threat detection',
  kind: 'Final year project, team of three',
  lead: 'Small shops in Pakistan run CCTV that nobody watches until after something goes wrong. SmartLens watches the feed for fighting, fire, guns and knives and sends the owner a phone alert with the clip.',
  role: 'My part: model training and evaluation, the FastAPI backend, and the alert pipeline through Firebase. My teammates built the Flutter app.',
  blocks: [
    {
      heading: 'How the pipeline works',
      text: [
        'YOLOv8 only runs on frames where there is motion, which keeps idle cameras quiet. A threat is confirmed only when it appears in 3 of 8 consecutive frames, with a separate confidence threshold per class (0.45 for fire and guns, 0.50 for knives, 0.55 for fighting) and a 5-second cooldown between repeat alerts. On a 73-frame test clip, 26 raw detections became 1 confirmed gun alert with no false alarm, at 10 to 15 frames per second on a CPU.',
      ],
    },
    {
      heading: 'The trade-off I made',
      text: [
        'For v2 I fine-tuned v1 at half the learning rate instead of retraining from scratch. Precision and mAP50 went up, but recall went down slightly, and in threat detection a missed event costs more than a false alarm. So v3 is aimed at recall: seven more gun and weapon datasets and longer training.',
      ],
    },
    {
      heading: 'Limits',
      text: [
        'The numbers below come from the 149-image validation split of a 1,793-image Roboflow dataset. I have not checked whether frames from the same video appear in both training and validation, so they may be optimistic, and I have not yet measured false alarms per camera-hour on real footage. Theft detection was in the original proposal and is not implemented.',
      ],
    },
  ] as Block[],
  table: {
    caption: 'Validation results, v1 baseline and v2 fine-tuned',
    head: ['Metric', 'v1', 'v2'],
    rows: [
      ['Precision', '0.841', '0.850'],
      ['Recall', '0.621', '0.605'],
      ['mAP50', '0.726', '0.754'],
      ['Gun AP50 (weakest class)', '0.580', '0.601'],
    ],
  },
  stack: ['YOLOv8', 'PyTorch', 'OpenCV', 'FastAPI', 'Supabase', 'Firebase'],
  links: [
    { label: 'View code', href: 'https://github.com/Alee-Razaa/Smart-Lens-FYP' },
    { label: 'Read thesis', href: 'https://github.com/Alee-Razaa/SmartLens-Thesis' },
  ] as ProjectLink[],
}

export const jobRadar = {
  title: 'PPH Job Radar',
  kind: 'Chrome extension built for XEMTECH, v1.0',
  lead: 'New jobs on PeoplePerHour are buried within minutes. The extension watches the jobs page and fires a sound and a desktop notification when a matching job appears, filtered by keyword, budget and proposal count.',
  blocks: [
    {
      heading: 'How it is tested',
      text: [
        '122 automated tests. The core logic (parsing, scheduling, filtering and never alerting the same job twice) has 100% line and branch coverage, enforced by the coverage script. The service worker is tested against a fake Chrome API, and the v1.0 release was checked end to end in real Chrome against the live site.',
      ],
    },
    {
      heading: 'A bug the unit tests missed',
      text: [
        'All tests passed, but in real Chrome every check hung. A manifest setting, use_dynamic_url, broke the content script imports. I only found it by running the extension for real. I fixed it, and a test now fails if that setting comes back.',
      ],
    },
    {
      heading: 'Limits',
      text: [
        'It is installed locally as an unpacked extension, not published on the Chrome Web Store. If PeoplePerHour changes its page layout, the parser has to be updated.',
      ],
    },
  ] as Block[],
  stack: ['JavaScript', 'Chrome MV3', 'Service worker', 'node:test'],
  links: [
    { label: 'View code', href: 'https://github.com/Alee-Razaa/PPH-Extension' },
    { label: 'Read test log', href: 'https://github.com/Alee-Razaa/PPH-Extension/blob/main/docs/TESTLOG.md' },
  ] as ProjectLink[],
}

export type ArchiveItem = {
  title: string
  kind: string
  text: string
  image?: 'moviehub' | 'urlSaver' | 'localChat' | 'ageGender'
  imageAlt?: string
  flow?: string[]
  links: ProjectLink[]
}

export const archive: ArchiveItem[] = [
  {
    title: 'Restaurant voice agent',
    kind: 'Client project, XEMTECH',
    text: 'A voice assistant for a restaurant client. Gemini, set up in Google AI Studio, handles the conversation, and ElevenLabs and gTTS turn the replies into speech. The code belongs to the client, so I can walk you through it on a call.',
    flow: ['Customer speaks', 'Gemini', 'ElevenLabs or gTTS', 'Spoken reply'],
    links: [{ label: 'Ask for a walkthrough', href: 'mailto:alirazamemonofficial@gmail.com?subject=Restaurant%20voice%20agent%20walkthrough' }],
  },
  {
    title: 'MMC AI, multimodal chatbot',
    kind: 'Team project of three',
    text: 'One chat window for Gemini, GPT-3.5 and Mistral (through OpenRouter), plus Stability AI images, OCR and text-to-speech. My part was the AI integrations, the chat logic and switching between models. Teammates built the backend and the React frontend.',
    flow: ['React UI', 'Node.js API', 'Gemini, OpenRouter, Stability AI', 'Python TTS and OCR'],
    links: [{ label: 'View code', href: 'https://github.com/Alee-Razaa/Multimodal-AI-Chatbot' }],
  },
  {
    title: 'Lead Workspace',
    kind: 'Personal tool, private data',
    text: 'Imports several messy CSV or Excel lead files at once, maps the columns, links duplicates, and records which file, sheet and row every value came from. Leads are then qualified in batches of ten with written reasons. The live app holds my own leads, so it stays behind a password.',
    flow: ['Import files', 'Map columns', 'Link duplicates', 'Qualify in tens', 'Export'],
    links: [{ label: 'View code', href: 'https://github.com/Alee-Razaa/My-lead-Manager' }],
  },
  {
    title: 'Age and gender prediction',
    kind: 'University computer vision project',
    text: 'A CNN that predicts age and gender from faces, with real-time webcam inference through OpenCV. Gender reached about 83% validation accuracy. The chart shows training pulling away from validation after epoch 9, the point where it starts to overfit.',
    image: 'ageGender',
    imageAlt: 'Training and validation accuracy curves for gender prediction over 24 epochs',
    links: [{ label: 'View code', href: 'https://github.com/Alee-Razaa/cv-age-gender-project' }],
  },
  {
    title: 'Water scarcity dashboard, Pakistan',
    kind: 'Data project with a partner',
    text: 'A React dashboard that charts and maps water availability data for Pakistan, with a focus on Sindh. I built the dashboard and did the data analysis. It is an early prototype, not a finished system.',
    flow: ['CSV data', 'Pandas analysis', 'Chart.js charts', 'Leaflet map'],
    links: [{ label: 'View code', href: 'https://github.com/Alee-Razaa/water_shortage' }],
  },
  {
    title: 'MovieHub DSA',
    kind: 'Data structures course project',
    text: 'A movie browser that uses binary search for lookup, a max heap for the trending list and a stack for history, with the data structures kept in their own module, separate from the UI.',
    image: 'moviehub',
    imageAlt: 'MovieHub DSA: search, genre filter and a grid of movies with ratings',
    links: [{ label: 'View code', href: 'https://github.com/Alee-Razaa/movie-recommendation-system-website-dsa-projet' }],
  },
  {
    title: 'URL Saver',
    kind: 'Chrome extension',
    text: 'Saves the current tab or any typed URL, validates it, blocks duplicates and keeps the list in Chrome storage.',
    image: 'urlSaver',
    imageAlt: 'URL Saver extension popup with save, save current tab and clear all buttons',
    links: [{ label: 'View code', href: 'https://github.com/Alee-Razaa/save-urls-Chrome-Extension-Using-JavaScript' }],
  },
  {
    title: 'Local AI chatbot interface',
    kind: 'Small experiment',
    text: 'A single-page chat window for talking to a language model running on my own machine.',
    image: 'localChat',
    imageAlt: 'Dark chat window titled AI Chatbot with a message box and send button',
    links: [{ label: 'View code', href: 'https://github.com/Alee-Razaa/Web-interface-for-AI-chatbot-run-locally' }],
  },
]

export const earlyProjects: ProjectLink[] = [
  { label: 'Weather app', href: 'https://github.com/Alee-Razaa/Weather-web-application-' },
  { label: 'Quiz app', href: 'https://github.com/Alee-Razaa/Quiz-web-Application' },
  { label: 'Offline to-do list', href: 'https://github.com/Alee-Razaa/To-Do-List-web-application-with-offline-functionality' },
  { label: 'People counter', href: 'https://github.com/Alee-Razaa/People-counter-web-app' },
]

export const about = [
  'I build AI systems that make decisions without a person watching, and the checks that keep them honest. On CryptoSocial that means a figure without a source never gets published, and the server refuses a story it has already covered. On SmartLens it means a threat has to show up in three frames out of eight before anyone gets woken up.',
  'Since September 2025 I have co-run XEMTECH, a small studio. As a team we delivered more than 30 projects for UK clients in our first six months, about £11,000 in agency revenue. I scoped work with clients, built AI and automation features, and supported them after handover.',
  'I am now looking for a full-time applied AI role and can start immediately. My XEMTECH client work is passing to my co-founder.',
]

export const experience = [
  {
    org: 'XEMTECH',
    href: 'https://xemtech.vercel.app',
    role: 'Co-founder and AI Automation Engineer',
    when: 'Sep 2025 to present',
    where: 'Sukkur, hybrid',
    points: [
      'As a team, delivered 30+ projects for UK clients in the first six months, about £11,000 in agency revenue.',
      'Built AI features and business automation for clients with OpenAI, Claude, Gemini, n8n and Make.com, including a restaurant voice agent.',
      'Built PPH Job Radar, the studio’s Chrome extension for spotting new PeoplePerHour jobs.',
      'Scoped work, sent estimates and supported clients after handover. Client work is passing to my co-founder.',
    ],
  },
  {
    org: 'Arch Technologies',
    role: 'AI Intern',
    when: 'Jun 2026 to Jul 2026',
    where: 'Remote',
    points: ['Internship focused on prompt engineering and retrieval-augmented generation (RAG) with Claude.'],
  },
  {
    org: 'CryptoSocial',
    href: 'https://www.cryptosocial.media',
    role: 'Founder',
    when: '2026 to present',
    where: 'Remote',
    points: ['Built and run a research publication with an automated AI research desk, an MCP connector and a public JSON API.'],
  },
]

export const education = {
  org: 'Sukkur IBA University',
  degree: 'BS Computer Science (Artificial Intelligence)',
  when: 'Sep 2022 to Jun 2026',
  note: 'Fully funded STHP scholarship, top 100. Final year project: SmartLens.',
}

export const skills = [
  { group: 'LLMs and agents', items: 'Claude, Gemini, OpenAI, MCP, prompt engineering', where: 'CryptoSocial desk, voice agent, MMC AI' },
  { group: 'Computer vision', items: 'YOLOv8, PyTorch, OpenCV, Keras', where: 'SmartLens, age and gender model' },
  { group: 'Backend', items: 'Python, FastAPI, Node.js, REST APIs', where: 'SmartLens API, MMC AI' },
  { group: 'Web', items: 'TypeScript, JavaScript, React, Next.js', where: 'CryptoSocial, Lead Workspace, Job Radar' },
  { group: 'Data', items: 'PostgreSQL, Supabase, Firebase, SQL', where: 'CryptoSocial, Lead Workspace, SmartLens alerts' },
  { group: 'Testing', items: 'node:test, coverage gates, end-to-end checks in real Chrome', where: 'Job Radar' },
  { group: 'Automation', items: 'n8n, Make.com', where: 'XEMTECH client work' },
  { group: 'Spoken', items: 'English (professional), Urdu (native)', where: '' },
]

const gcp = (id: string) =>
  `https://www.skills.google/public_profiles/dc535861-0f72-4d39-84d5-1899f5bdaeb9/badges/${id}`

export const featuredCerts = [
  {
    name: 'AI Fluency: Framework and Foundations',
    issuer: 'Anthropic course',
    when: 'May 2026',
    href: 'https://verify.skilljar.com/c/hdvmf477erdm',
  },
  {
    name: 'Vertex Search and Embeddings',
    issuer: 'Google Cloud lab badge, covers RAG',
    when: 'Jul 2024',
    href: gcp('10005131'),
  },
  {
    name: 'Analyze Speech and Language with Google APIs',
    issuer: 'Google Cloud skill badge',
    when: 'Feb 2025',
    href: 'https://www.credly.com/badges/2a16fe93-5f43-4964-9e22-5cff6bb65c45',
  },
]

export const otherCerts: { group: string; items: { name: string; when: string; href?: string }[] }[] = [
  {
    group: 'Skill badges and labs',
    items: [
      { name: 'Analyze Sentiment with Natural Language API', when: 'Feb 2025', href: 'https://www.credly.com/badges/eebc40d6-51f0-4f0a-99e9-aa42b0a4f142' },
      { name: 'Introduction to Vertex AI Studio', when: 'Jul 2024', href: gcp('9972629') },
      { name: 'Create Image Captioning Models', when: 'Jul 2024', href: gcp('9946746') },
      { name: 'Transformer Models and BERT Model', when: 'Jul 2024', href: gcp('9926215') },
      { name: 'Encoder-Decoder Architecture', when: 'Jul 2024', href: gcp('9875385') },
      { name: 'Attention Mechanism', when: 'Jul 2024', href: gcp('9760276') },
      { name: 'Introduction to Image Generation', when: 'Jul 2024' },
      { name: 'Prompt Design in Vertex AI', when: 'Jul 2024', href: gcp('9688900') },
    ],
  },
  {
    group: 'Course completions',
    items: [
      { name: 'Claude 101 (Anthropic)', when: 'May 2026', href: 'https://verify.skilljar.com/c/hz2p5f4eikah' },
      { name: 'Prompt Engineering with ChatGPT (Simplilearn)', when: 'Dec 2025', href: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MDUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTU3ODczMV85ODQ1NzY0MTc2NTY1Njc3NDI4NC5wbmciLCJ1c2VybmFtZSI6IkFsaSBSYXphIE1lbW9uIn0%3D' },
      { name: 'What Is Generative AI? (LinkedIn Learning)', when: 'Sep 2024', href: 'https://www.linkedin.com/learning/certificates/5dd162f9cfde50f74b210201b73c580417d5c477abe0860d6ecc5b26c031b36e' },
      { name: 'Career Skills in Data Analytics (LinkedIn Learning)', when: 'Sep 2024', href: 'https://www.linkedin.com/learning/certificates/021ad118522b25bddb3e019c65a6ac183ca8809782cb5f86646a85b380650232' },
      { name: 'Algorithms, Part I (Coursera)', when: 'Aug 2024' },
      { name: 'Applying AI Principles with Google Cloud', when: 'Jul 2024', href: gcp('9727572') },
      { name: 'Introduction to Responsible AI (Google Cloud)', when: 'Jun 2024', href: gcp('9622064') },
      { name: 'Introduction to Large Language Models (Google Cloud)', when: 'Jun 2024', href: gcp('9606076') },
      { name: 'Introduction to Generative AI (Google Cloud)', when: 'Jun 2024', href: gcp('9605722') },
    ],
  },
]
