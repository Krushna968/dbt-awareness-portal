'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  MapPinIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Check DBT Status', href: '/check-status', icon: MagnifyingGlassIcon },
  { name: 'Aadhaar vs DBT Info', href: '/info', icon: InformationCircleIcon },
  { name: 'Find Bank', href: '/bank-locator', icon: MapPinIcon },
  { name: 'Sign In', href: '/signin', icon: UserIcon },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-tech-gray-200 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DBT</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">DBT Sahayak</span>
                <p className="text-xs text-tech-gray-600">Government of India</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-gov-blue-600 bg-gov-blue-50 shadow-sm'
                      : 'text-tech-gray-700 hover:text-gov-blue-600 hover:bg-gov-blue-50'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-tech-gray-700 hover:text-gov-blue-600 hover:bg-tech-gray-100 focus:outline-none focus:ring-2 focus:ring-gov-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-tech-gray-200">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${
                      isActive
                        ? 'text-gov-blue-600 bg-gov-blue-50'
                        : 'text-tech-gray-700 hover:text-gov-blue-600 hover:bg-gov-blue-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
