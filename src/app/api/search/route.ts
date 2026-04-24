import { NextRequest, NextResponse } from 'next/server';
import { generateMockProfiles } from '@/lib/constants';
import { SearchResult } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, type, page = 1, pageSize = 20 } = body;

    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 700));

    const profiles = generateMockProfiles(pageSize * 3, type);
    let filteredProfiles = profiles;
    
    if (query) {
      const searchTerms = query.toLowerCase().split(' ');
      filteredProfiles = filteredProfiles.filter(profile => {
        const searchText = [profile.name, profile.title, profile.company, profile.location, profile.bio, ...profile.tags].join(' ').toLowerCase();
        return searchTerms.some(term => searchText.includes(term));
      });
    }

    filteredProfiles.sort((a, b) => (b.score || 0) - (a.score || 0));

    const total = filteredProfiles.length;
    const startIndex = (page - 1) * pageSize;
    const paginatedProfiles = filteredProfiles.slice(startIndex, startIndex + pageSize);

    const platforms: Record<string, number> = {};
    const locations: Record<string, number> = {};
    filteredProfiles.forEach(profile => {
      profile.platforms.forEach(p => { platforms[p.platform] = (platforms[p.platform] || 0) + 1; });
      if (profile.location) { locations[profile.location] = (locations[profile.location] || 0) + 1; }
    });

    const response: SearchResult = {
      profiles: paginatedProfiles,
      total,
      page,
      pageSize,
      query,
      processingTime: Math.floor(Math.random() * 500) + 100,
      facets: { platforms, locations, industries: {}, companies: {} }
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed', success: false }, { status: 500 });
  }
}
