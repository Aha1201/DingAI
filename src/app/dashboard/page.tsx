'use client'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Search, Zap, Users, BarChart3, LogOut, Loader2 } from 'lucide-react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {session?.user?.name || 'User'}!</p>
          </div>
          <button onClick={() => signOut({ callbackUrl: '/' })} className="btn-secondary flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Credits', value: '100', icon: Zap, color: 'text-yellow-600 bg-yellow-50' },
            { label: 'Searches', value: '0', icon: Search, color: 'text-blue-600 bg-blue-50' },
            { label: 'Saved Profiles', value: '0', icon: Users, color: 'text-green-600 bg-green-50' },
            { label: 'Exports', value: '0', icon: BarChart3, color: 'text-purple-600 bg-purple-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/search" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                <Search className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600">Start Searching</h3>
                <p className="text-sm text-gray-600">Find influencers, leads, investors, and talent</p>
              </div>
            </div>
          </Link>
          <Link href="/tools" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Explore Tools</h3>
                <p className="text-sm text-gray-600">Social media analysis, email tools, and more</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
