import Link from 'next/link';
import { Search, Users, Target, TrendingUp, Zap, Shield, ArrowRight, Star } from 'lucide-react';
import { PERSON_TYPES, FEATURED_PROFILES } from '@/lib/constants';
import ProfileCard from '@/components/search/ProfileCard';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              <span>AI-Powered People Search Engine</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Find Influencers, B2B Leads, Investors, Talent & Partners
              <span className="block text-yellow-300">Instantly with AI</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Search 50M+ profiles across LinkedIn, Twitter, GitHub & 100+ sources. Our AI understands your intent and delivers精准 results in seconds.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" placeholder="Describe the people you're looking for..." className="w-full pl-12 pr-4 py-4 text-gray-800 bg-gray-50 rounded-xl border-2 border-transparent focus:border-indigo-300 focus:bg-white outline-none text-lg" />
                  </div>
                  <Link href="/search" className="btn-primary px-8 py-4 text-lg">Search</Link>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Los Angeles fitness creators', 'AI startup investors', 'Senior UX designers', 'E-commerce founders'].map((example) => (
                  <Link key={example} href={`/search?q=${encodeURIComponent(example)}`} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors backdrop-blur-sm">
                    {example} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ label: 'Profiles', value: '50M+' }, { label: 'Data Sources', value: '100+' }, { label: 'Search Speed', value: '<1s' }, { label: 'Accuracy', value: '95%' }].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Any Type of People</h2>
            <p className="text-lg text-gray-600">Whether you're looking for influencers, clients, investors, or talent - DingAI has you covered.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(Object.entries(PERSON_TYPES) as [string, typeof PERSON_TYPES[keyof typeof PERSON_TYPES]][]).map(([type, info]) => (
              <Link key={type} href={`/search?type=${type}`} className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${info.color}20` }}>{info.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600">{info.label.replace('Find ', '')}</h3>
                <p className="text-sm text-gray-500">{info.examples[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Powerful Features for Modern Teams</h2>
              <div className="space-y-6">
                {[
                  { icon: Target, title: 'AI-Powered Search', desc: "Simply describe what you're looking for in plain English. Our AI understands context and intent." },
                  { icon: Users, title: 'Multi-Platform Coverage', desc: 'Search across LinkedIn, Twitter, Instagram, GitHub, and 100+ other data sources simultaneously.' },
                  { icon: TrendingUp, title: 'Advanced Analytics', desc: 'Get detailed insights on engagement rates, audience quality, and authenticity scores.' },
                  { icon: Shield, title: 'Data Privacy Compliant', desc: 'All data is sourced ethically and complies with GDPR, CCPA, and other privacy regulations.' },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0"><f.icon className="w-6 h-6 text-indigo-600" /></div>
                    <div><h3 className="font-bold text-gray-900 mb-1">{f.title}</h3><p className="text-gray-600">{f.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">AI</div>
                  <div><div className="font-bold">Search Results</div><div className="text-sm text-gray-500">Found 1,234 profiles</div></div>
                </div>
                <div className="space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div className="flex-1"><div className="h-4 bg-gray-200 rounded w-24 mb-1" /><div className="h-3 bg-gray-100 rounded w-32" /></div>
                      <div className="text-sm font-semibold text-green-600">{90 + i * 2}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div><h2 className="text-3xl font-bold text-gray-900">Featured Profiles</h2><p className="text-gray-600 mt-2">Discover notable people on DingAI</p></div>
            <Link href="/search" className="btn-secondary">View All <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PROFILES.map(p => <ProfileCard key={p.id} profile={p} />)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Big Connection?</h2>
          <p className="text-xl text-white/90 mb-8">Join thousands of recruiters, founders, and marketers who trust DingAI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">Start for free <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">Request Demo</Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/70"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><span>4.9/5 from 2,000+ reviews</span></div>
        </div>
      </section>
    </div>
  );
}
