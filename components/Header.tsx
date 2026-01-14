'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, MapPin, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Spaces', href: '/spaces' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Virtual Office', href: '/virtual-office' },
    {
      name: 'Community',
      href: '/community',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Events & Meetups', href: '/community?tab=events' },
        { name: 'Workshops', href: '/community?tab=workshops' },
        { name: 'Networking', href: '/community?tab=networking' },
        { name: 'Careers', href: '/community?tab=careers' }
      ]
    },
    {
      name: 'Insights',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blogs', href: '/insights/blogs' },
        { name: 'FAQs', href: '/insights/faqs' }
      ]
    },
    { name: 'Locations', href: '/locations' },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const toggleMobileSubmenu = (name: string) => {
    if (mobileSubmenu === name) {
      setMobileSubmenu(null);
    } else {
      setMobileSubmenu(name);
    }
  };

  return (
    <header
      className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 transition-all duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative h-12 w-48">
            <Image
              src="/co-works/logo.png"
              alt="Universe Coworks"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative py-2"
                  >
                    <button
                      className="flex items-center text-sm font-bold tracking-wide transition-colors text-gray-700 hover:text-[#273a96]"
                    >
                      {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 transform origin-top-left ${activeDropdown === link.name ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'
                        }`}
                    >
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#273a96] font-medium border-b border-gray-50 last:border-none"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-bold tracking-wide transition-colors ${pathname === link.href ? 'text-[#273a96]' : 'text-gray-700 hover:text-[#273a96]'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full font-bold text-sm bg-[#273a96] text-white hover:bg-[#1e2a78] transition-all shadow-lg hover:scale-105"
            >
              Book a tour
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[90vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(link.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-gray-800 rounded-lg hover:bg-gray-50"
                    >
                      {link.name}
                      <ChevronDown className={`h-5 w-5 transition-transform ${mobileSubmenu === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSubmenu === link.name && (
                      <div className="pl-6 space-y-1 bg-gray-50 rounded-b-lg mb-2">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#273a96]"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-bold text-gray-800 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <Link
                href="/contact"
                className="block w-full text-center py-4 bg-[#273a96] text-white font-bold rounded-xl shadow-lg hover:bg-[#1e2a78]"
                onClick={() => setIsOpen(false)}
              >
                Book a Free Tour
              </Link>
              <div className="flex justify-center space-x-6 mt-6 text-gray-500">
                <a href="tel:+919876543210" className="flex items-center"><Phone className="h-4 w-4 mr-2" /> Call Us</a>
                <a href="https://maps.google.com" className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Directions</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
