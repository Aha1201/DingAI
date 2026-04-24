import Link from 'next/link';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
              <span className="text-xl font-bold text-white">DingAI</span>
            </Link>
            <p className="text-sm">AI-powered people search engine. Find influencers, B2B leads, investors, and talent instantly.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/search?type=influencer" className="hover:text-white transition-colors">Find Influencer</Link></li>
              <li><Link href="/search?type=client" className="hover:text-white transition-colors">Find Client</Link></li>
              <li><Link href="/search?type=investor" className="hover:text-white transition-colors">Find Investor</Link></li>
              <li><Link href="/search?type=talent" className="hover:text-white transition-colors">Find Talent</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools" className="hover:text-white transition-colors">Instagram Tools</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">TikTok Tools</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Twitter/X Tools</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Email Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} DingAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
