'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, MapPin, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { usePopup } from '@/context/PopupContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { openPopup } = usePopup();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Solutions',
      href: '/best-workspace-solutions-in-trichy',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Workspace Solutions', href: '/best-workspace-solutions-in-trichy' },
        { name: 'Virtual Office', href: '/virtual-office-in-trichy' },
        { name: 'Coworking Space', href: '/coworking-space-trichy' }
      ]
    },
    {
      name: 'Services',
      href: '/spaces',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Hot Desks', href: '/hot-desk-in-trichy' },
        { name: 'Dedicated Desks', href: '/affordable-dedicated-desk-in-trichy' },
        { name: 'Private Offices', href: '/affordable-private-office-space-in-trichy' },
        { name: 'Meeting Rooms', href: '/meeting-room-in-trichy' },
        { name: 'Training Rooms', href: '/affordable-training-room-in-trichy' },
        { name: 'Managed Office Space', href: '/managed-office-space-in-trichy' }
      ]
    },
    { name: 'Blog', href: '/insights/blogs' },
    { name: 'FAQ', href: '/frequently-asked-questions' },
    { name: 'Locations', href: '/locations' },
    // { name: 'Connect', href: '/contact' }
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
      className="fixed w-full z-50 bg-white backdrop-blur-md shadow-sm border-b border-gray-100 py-3 transition-all duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative h-12 w-48">
            <Image
              src="/logo.png"
              alt="Universe Coworks"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative py-2"
                  >
                    <button
                      className="flex items-center text-[13px] font-bold tracking-wide transition-colors text-gray-700 hover:text-[#273a96]"
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
                    className={`text-[13px] font-bold tracking-wide transition-colors ${pathname === link.href ? 'text-[#273a96]' : 'text-gray-700 hover:text-[#273a96]'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full font-bold text-sm bg-[#273a96] text-white hover:bg-[#1e2a78] transition-all shadow-lg hover:scale-105 whitespace-nowrap"
            >
              Book a tour
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
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
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[90vh] overflow-y-auto">
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
              <button
                onClick={() => {
                  setIsOpen(false);
                  openPopup();
                }}
                className="block w-full text-center py-4 bg-[#273a96] text-white font-bold rounded-xl shadow-lg hover:bg-[#1e2a78]"
              >
                Book a Free Tour
              </button>
              <div className="flex justify-center space-x-6 mt-6 text-gray-500">
                <a href="tel:+919789913368" className="flex items-center"><Phone className="h-4 w-4 mr-2" /> Call Us</a>
                <a href="https://maps.google.com" className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Directions</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
