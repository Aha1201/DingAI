import Link from 'next/link';
import { SOCIAL_PLATFORMS, EMAIL_TOOLS, COMPANY_TOOLS, OTHER_TOOLS } from '@/lib/constants';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools Directory</h1>
          <p className="text-lg text-gray-600 max-w-2xl">Powerful AI-powered tools for social media analysis, email outreach, and business research.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"><span className="text-3xl">📱</span> Social Media Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SOCIAL_PLATFORMS).map(([id, platform]) => (
              <div key={id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-4 border-b flex items-center gap-3" style={{ backgroundColor: platform.bgColor }}>
                  <span className="text-3xl">{platform.icon}</span>
                  <div><h3 className="font-bold text-gray-900">{platform.name}</h3><p className="text-sm text-gray-500">{platform.tools.length} tools</p></div>
                </div>
                <div className="p-4 space-y-2">
                  {platform.tools.map((tool) => (
                    <Link key={tool.id} href={`/tools/${id}/${tool.id}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span>{tool.icon}</span><span className="text-sm text-gray-700">{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"><span className="text-3xl">📧</span> Email Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMAIL_TOOLS.map((tool) => (
              <Link key={tool.id} href={`/tools/email/${tool.id}`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md hover:border-indigo-200 transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <div><h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{tool.name}</h3><p className="text-sm text-gray-600 mt-1">{tool.description}</p></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"><span className="text-3xl">🏢</span> Company Research Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_TOOLS.map((tool) => (
              <Link key={tool.id} href={`/tools/company/${tool.id}`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md hover:border-indigo-200 transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <div><h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{tool.name}</h3><p className="text-sm text-gray-600 mt-1">{tool.description}</p></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"><span className="text-3xl">🔧</span> Other Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_TOOLS.map((tool) => (
              <Link key={tool.id} href={`/tools/other/${tool.id}`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md hover:border-indigo-200 transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <div><h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{tool.name}</h3><p className="text-sm text-gray-600 mt-1">{tool.description}</p></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
