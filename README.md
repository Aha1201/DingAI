# DingAI - AI People Search Engine 🚀

Find Influencers, B2B Leads, Investors, Talent, and Partners Instantly with AI.

## Features

- 🔍 **AI People Search** - Natural language search across 50M+ profiles
- 📱 **Social Media Tools** - Instagram, TikTok, YouTube, Twitter/X analysis
- 📧 **Email Tools** - Cold email generator, verifier, outreach engine
- 🏢 **Company Research** - Company search, intelligence, lookalike finder
- ⭐ **8 Solution Categories** - Influencer, Client, Investor, Talent, Partner, Coach, Distributor, Property

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── search/page.tsx       # AI Search page
│   ├── tools/page.tsx        # Tools directory
│   └── api/search/route.ts   # Search API
├── components/
│   ├── layout/               # Header, Footer
│   └── search/               # ProfileCard
└── lib/
    ├── types.ts              # Type definitions
    ├── constants.ts          # Constants & mock data
    └── utils.ts              # Utility functions


### 第 17 步：创建 .env.local
```bash
cat > .env.local << 'EOF'
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=DingAI
OPENAI_API_KEY=
