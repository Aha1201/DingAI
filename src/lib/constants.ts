import { Profile, PersonType } from './types';

export const PERSON_TYPES: Record<PersonType, { label: string; shortLabel: string; icon: string; description: string; examples: string[]; color: string }> = {
  influencer: { label: 'Find Influencer', shortLabel: 'Influencer', icon: '⭐', description: 'Discover social media influencers', examples: ['Fitness influencers', 'Tech creators'], color: '#F59E0B' },
  client: { label: 'Find Client', shortLabel: 'Client', icon: '💼', description: 'Identify potential B2B clients', examples: ['Startup founders', 'Marketing directors'], color: '#3B82F6' },
  investor: { label: 'Find Investor', shortLabel: 'Investor', icon: '💰', description: 'Connect with investors', examples: ['Angel investors', 'VC partners'], color: '#10B981' },
  talent: { label: 'Find Talent', shortLabel: 'Talent', icon: '👥', description: 'Hire skilled professionals', examples: ['Senior engineers', 'Product designers'], color: '#8B5CF6' },
  partner: { label: 'Find Partner', shortLabel: 'Partner', icon: '🤝', description: 'Find business partners', examples: ['Co-founders', 'Distribution partners'], color: '#EC4899' },
  coach: { label: 'Find Coach', shortLabel: 'Coach', icon: '🎯', description: 'Connect with mentors', examples: ['Executive coaches', 'Career coaches'], color: '#06B6D4' },
  distributor: { label: 'Find Distributor', shortLabel: 'Distributor', icon: '🚚', description: 'Find distributors', examples: ['Regional distributors', 'Resellers'], color: '#F97316' },
  property_leads: { label: 'Find Property Leads', shortLabel: 'Property', icon: '🏠', description: 'Discover real estate', examples: ['Real estate agents', 'Property investors'], color: '#84CC16' },
};

export const SOCIAL_PLATFORMS = {
  instagram: { id: 'instagram', name: 'Instagram', icon: '📸', color: '#E4405F', bgColor: '#FDF2F8', tools: [
    { id: 'fake-follower-check', name: 'Fake Follower Check', icon: '🔍' },
    { id: 'follower-count', name: 'Follower Count', icon: '👥' },
    { id: 'engagement-calculator', name: 'Engagement Calculator', icon: '📊' },
    { id: 'audit', name: 'Audit', icon: '🔎' },
    { id: 'pricing-calculator', name: 'Pricing Calculator', icon: '💵' },
    { id: 'find-creators', name: 'Find Creators', icon: '⭐' },
    { id: 'compare-influencers', name: 'Compare Influencers', icon: '⚖️' }
  ]},
  tiktok: { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#000000', bgColor: '#F9FAFB', tools: [
    { id: 'fake-follower-check', name: 'Fake Follower Check', icon: '🔍' },
    { id: 'follower-count', name: 'Follower Count', icon: '👥' },
    { id: 'engagement-calculator', name: 'Engagement Calculator', icon: '📊' },
    { id: 'audit', name: 'Audit', icon: '🔎' }
  ]},
  youtube: { id: 'youtube', name: 'YouTube', icon: '▶️', color: '#FF0000', bgColor: '#FEF2F2', tools: [
    { id: 'follower-count', name: 'Follower Count', icon: '👥' },
    { id: 'fake-follower-check', name: 'Fake Follower Check', icon: '🔍' },
    { id: 'engagement-calculator', name: 'Engagement Calculator', icon: '📊' },
    { id: 'audit', name: 'Audit', icon: '🔎' }
  ]},
  twitter: { id: 'twitter', name: 'Twitter/X', icon: '🐦', color: '#1DA1F2', bgColor: '#EFF6FF', tools: [
    { id: 'profile-viewer', name: 'Profile Viewer', icon: '👤' },
    { id: 'follower-count', name: 'Follower Count', icon: '👥' },
    { id: 'engagement-calculator', name: 'Engagement Calculator', icon: '📊' },
    { id: 'audit', name: 'Audit', icon: '🔎' }
  ]},
  linkedin: { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: '#0A66C2', bgColor: '#EFF6FF', tools: [
    { id: 'profile-extractor', name: 'Profile Extractor', icon: '📤' }
  ]},
  facebook: { id: 'facebook', name: 'Facebook', icon: '👥', color: '#1877F2', bgColor: '#EFF6FF', tools: [
    { id: 'profile-viewer', name: 'Profile Viewer', icon: '👤' }
  ]},
  discord: { id: 'discord', name: 'Discord', icon: '🎮', color: '#5865F2', bgColor: '#F5F3FF', tools: [
    { id: 'profile-viewer', name: 'Profile Viewer', icon: '👤' }
  ]},
  github: { id: 'github', name: 'GitHub', icon: '💻', color: '#181717', bgColor: '#F9FAFB', tools: [
    { id: 'profile-viewer', name: 'Profile Viewer', icon: '👤' }
  ]},
};

