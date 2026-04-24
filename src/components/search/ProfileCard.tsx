import { Profile } from '@/lib/types';
import { formatNumber } from '@/lib/utils';

interface ProfileCardProps { profile: Profile; }

export default function ProfileCard({ profile }: ProfileCardProps) {
  const getPlatformIcon = (platform: string) => {
    const icons: Record<string, string> = { linkedin: '💼', twitter: '🐦', instagram: '📸', github: '💻', tiktok: '🎵', youtube: '▶️' };
    return icons[platform] || '🔗';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full object-cover" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            {profile.verified && <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 truncate">{profile.name}</h3>
            {profile.title && <p className="text-sm text-gray-500 truncate">{profile.title}</p>}
            {profile.company && <p className="text-sm text-indigo-600 truncate">{profile.company}</p>}
          </div>
          {profile.score && (
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${profile.score >= 90 ? 'bg-green-100 text-green-700' : profile.score >= 80 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
              {profile.score}
            </div>
          )}
        </div>
        {profile.location && <div className="mt-3 flex items-center gap-1 text-sm text-gray-500"><span>📍</span><span>{profile.location}</span></div>}
        {profile.bio && <p className="mt-3 text-sm text-gray-600 line-clamp-2">{profile.bio}</p>}
        {profile.tags && profile.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.tags.slice(0, 4).map(tag => (
              <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className="border-t border-gray-100 bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {profile.platforms.map(p => (
              <div key={p.platform} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm" title={`${p.platform}: @${p.username}`}>
                {getPlatformIcon(p.platform)}
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-sm">
            {profile.followers && <div className="text-gray-600"><span className="font-semibold">{formatNumber(profile.followers)}</span><span className="text-gray-400 ml-1">followers</span></div>}
            {profile.engagement && <div className="text-gray-600"><span className="font-semibold">{profile.engagement}%</span><span className="text-gray-400 ml-1">engagement</span></div>}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 p-4 flex gap-2">
        <button className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">View Profile</button>
        <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm rounded-lg transition-colors">Save</button>
      </div>
    </div>
  );
}
