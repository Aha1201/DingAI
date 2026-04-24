'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">DingAI</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">Search</Link>
            <Link href="/tools" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">Tools</Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="btn-secondary hidden sm:flex">Sign In</Link>
            <Link href="/signup" className="btn-primary">Start for free</Link>
            <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <Link href="/search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Search</Link>
            <Link href="/tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
            <Link href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