export const EMAIL_TOOLS = [
  { id: 'cold-email-generator', name: 'Cold Email Generator', icon: '📧', description: 'Generate personalized cold emails', credits: 2 },
  { id: 'cold-call-tool', name: 'Free Cold Call Tool', icon: '📞', description: 'Script and plan cold calls', credits: 1 },
  { id: 'bulk-email-verifier', name: 'Bulk Email Verifier', icon: '✅', description: 'Verify multiple emails', credits: 1 },
  { id: 'email-verifier', name: 'Free Email Verifier', icon: '✓', description: 'Verify single email', credits: 1 },
  { id: 'email-permutator', name: 'Email Permutator', icon: '🔄', description: 'Generate email variations', credits: 1 },
  { id: 'reverse-email-lookup', name: 'Reverse Email Lookup', icon: '🔍', description: 'Find person by email', credits: 2 },
  { id: 'email-outreach', name: 'AI Email Outreach Engine', icon: '🚀', description: 'Automated campaigns', credits: 5 },
  { id: 'email-list', name: 'Email Addresses List', icon: '📋', description: 'Build email lists', credits: 3 },
  { id: 'email-subject-tester', name: 'Email Subject Line Tester', icon: '📝', description: 'Optimize subject lines', credits: 1 },
];

export const COMPANY_TOOLS = [
  { id: 'company-profile-search', name: 'Company Profile Search', icon: '🏢', description: 'Find company info', credits: 1 },
  { id: 'company-location-finder', name: 'Company Location Finder', icon: '📍', description: 'Find offices', credits: 1 },
  { id: 'small-business-near-me', name: 'Small Business Near Me', icon: '🗺️', description: 'Find local businesses', credits: 2 },
  { id: 'company-intelligence', name: 'Company Intelligence Snapshot', icon: '🕵️', description: 'Deep analysis', credits: 3 },
  { id: 'lookalike-company', name: 'Lookalike Company Finder', icon: '👯', description: 'Find similar companies', credits: 2 },
];

export const OTHER_TOOLS = [
  { id: 'ai-headshot', name: 'Free AI Headshot Generator', icon: '🖼️', description: 'Create headshots', credits: 3 },
  { id: 'cpm-calculator', name: 'CPM Calculator', icon: '💰', description: 'Calculate CPM', credits: 1 },
  { id: 'tech-stack-checker', name: 'Tech Stack Checker', icon: '🛠️', description: 'Identify technologies', credits: 2 },
  { id: 'market-size', name: 'Market Size Calculator', icon: '📈', description: 'Calculate TAM/SAM/SOM', credits: 2 },
  { id: 'icp-fit-scorer', name: 'ICP Fit Scorer', icon: '🎯', description: 'Score prospect fit', credits: 2 },
  { id: 'sales-deck', name: 'Sales Deck Outline Generator', icon: '📊', description: 'Create pitch decks', credits: 3 },
  { id: 'competitor-comparison', name: 'Competitor Comparison Tool', icon: '⚔️', description: 'Compare competitors', credits: 2 },
  { id: 'resume-scorer', name: 'Resume Scorer Free', icon: '📄', description: 'Score resumes', credits: 2 },
  { id: 'cv-builder', name: 'CV Builder', icon: '📝', description: 'Build CVs', credits: 3 },
  { id: 'invoice-generator', name: 'Free Invoice Generator', icon: '💵', description: 'Generate invoices', credits: 1 },
];

