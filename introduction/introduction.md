# Rival Research Platform - MVP Features

### **1. User Input Section**

- Three buttons: **Instagram, TikTok, YouTube** (select platform)
- Input field for **niche or topic** (e.g., "fitness coaching," "SaaS growth hacks")
- "Find Competitors" button to start search

### **2. Competitor & Video Analysis**

- Displays a **list of the top 10 creators** in the selected niche/platform
- Shows **top 10 videos** per creator
- Insights provided for each video: (use ai (deepseek API)to generate insights) @deepseek.com
  - Video elements used
  - Storytelling approach
  - Entertainment style
  - Engagement strategy
  - Possible alternative ways to execute the same video

### **3. Content Display & Paywall**

- Displays only **20 video results for free**
- Remaining videos are **locked behind a paywall**
- Unlock all videos for a **$3 or $5 one-time payment**

### **4. Page Layout**

- **Top Section:** Title and description of the tool
- **Main Interface:**
  - Platform selection buttons (Instagram, TikTok, YouTube)
  - Search input field
  - "Find Competitors" button
  - Results table with competitor names, video thumbnails, and insights
  - Locked results with payment option
- **Bottom Section:** Guide on how to use the application

### **5. Technology Stack**

- **Frontend:** Next.js (React-based framework)
- **Backend:** Next.js API Routes
- **Database:** Supabase
- **Scraping API:** YouTube Data API, TikTok Scraper API, Instagram Graph API (or third-party services)
- **Authentication & Payment:** Stripe for handling payments

### **6. Monetization**

- Free access to first **20 video results**
- **Paywall**: Unlock remaining content for a one-time fee ($3 or $5)

### **7. Additional Considerations**

- Future premium features: AI-generated video outlines, automated competitor tracking
- SEO optimization for discoverability
- Mobile-responsive design
