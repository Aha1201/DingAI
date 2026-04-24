'use client';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Grid, List, Loader2 } from 'lucide-react';
import { Profile, SearchResult, PersonType } from '@/lib/types';
import { PERSON_TYPES, FEATURED_PROFILES } from '@/lib/constants';
import ProfileCard from '@/components/search/ProfileCard';
import { cn, formatNumber } from '@/lib/utils';

function SearchContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selectedType, setSelectedType] = useState<PersonType | null>((searchParams.get('type') as PersonType) || null);
  const [results, setResults] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTime, setSearchTime] = useState<number | null>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSearch = async () => {
    if (!query.trim() && !selectedType) return;
    setLoading(true);
    const startTime = Date.now();
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, type: selectedType, page: 1, pageSize: 20 })
      });
      const data: SearchResult = await response.json();
      setResults(data.profiles);
      setTotalResults(data.total);
      setSearchTime(Date.now() - startTime);
    } catch (error) { console.error('Search error:', error); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">AI People Search</h1>
          <div className="bg-gray-50 rounded-2xl p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder="Describe the people you're looking for..." className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none" />
              </div>
              <button onClick={handleSearch} disabled={loading} className="btn-primary px-8">
                {loading ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Searching...</> : 'Search'}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {(Object.entries(PERSON_TYPES) as [PersonType, typeof PERSON_TYPES[PersonType]][]).map(([type, info]) => (
              <button key={type} onClick={() => setSelectedType(type)} className={cn('px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2', selectedType === type ? 'bg-indigo-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:border-indigo-300')}>
                <span>{info.icon}</span>{info.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
            <p className="text-gray-600">Searching 50M+ profiles...</p>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <div><h2 className="text-xl font-bold">{formatNumber(totalResults)} Results</h2>{searchTime && <p className="text-sm text-gray-500">Found in {searchTime}ms</p>}</div>
              <div className="flex border rounded-lg overflow-hidden">
                <button onClick={() => setViewMode('grid')} className={cn('p-2', viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-gray-500')}><Grid className="w-5 h-5" /></button>
                <button onClick={() => setViewMode('list')} className={cn('p-2', viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-gray-500')}><List className="w-5 h-5" /></button>
              </div>
            </div>
            <div className={cn('grid gap-6', viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1')}>
              {results.map(profile => <ProfileCard key={profile.id} profile={profile} />)}
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Start Your Search</h3>
            <p className="text-gray-500 mb-6">Describe what you're looking for or select a category above.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {FEATURED_PROFILES.map(p => <ProfileCard key={p.id} profile={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-indigo-600" /></div>}><SearchContent /></Suspense>;
}
