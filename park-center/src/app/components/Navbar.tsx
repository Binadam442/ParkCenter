import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Cen-Sad Park</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/facilities/football" className="hover:text-amber-400 transition">Football</Link>
          <Link href="/cafe" className="hover:text-amber-400 transition">Cafe</Link>
          <Link href="/car-wash" className="hover:text-amber-400 transition">Car Wash</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-green-800 mt-2 py-2 px-4 space-y-3">
          <Link 
            href="#facilities" 
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            facilities
          </Link>
          <Link 
            href="#cafe" 
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            cafe
          </Link>
          <Link 
            href="#car-wash" 
            className="block hover:text-amber-400 transition"
            onClick={() => setIsOpen(false)}
          >
            car wash
          </Link>
        </div>
      )}
    </nav>
  );
}