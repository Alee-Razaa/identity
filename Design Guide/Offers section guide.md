# Role & Objective
You are an expert Frontend Architect specializing in React, Next.js (App Router), TypeScript, and Tailwind CSS. 

Your task is to take my exact offer text, structural layout parameters, and operational data constraints to build a beautifully responsive, production-ready "Offers & Services Dashboard Carousel" component (`OffersCarousel.tsx`). It must feature a premium, lovable UI that immediately drives user conversion into my PeoplePerHour workstreams.

---

# Design & Layout Architecture

1. **The Sliding Horizon Window**:
   - Create a horizontal sliding window track that visibly displays exactly **3 cards at a time** on desktop, while the remaining **2 cards smoothly loop or roll into view** asynchronously.
   - Every card must feature an independent image gallery container at the top that auto-flips between **3 dummy project screenshot images every 3 seconds** using a clean inline interval timer.

2. **The Offer Card Blueprint**:
   - **Top**: Image switcher loop (3 dummy images flipping every 3s smoothly).
   - **Body**: Bold technical title, client-facing taglines, and a truncated brief explanation of the capabilities provided.
   - **Footer**: Distinct price badge (e.g., "$260 Starting"), execution timeline badge ("4 Days Delivery"), and a prominent "View Details" interactive button.
   - **Theme Accents**: Maintain the premium dark code ecosystem (`bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300`).

3. **The Immersive Popup Detail Page Matrix**:
   - Clicking any card card opens a beautiful, premium fullscreen-overlay popup module mapping perfectly to the details of that offer.
   - Clicking anywhere outside the modal boundary wrapper instantly removes the popup view context.
   - Structure inside the modal view must mimic a premium standalone landing surface containing detailed checklists: What's Included (✓), What's Excluded (✗), Workflow Steps, Optional Paid Add-ons with individual price increments, and a high-visibility, conversion-optimized **Call to Action Action Button** redirecting to the provided PeoplePerHour links.

---

# Dataset Configuration (Strict Content Injection)

Populate the React state configuration array with these exact details (generate structural variations or mirror templates for Offers 3-6 using standard agency disciplines like TikTok Shops, n8n Core Automation, or SEO/AEO optimizations):

## Offer 1: AI Voice Agent for Calls, Appointment Booking & Sales Automation
- **Base Price**: $260 | **Delivery**: 4 Days
- **CTA Endpoint**: https://www.peopleperhour.com/hourlie/ai-voice-agent-for-calls-appoinment-booking-sales-automation/1118141
- **Deliverables**: ✓ Custom Voice AI Agent supporting up to 3 scenarios, ✓ Workflow automation across multiple platforms, ✓ 5-7 days delivery cadence, ✓ 30 days of standard support, ✓ Unlimited variations during phase.
- **Add-ons Matrix**: 
  - Advanced voice customization (accent/tone) [+$250 | +3 Days]
  - Additional platform integrations [+$100 | +2 Days]
  - Multi-language support activation [+$200 | +2 Days]
  - 1-Day Express Expedited Delivery [+$200]

## Offer 2: Build full stack web app with Lovable, Replit, Claude Cursor
- **Base Price**: $260 | **Delivery**: 4 Days
- **CTA Endpoint**: https://www.peopleperhour.com/hourlie/build-full-stack-web-app-with-lovable-replit-claude-cursor/1118473
- **Deliverables**: ✓ Clean frontend (Next.js/React/Tailwind), ✓ Supabase User Auth layer, ✓ Database setup (Supabase/MongoDB), ✓ Vercel live deployment, ✓ Clean GitHub repository handoff.
- **Add-ons Matrix**:
  - Subscription Payments Core (Stripe Matrix) [+$200 | +2 Days]
  - Custom Domain Binding + Secure SSL [+$100 | +1 Day]
  - Analytical Event Dashboard Visualizer [+$150 | +2 Days]
  - Semantic Metadata SEO & AEO Matrix Mapping [+$150 | +2 Days]
  - Custom AI Chatbot (Claude / OpenAI API Engine) [+$150 | +2 Days]
  - 1-Day Express Expedited Delivery [+$400]

*(Generate unique technical descriptions, pricing tags, and milestones matching this standard structure for Offers 3, 4, 5, and 6 to complete the 6-card dashboard)*

---

# Code Standards & Delivery Specs
- Return a single, cleanly written Next.js client-side React code file using explicit TypeScript syntax types.
- Leverage raw Tailwind CSS values (`transition-all`, `duration-500`, `ease-in-out`) to animate the slider slide movements and layout updates without loading large, heavy external libraries.
- Ensure all states are properly handled and isolated so clicking item parameters inside the active modal does not break background tracking indices.