export const FEATURED_PROFILES: Profile[] = [
  { id: 'featured-1', name: 'Sean Astin', title: 'Creator', location: 'Los Angeles, CA', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', platforms: [{ platform: 'twitter', username: '@seanastin', url: 'https://twitter.com/seanastin', followers: 250000, engagement: 4.2, verified: true }, { platform: 'instagram', username: 'seanastin', url: 'https://instagram.com/seanastin', followers: 850000, engagement: 3.8, verified: true }], tags: ['actor', 'creator', 'entertainment'], score: 95, verified: true },
  { id: 'featured-2', name: 'Tope Awotona', title: 'Founder & CEO', company: 'Calendly', location: 'Atlanta, GA', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop', platforms: [{ platform: 'linkedin', username: 'topeawotona', url: 'https://linkedin.com/in/topeawotona', followers: 50000, engagement: 8.5, verified: true }], tags: ['founder', 'saas', 'startup'], score: 92, verified: true },
  { id: 'featured-3', name: 'Erik Schluntz', title: 'Founder', company: 'Cobalt Robotics', location: 'San Francisco, CA', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', platforms: [{ platform: 'linkedin', username: 'erikschluntz', url: 'https://linkedin.com/in/erikschluntz', followers: 15000, engagement: 7.8, verified: true }], tags: ['founder', 'robotics', 'ai'], score: 88, verified: true },
  { id: 'featured-4', name: 'Sonali De Rycker', title: 'Investor', company: 'Accel Partners', location: 'London, UK', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop', platforms: [{ platform: 'linkedin', username: 'sonaliderycker', url: 'https://linkedin.com/in/sonaliderycker', followers: 35000, engagement: 6.8, verified: true }], tags: ['investor', 'vc', 'europe'], score: 94, verified: true },
];

export function generateMockProfiles(count: number, type?: PersonType): Profile[] {
  const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery', 'Cameron', 'Dakota', 'Emerson', 'Finley', 'Harper', 'Hayden', 'Jamie', 'Kendall', 'Logan', 'Mackenzie', 'Parker', 'Peyton'];
  const lastNames = ['Anderson', 'Brown', 'Chen', 'Davis', 'Evans', 'Foster', 'Garcia', 'Hernandez', 'Johnson', 'Kim', 'Lee', 'Martinez', 'Nguyen', 'Patel', 'Quinn', 'Rodriguez', 'Smith', 'Taylor', 'Thomas', 'Wilson'];
  const titles = ['CEO', 'Founder', 'CTO', 'VP of Engineering', 'Marketing Director', 'Head of Product', 'Sales Manager', 'Design Lead', 'Data Scientist', 'Software Engineer'];
  const companies = ['TechCorp', 'InnovateLab', 'StartupX', 'GrowthCo', 'ScaleUp Inc', 'DataDriven', 'CloudFirst', 'AI Ventures', 'FutureTech', 'NextGen Solutions'];
  const locations = ['San Francisco, CA', 'New York, NY', 'Los Angeles, CA', 'Seattle, WA', 'Austin, TX', 'Boston, MA', 'Denver, CO', 'Chicago, IL', 'London, UK', 'Berlin, Germany'];
  const tagsByType: Record<PersonType, string[]> = {
    influencer: ['content creator', 'social media', 'influencer', 'brand ambassador', 'digital creator'],
    client: ['decision maker', 'business owner', 'startup founder', 'enterprise', 'B2B'],
    investor: ['angel investor', 'VC', 'fund manager', 'accelerator', 'seed fund'],
    talent: ['engineer', 'designer', 'product manager', 'developer', 'data scientist'],
    partner: ['strategic partner', 'channel partner', 'reseller', 'integration partner'],
    coach: ['mentor', 'executive coach', 'career coach', 'business coach'],
    distributor: ['distributor', 'wholesaler', 'reseller', 'channel partner', 'VAR'],
    property_leads: ['real estate agent', 'property investor', 'homebuyer', 'seller', 'landlord'],
  };
  const platformList: SocialPlatform[] = ['linkedin', 'twitter', 'instagram', 'github', 'youtube'];
  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const selectedType = type || 'influencer';
    const selectedTags = tagsByType[selectedType];
    const numPlatforms = Math.floor(Math.random() * 3) + 1;
    const shuffledPlatforms = platformList.sort(() => 0.5 - Math.random()).slice(0, numPlatforms);
    return {
      id: `profile-${Date.now()}-${i}`,
      name: `${firstName} ${lastName}`,
      title: titles[Math.floor(Math.random() * titles.length)],
      company: companies[Math.floor(Math.random() * companies.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      bio: 'Passionate professional with expertise in technology and innovation.',
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=200&h=200&fit=crop`,
      platforms: shuffledPlatforms.map(platform => ({
        platform,
        username: `@${firstName.toLowerCase()}${lastName.toLowerCase()}`,
        url: `https://${platform}.com/${firstName.toLowerCase()}${lastName.toLowerCase()}`,
        followers: Math.floor(Math.random() * 500000) + 100,
        following: Math.floor(Math.random() * 5000) + 50,
        posts: Math.floor(Math.random() * 2000) + 10,
        engagement: Math.round((Math.random() * 10 + 0.5) * 100) / 100,
        verified: Math.random() > 0.8
      })),
      tags: selectedTags.slice(0, Math.floor(Math.random() * 3) + 2),
      score: Math.floor(Math.random() * 30) + 70,
      engagement: Math.round((Math.random() * 10 + 1) * 100) / 100,
      followers: Math.floor(Math.random() * 500000) + 1000,
      verified: Math.random() > 0.7,
      lastActive: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
    };
  });
}
