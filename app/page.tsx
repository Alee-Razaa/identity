'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Briefcase, 
  MapPin, 
  Linkedin, 
  Github, 
  Mail, 
  Code, 
  Compass, 
  Send,
  Layers,
  Sparkles
} from 'lucide-react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [currentYear, setCurrentYear] = useState(2026)
  const [showPortfolio, setShowPortfolio] = useState(false)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Toggle scrolling based on portfolio visibility
    if (showPortfolio) {
      document.body.classList.remove('portfolio-hidden')
      document.body.classList.add('portfolio-shown')
      // Scroll to top when portfolio is revealed
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 500)
    } else {
      document.body.classList.remove('portfolio-shown')
      document.body.classList.add('portfolio-hidden')
      window.scrollTo(0, 0)
    }
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showPortfolio])

  const revealPortfolio = () => {
    setShowPortfolio(true)
  }

  const skillGroups = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'AI/ML & Computer Vision',
      skills: [
        { name: 'Deep Learning', level: 88 },
        { name: 'Computer Vision', level: 85 },
        { name: 'YOLOv8 & Object Detection', level: 87 },
        { name: 'Machine Learning', level: 86 },
        { name: 'RAG (Retrieval-Augmented Generation)', level: 80 },
        { name: 'Explainable AI', level: 78 },
      ],
    },
    {
      title: 'Full-Stack Development',
      skills: [
        { name: 'React.js', level: 87 },
        { name: 'Node.js & Express', level: 86 },
        { name: 'FastAPI', level: 82 },
        { name: 'MongoDB', level: 84 },
        { name: 'PostgreSQL', level: 83 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (Lambda, S3, EC2)', level: 82 },
        { name: 'Railway', level: 78 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Cloudinary', level: 79 },
        { name: 'Resend', level: 76 },
      ],
    },
    {
      title: 'AI Tools & Automation',
      skills: [
        { name: 'Make.com', level: 84 },
        { name: 'Claude & LLMs', level: 88 },
        { name: 'Cursor IDE', level: 86 },
        { name: 'VS Code', level: 90 },
        { name: 'API Integration', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Technical Communication', level: 85 },
        { name: 'Teamwork & Collaboration', level: 82 },
        { name: 'Adaptability', level: 88 },
      ],
    },
  ]

  const projects = [
    {
      title: 'SmartLens: AI Threat Detection with Smart Storage',
      type: 'Intelligent Surveillance System',
      duration: 'Ongoing',
      description: 'SmartLens automates threat detection for retail outlets across Pakistan using YOLOv8. The system triggers recording only when motion or threats are detected, reducing storage overhead by eliminating redundant footage. Users receive real-time mobile alerts and comprehensive incident reports.',
      outcomes: [
        'Reduced cloud storage costs by 85% through motion-triggered recording instead of continuous capture.',
        'Deployed across multiple retail locations with real-time threat alerts (fire, weapons, suspicious behavior) reducing response time by 90%.',
        'Integrated Flutter mobile app with Firebase backend enabling instant notifications and incident retrieval.',
        'Built PostgreSQL database architecture handling 500+ hours of indexed footage per location monthly.',
      ],
      tech: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'Flutter', 'Firebase', 'PostgreSQL', 'Backblaze B2'],
    },
    {
      title: 'Multimodal AI Chatbot: Concurrent LLM Comparison',
      type: 'AI Application / Multi-Model Interface',
      duration: 'Completed',
      description: 'This platform reduces LLM output uncertainty by running 2+ AI models (Gemini, GPT-3.5, Mistral) concurrently and showing outputs side-by-side for comparison. Supports text-to-speech, OCR, image generation, and audio transcription for diverse workflows.',
      outcomes: [
        'Enabled users to evaluate AI model outputs in real time, improving decision-making and reducing hallucination risk.',
        'Integrated 5+ LLM APIs (OpenRouter, Gemini, GPT) with a unified interface for model switching.',
        'Added multimodal input and output (text, audio, image, document) expanding use cases across content creation and analysis.',
        'Deployed full-stack application handling 100+ concurrent requests with optimized API calls reducing latency by 40%.',
      ],
      tech: ['React.js', 'Node.js', 'Python', 'Flask', 'MongoDB', 'OpenRouter API', 'Gemini API', 'REST API'],
    },
    {
      title: 'Oxford Sports E-Commerce Platform',
      type: 'B2B & B2C Platform',
      duration: 'Completed',
      description: 'Built an autonomous inventory management platform for Oxford Sports with React and Node.js. Implemented rule-based SKU tracking, smart order processing, and a comprehensive admin dashboard with bulk product upload for 5,000+ products in under 10 seconds.',
      outcomes: [
        'Processed 5,000+ products in under 10 seconds with 100% accuracy.',
        'Reduced manual inventory effort by 99% through automation and rule-based tracking.',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Excel Parsing'],
    },
    {
      title: 'AWS Real Estate Market Intelligence',
      type: 'Automation Pipeline',
      duration: 'Completed',
      description: 'Python-powered AWS Lambda pipeline supporting real estate market analysis and intelligence workflows with serverless automation for event-driven data processing.',
      outcomes: [
        'Built an event-driven workflow for market intelligence reporting and real-time analysis.',
      ],
      tech: ['Python', 'AWS Lambda', 'Serverless', 'REST APIs'],
    },
  ]

  const experience = [
    {
      role: 'Freelance Full-Stack AI Developer',
      company: 'PeoplePerHour (Self-Employed)',
      location: 'Remote',
      period: 'September 2025 - Present',
      responsibilities: [
        'Design and architect full-stack AI applications combining Python backends, React frontends, and cloud integrations.',
        'Develop automation pipelines using Make.com, OpenAI APIs, and AWS Lambda to eliminate manual processes.',
        'Build intelligent systems leveraging machine learning and computer vision for real-world use cases.',
        'Maintain client relationships through clear communication, technical guidance, and consistent quality delivery.',
      ],
      achievements: [
        'Built autonomous inventory system for Oxford Sports handling 5,000+ products with rule-based SKU tracking and bulk upload processing in under 10 seconds (100% accuracy).',
        'Maintained 5-star client rating across projects by delivering ahead of schedule with high-quality results.',
      ],
    },
  ]

  const education = [
    {
      qualification: 'Bachelor of Science in Artificial Intelligence',
      institution: 'Sukkur IBA University, Sukkur, Pakistan',
      duration: 'September 2022 - May 2026 (Completed)',
      mode: 'Full-time',
      highlights: [
        'Coursework: Machine Learning, Deep Learning, Computer Vision, Artificial Intelligence, Data Structures & Algorithms, Software Engineering, Linear Algebra, Probability & Statistics.',
        'Built foundation in AI theory and practical applications through capstone projects and hands-on labs.',
        'Developed problem-solving mindset by tackling real-world AI challenges during academic projects.',
      ],
    },
  ]

  const certifications = [
    {
      name: 'Claude 101',
      provider: 'Anthropic',
      issued: 'May 2026',
      credentialId: 'hz2p5f4eikah',
      url: 'https://verify.skilljar.com/c/hz2p5f4eikah',
    },
    {
      name: 'AI Fluency: Framework & Foundations',
      provider: 'Anthropic',
      issued: 'May 2026',
      credentialId: 'hdvmf477erdm',
      url: 'https://verify.skilljar.com/c/hdvmf477erdm',
    },
    {
      name: 'Prompt Engineering',
      provider: 'Simplilearn',
      issued: 'Dec 2025',
      credentialId: '9578731',
      url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MDUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTU3ODczMV85ODQ1NzY0MTc2NTY1Njc3NDI4NC5wbmciLCJ1c2VybmFtZSI6IkFsaSBSYXphIE1lbW9uIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F8058%2FPrompt-Engineering-with-ChatGPT%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1591378775738140693&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT03OMgtzNk72NUiyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAINOqMpBAAAA',
    },
    {
      name: 'Analyze Speech and Language with Google APIs',
      provider: 'Google Cloud',
      issued: 'Feb 2025',
      url: 'https://www.credly.com/badges/2a16fe93-5f43-4964-9e22-5cff6bb65c45/linked_in_profile',
    },
    {
      name: 'Analyze Sentiment with Natural Language API',
      provider: 'Google Cloud',
      issued: 'Feb 2025',
      url: 'https://www.credly.com/badges/eebc40d6-51f0-4f0a-99e9-aa42b0a4f142/linked_in_profile',
    },
    {
      name: 'Introduction to Career Skills in Data Analytics',
      provider: 'LinkedIn',
      issued: 'Sep 2024',
      url: 'https://www.linkedin.com/learning/certificates/021ad118522b25bddb3e019c65a6ac183ca8809782cb5f86646a85b380650232?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BEhwANH71Q6Cn8FvRS%2FlZ5w%3D%3D',
    },
    {
      name: 'Generative AI',
      provider: 'LinkedIn',
      issued: 'Sep 2024',
      url: 'https://www.linkedin.com/learning/certificates/5dd162f9cfde50f74b210201b73c580417d5c477abe0860d6ecc5b26c031b36e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BEhwANH71Q6Cn8FvRS%2FlZ5w%3D%3D',
    },
    {
      name: 'Vertex Search and Embeddings',
      provider: 'Google Cloud',
      issued: 'Jul 2024',
      credentialId: '10005131',
      url: 'https://www.skills.google/public_profiles/dc535861-0f72-4d39-84d5-1899f5bdaeb9/badges/10005131?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      name: 'Encoder-Decoder Architectures',
      provider: 'Google Cloud',
      issued: 'Jul 2024',
      credentialId: '9875385',
      url: 'https://www.skills.google/public_profiles/dc535861-0f72-4d39-84d5-1899f5bdaeb9/badges/9875385?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      name: 'Introduction to Large Language Models (LLMs)',
      provider: 'Google Cloud',
      issued: 'Jun 2024',
      credentialId: '9606076',
      url: 'https://www.skills.google/public_profiles/dc535861-0f72-4d39-84d5-1899f5bdaeb9/badges/9606076?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      name: 'Introduction to Generative AI',
      provider: 'Google Cloud',
      issued: 'Jun 2024',
      credentialId: '9605722',
      url: 'https://www.skills.google/public_profiles/dc535861-0f72-4d39-84d5-1899f5bdaeb9/badges/9605722?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
  ]

  const achievementStats = [
    { label: '10 Months Professional Experience', value: '10' },
    { label: '6+ Certifications', value: '6+' },
    { label: '2 Major Projects', value: '2' },
    { label: '5-Star Client Rating', value: '5' },
  ]

  const achievements = [
    {
      category: 'Professional',
      year: '2025',
      title: 'Oxford Sports E-Commerce Platform',
      institution: 'PeoplePerHour / Oxford Sports',
      description: 'Built autonomous B2B/B2C wholesale platform with rule-based inventory management, processing 5,000+ products in under 10 seconds with 100% accuracy.',
    },
    {
      category: 'Professional',
      year: '2025',
      title: '5-Star Client Ratings',
      institution: 'PeoplePerHour',
      description: 'Maintained perfect 5-star rating across freelance projects through technical excellence, clear communication, and consistent delivery of high-quality solutions.',
    },
    {
      category: 'Academic',
      year: '2026',
      title: 'Bachelor of Science in Artificial Intelligence',
      institution: 'Sukkur IBA University',
      description: 'Graduated with strong foundation in machine learning, deep learning, computer vision, and full-stack development with practical hands-on experience.',
    },
  ]

  return (
    <main className="relative bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* ================= HERO SECTION (FIXED/STATIC) ================= */}
      <section className={`fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden z-30 transition-all duration-1000 ${showPortfolio ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Winding mountain road background */}
        <Image 
          src="/background.png"
          alt="Scenic mountain road"
          fill
          priority
          quality={85}
          className="object-cover scale-105"
          sizes="100vw"
        />
        {/* Semi-transparent overlay matching screen screenshot */}
        <div className="absolute inset-0 z-10 bg-black/30 backdrop-brightness-[0.85]" />

        {/* Central Glassmorphic Card */}
        <div className="relative z-20 w-full max-w-xs mx-4 animate-fade-in">
          <div className="bg-white/5 backdrop-blur-3xl border border-white/15 rounded-[2rem] shadow-2xl p-4 text-center flex flex-col items-center">
            {/* Logo Initials */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
              AR
            </div>
            {/* Circular Profile Photo */}
            <div className="relative mb-3 mt-3">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-70 blur-sm animate-pulse" />
              <Image 
                src="/profile.png" 
                alt="Ali Raza" 
                width={120}
                height={120}
                priority
                className="relative w-28 h-28 rounded-full border-2 border-white/40 object-cover object-top shadow-lg"
              />
            </div>

            {/* Name & Title */}
            <h1 className="text-xl font-extrabold text-white tracking-tight mb-0.5 drop-shadow-md">
              Ali Raza Memon
            </h1>
            <p className="text-xs text-slate-200 font-medium tracking-wide mb-2">
              Full-Stack AI Developer · Claude Certified · AI Graduate
            </p>

            {/* Intro Paragraph (Landing) */}
            <p className="text-slate-300 text-xs leading-relaxed max-w-[36rem] mb-3">
              Freelance AI developer with 10 months of experience building automation systems and scalable full-stack applications.
            </p>


            {/* Details (Contact & Location) */}
            <div className="space-y-1 mb-3 w-full">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('alirazamemonofficial@gmail.com');
                  alert('Email copied to clipboard!');
                }}
                className="flex items-center justify-center gap-2 text-slate-100/90 text-xs font-medium w-full px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-white/80" />
                <span>alirazamemonofficial@gmail.com</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('+92304-2424358');
                  alert('Phone copied to clipboard!');
                }}
                className="flex items-center justify-center gap-2 text-slate-100/90 text-xs font-medium w-full px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5 text-white/80" />
                <span>+92304-2424358</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-slate-100/90 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-white/80" />
                <span>Sukkur, Sindh, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 justify-center mb-3">
              <a 
                href="https://www.linkedin.com/in/realalirazamemon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://github.com/Alee-Razaa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://upwork.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                {/* Custom SVG for Upwork Logo */}
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.571 5.857c-2.314 0-4.043 1.629-4.714 3.971-1.071-2.143-1.857-4.571-2.457-6.971H7.8v9c0 1.543-1.257 2.8-2.8 2.8S2.2 13.4 2.2 11.857V2.857H0v9c0 2.743 2.257 5 5 5 2.743 0 5-2.257 5-5V7.771c.429 1.771 1.071 3.514 1.857 5.086l-2.029 9.286h2.286l1.514-6.943c.943.8 2.057 1.257 3.286 1.257 2.743 0 4.886-2.257 4.886-5V8.571c.086-2.743-2.171-2.714-3.229-2.714zm0 6.857c-1.129 0-2.171-.629-2.829-1.686l.286-1.343c.4-1.857 1.257-2.914 2.543-2.914 1.486 0 2.543 1.143 2.543 2.943 0 1.771-1.057 3-2.543 3z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <button 
              onClick={revealPortfolio} 
              className="group w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all duration-300 transform active:scale-98 flex items-center justify-center text-xs"
            >
              Explore Portfolio
            </button>

          </div>
        </div>
      </section>

      {/* Navigation Floating Header (Visible after clicking button) - placed OUTSIDE content container */}
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-2xl">
          <button onClick={() => setShowPortfolio(false)} className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition">← Back</button>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex gap-4 text-xs font-semibold text-slate-400">
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>

      {/* ================= PORTFOLIO SECTIONS ================= */}
      <div className={`relative z-20 min-h-screen bg-slate-950 px-4 md:px-8 py-16 max-w-5xl mx-auto space-y-28 transition-all duration-1000 transform ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>

        {/* About Me Section */}
        <section id="about" className={`text-center max-w-2xl mx-auto space-y-6 transition-all duration-1000 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: showPortfolio ? '200ms' : '0ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-purple-400" />
            AI Developer & Problem Solver
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Transforming business problems into <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">intelligent solutions</span> through <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">practical AI & automation</span>.
          </h2>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg">
            I'm a freelance AI developer and recent graduate (May 2026) specializing in AI automation, full-stack development, and intelligent integrations.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15">Work Experience</button>
            <button onClick={() => document.getElementById('education')?.scrollIntoView({behavior: 'smooth'})} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15">Education</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15">Projects</button>
            <button onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15">Skills</button>
            <button onClick={() => document.getElementById('certifications')?.scrollIntoView({behavior: 'smooth'})} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15">Certifications</button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`space-y-8 scroll-mt-24 transition-all duration-1000 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: showPortfolio ? '400ms' : '0ms' }}>
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Skills & Expertise</h3>
            <p className="text-slate-400 text-sm">Technologies and frameworks I use to deliver end-to-end solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backend & AI */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="font-semibold text-lg text-white">AI & Programming</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroups
                  .filter(g => g.title === 'Programming Languages' || g.title === 'AI/ML & Computer Vision')
                  .flatMap(g => g.skills)
                  .map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700/60">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>

            {/* Frontend & Databases */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-pink-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
                  <Layers className="w-5 h-5 text-pink-400" />
                </div>
                <h4 className="font-semibold text-lg text-white">Web & Data</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroups
                  .filter(g => g.title === 'Full-Stack Development')
                  .flatMap(g => g.skills)
                  .map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700/60">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>

            {/* Infra & Devops */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <Compass className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="font-semibold text-lg text-white">Cloud & DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroups
                  .filter(g => g.title === 'Cloud & DevOps' || g.title === 'AI Tools & Automation')
                  .flatMap(g => g.skills)
                  .map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700/60">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`space-y-8 scroll-mt-24 transition-all duration-1000 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: showPortfolio ? '600ms' : '0ms' }}>
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Recent Projects</h3>
            <p className="text-slate-400 text-sm">Real-world applications built for efficiency and scale</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-500/[0.02]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-xs text-purple-300 font-medium mb-3">{project.type}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`space-y-8 scroll-mt-24 transition-all duration-1000 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: showPortfolio ? '800ms' : '0ms' }}>
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Work History</h3>
            <p className="text-slate-400 text-sm">Professional experience and career timeline</p>
          </div>
          
          <div className="relative border-l-2 border-slate-800 pl-6 md:pl-8 ml-2 space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 group-hover:bg-purple-500 transition-all duration-300 shadow-md shadow-purple-500/20" />
                
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{exp.period}</span>
                  <h4 className="text-xl font-bold text-white leading-none">{exp.role}</h4>
                  <div className="flex flex-wrap gap-x-3 text-sm font-semibold text-slate-400">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="text-slate-400 text-sm leading-relaxed max-w-3xl pt-2 space-y-2">
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-900">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Achievements:</span>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-300">
                          {exp.achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`space-y-8 scroll-mt-24 transition-all duration-1000 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: showPortfolio ? '1000ms' : '0ms' }}>
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Get In Touch</h3>
            <p className="text-slate-400 text-sm">Let&apos;s build something intelligent and automated together</p>
          </div>

          <div className="max-w-md mx-auto bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              <a 
                href="mailto:ali.raza@upwork.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 hover:border-purple-500/20 border border-slate-800/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h5 className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Me</h5>
                  <p className="text-sm font-medium text-slate-200">ali.raza@upwork.com</p>
                </div>
              </a>

              <a 
                href="https://upwork.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 hover:border-purple-500/20 border border-slate-800/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
                  <Briefcase className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h5 className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Upwork Profile</h5>
                  <p className="text-sm font-medium text-slate-200">upwork.com/freelancers/aliraza</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 hover:border-purple-500/20 border border-slate-800/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h5 className="text-xs text-slate-500 font-semibold uppercase tracking-wider">LinkedIn</h5>
                  <p className="text-sm font-medium text-slate-200">linkedin.com/in/aliraza</p>
                </div>
              </a>
            </div>
            
            <div className="text-center pt-2">
              <a 
                href="mailto:ali.raza@upwork.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors shadow-lg"
              >
                <Send className="w-4 h-4" />
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`text-center pt-10 pb-4 border-t border-slate-900 text-slate-600 text-xs space-y-2 transition-all duration-1000 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: showPortfolio ? '1200ms' : '0ms' }}>
          <p>© {currentYear} Ali Raza. All rights reserved.</p>
          <p>Created for Full Stack AI automation showcase.</p>
        </footer>
      </div>

    </main>
  )
}
