export type PersonType = 'influencer' | 'client' | 'investor' | 'talent' | 'partner' | 'coach' | 'distributor' | 'property_leads';
export type SocialPlatform = 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'linkedin' | 'facebook' | 'discord' | 'github';

export interface PlatformProfile {
  platform: SocialPlatform;
  username: string;
  url: string;
  followers?: number;
  following?: number;
  posts?: number;
  engagement?: number;
  verified?: boolean;
}

export interface Profile {
  id: string;
  name: string;
  title?: string;
  company?: string;
  location?: string;
  bio?: string;
  avatar?: string;
  platforms: PlatformProfile[];
  tags: string[];
  score?: number;
  engagement?: number;
  followers?: number;
  verified?: boolean;
  lastActive?: string;
}

export interface SearchResult {
  profiles: Profile[];
  total: number;
  page: number;
  pageSize: number;
  query: string;
  processingTime: number;
  facets: {
    platforms: Record<string, number>;
    locations: Record<string, number>;
    industries: Record<string, number>;
    companies: Record<string, number>;
  };
}
