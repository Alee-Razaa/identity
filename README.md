# Ali Raza - Personal Portfolio Website

A modern, interactive personal portfolio with expandable card design inspired by professional profile layouts.

## 🎯 Features

✅ **Card-Based Design** - Centered profile card with beautiful gradient background  
✅ **Click-to-Expand Sections** - Skills, Projects, Experience, Contact all expandable  
✅ **Responsive** - Works perfectly on mobile, tablet, and desktop  
✅ **Fast & Modern** - Built with Next.js 14 + React + Tailwind CSS  
✅ **Professional** - Perfect for freelancers and consultants  
✅ **Easy to Customize** - Simple text replacements for all content  

## 📋 Project Structure

```
ali-portfolio/
├── app/
│   ├── layout.tsx          # Main layout with metadata
│   ├── page.tsx            # Home page with profile card
│   └── globals.css         # Global styles
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS setup
├── tsconfig.json           # TypeScript config
├── .gitignore             # Git configuration
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Installation

```bash
cd ali-portfolio
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` - Your portfolio is live! 🎉

### 3. Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Change Profile Photo
In `app/page.tsx`, replace the initials placeholder with an image:

```javascript
// Current (initials):
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center border-4 border-white/30">
  <span className="text-3xl font-bold text-white">AR</span>
</div>

// New (with image):
<img 
  src="/path-to-your-photo.jpg" 
  alt="Ali Raza" 
  className="w-24 h-24 rounded-full border-4 border-white/30 object-cover"
/>
```

### Update Personal Information

Edit these values in `app/page.tsx`:

```javascript
// Name
<h1 className="text-3xl font-bold text-white mb-2">Ali Raza</h1>

// Title
<p className="text-lg text-purple-200 font-semibold mb-4">Full Stack AI Engineer</p>

// Company
<span>Upwork</span>

// Location
<span>Sukkur, Pakistan</span>
```

### Update Skills
Modify the `skills` array:

```javascript
const skills = [
  'Python', 'JavaScript/TypeScript', 'React', 'Next.js', 'Node.js',
  'FastAPI', 'Machine Learning', 'TensorFlow', 'LLM Integration',
  // Add your skills here
]
```

### Update Projects
Edit the `projects` array with your real projects:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'What you accomplished...',
    tech: ['Tech 1', 'Tech 2', 'Tech 3']
  },
  // Add more projects
]
```

### Update Experience
Modify the `experience` array:

```javascript
const experience = [
  {
    role: 'Your Role',
    company: 'Company Name',
    period: 'Start - End',
    description: 'What you did...'
  },
  // Add more experience
]
```

### Update Contact Information
Update the contact section in `app/page.tsx`:

```javascript
{/* Email */}
<a href="mailto:your-email@example.com">
  <p className="text-white text-xs font-semibold">Email</p>
  <p className="text-white/70 text-xs">your-email@example.com</p>
</a>

{/* Upwork Profile */}
<a href="https://www.upwork.com/freelancers/your-upwork-username">
  <p className="text-white text-xs font-semibold">Upwork Profile</p>
  <p className="text-white/70 text-xs">upwork.com/freelancers/your-username</p>
</a>

{/* LinkedIn */}
<a href="https://www.linkedin.com/in/your-linkedin-username/">
  <p className="text-white text-xs font-semibold">LinkedIn</p>
  <p className="text-white/70 text-xs">linkedin.com/in/your-username</p>
</a>
```

### Change Background Image/Gradient
In `app/page.tsx`, modify the background styling:

```javascript
{/* Current gradient background */}
style={{
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}

{/* Option: Use a photo instead */}
style={{
  backgroundImage: 'url(/path-to-your-background-image.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}

{/* Option: Different gradient */}
style={{
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%, #f093fb 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
```

### Change Color Scheme
Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0f172a',      // Main background
  secondary: '#1e293b',    // Card backgrounds
  accent: '#7c3aed',       // Button color
}
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile** (320px - 640px): Full-width centered card
- **Tablet** (641px - 1024px): Slightly larger card
- **Desktop** (1025px+): Same centered card with more breathing room

## 🌐 Deployment

### Option 1: Vercel (Recommended - 2 minutes)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Auto-deploys on push

### Option 3: Your Own Server
```bash
npm run build
npm start
# Run on your server/VPS
```

## 📊 SEO & Performance

- ✅ Optimized metadata in `layout.tsx`
- ✅ Fast loading with Next.js optimization
- ✅ Mobile-friendly and responsive
- ✅ Semantic HTML structure

## 🎬 Additional Features to Add

- **Portfolio Gallery** - Add image gallery of your work
- **Blog Section** - Share AI/tech insights
- **Testimonials** - Add client reviews
- **Contact Form** - Integrate with Formspree or Netlify Forms
- **Dark/Light Mode Toggle** - Add theme switcher
- **Analytics** - Google Analytics or Mixpanel
- **PDF Resume Download** - Link to your resume

## 💡 Pro Tips

1. **Add Your Photo** - Replace the initials with a professional headshot
2. **Keep It Updated** - Update projects and skills regularly
3. **Use Real Links** - Connect all social media and contact links
4. **Optimize Background** - Use a high-quality background image
5. **Mobile First** - Test on mobile devices before deploying

## 🔗 Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Language**: TypeScript
- **Hosting**: Vercel, Netlify, or your server

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main portfolio page with all content |
| `app/layout.tsx` | Root layout with metadata and head config |
| `app/globals.css` | Global styles and resets |
| `tailwind.config.js` | Tailwind theme colors and config |
| `package.json` | Project dependencies |
| `next.config.js` | Next.js configuration |
| `tsconfig.json` | TypeScript configuration |

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm run lint
# Fix any TypeScript errors
npm run build
```

## 📧 Support

All content is modular and easy to customize. Simply find the text or array you want to change and update it. The portfolio is built to be simple and maintainable.

## 🚀 Ready to Launch?

1. Customize all personal information
2. Add your profile photo
3. Update your projects and experience
4. Deploy to Vercel/Netlify
5. Share your link! 🎉

---

**Happy networking! Your portfolio is ready to impress.** 🚀
