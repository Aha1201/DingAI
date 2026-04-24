'use client'
import { useState } from 'react'
import { Mail, User, Building2, Target, Sparkles, Loader2, Copy, Check } from 'lucide-react'

export default function ColdEmailGeneratorPage() {
  const [recipientName, setRecipientName] = useState('')
  const [recipientCompany, setRecipientCompany] = useState('')
  const [purpose, setPurpose] = useState('')
  const [tone, setTone] = useState<'formal' | 'casual' | 'friendly'>('formal')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ subject: string; body: string } | null>(null)
  const [copied, setCopied] = useState<'subject' | 'body' | null>(null)

  const handleGenerate = async () => {
    if (!recipientName || !purpose) return
    setLoading(true)
    try {
      const response = await fetch('/api/tools/generate-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipientName, recipientCompany, purpose, tone })
      })
      const data = await response.json()
      if (data.success) setResult(data.data)
    } catch (error) { console.error('Error:', error) }
    finally { setLoading(false) }
  }

  const copyToClipboard = (text: string, type: 'subject' | 'body') => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-4">
            <span className="text-3xl">📧</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Cold Email Generator</h1>
          <p className="text-gray-600">Generate personalized cold emails with AI</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="font-bold text-gray-900 mb-6">Email Details</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><User className="w-4 h-4" /> Recipient Name *</label>
                <input type="text" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} placeholder="e.g. John Smith" className="input-field" />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><Building2 className="w-4 h-4" /> Company</label>
                <input type="text" value={recipientCompany} onChange={(e) => setRecipientCompany(e.target.value)} placeholder="e.g. TechCorp" className="input-field" />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"><Target className="w-4 h-4" /> Purpose *</label>
                <textarea value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="e.g. Introduce our AI-powered marketing platform" className="input-field min-h-[100px]" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tone</label>
                <div className="flex gap-2">
                  {(['formal', 'casual', 'friendly'] as const).map((t) => (
                    <button key={t} onClick={() => setTone(t)} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tone === t ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleGenerate} disabled={loading || !recipientName || !purpose} className="w-full btn-primary py-3">
                {loading ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Generating...</> : <><Sparkles className="w-5 h-5 mr-2" /> Generate Email</>}
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="font-bold text-gray-900 mb-6">Generated Email</h2>
            {result ? (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Subject Line</label>
                    <button onClick={() => copyToClipboard(result.subject, 'subject')} className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      {copied === 'subject' ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
                    </button>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm font-medium">{result.subject}</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Email Body</label>
                    <button onClick={() => copyToClipboard(result.body, 'body')} className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      {copied === 'body' ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap">{result.body}</div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <Mail className="w-12 h-12 mb-4" /><p>Fill in the details and click Generate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
