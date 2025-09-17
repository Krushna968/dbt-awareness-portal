'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ChartBarIcon,
  UsersIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(12847)

  useEffect(() => {
    // Simulate live visitor count
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const quickLinks = [
    { name: 'About DBT', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Help & Support', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  const contactInfo = [
    { icon: PhoneIcon, label: 'Helpline', value: '1800-11-4445' },
    { icon: EnvelopeIcon, label: 'Email', value: 'npci.dbtl@npci.org.in' },
    { icon: MapPinIcon, label: 'Address', value: 'DBT Mission, Controller of Aid Accounts & Audit, New Delhi' },
  ]

  return (
    <footer className="bg-tech-gray-900 text-white">
      {/* DBT Statistics Banner */}
      <div className="gradient-bg py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <CurrencyRupeeIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">₹586.7 Crore</div>
              <div className="text-sm opacity-90">Total DBT Disbursed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <UsersIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">77+ Schemes</div>
              <div className="text-sm opacity-90">Active DBT Programs</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <ChartBarIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">{visitorCount.toLocaleString()}</div>
              <div className="text-sm opacity-90">Live Visitors Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">DBT</span>
                </div>
                <span className="text-lg font-bold">DBT Sahayak</span>
              </div>
              <p className="text-tech-gray-400 mb-4 max-w-md">
                Empowering Direct Benefit Transfer services for citizens of India. 
                Ensuring transparent and efficient delivery of government subsidies 
                through Aadhaar-enabled bank accounts.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">GOI</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">NIC</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">NPCI</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-tech-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-gov-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-sm text-tech-gray-400">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tech-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-tech-gray-400 mb-2 md:mb-0">
              © {new Date().getFullYear()} DBT Mission - National Informatics Centre. 
              All rights reserved. | Website by NIC - DBT Mission
            </div>
            <div className="text-xs text-tech-gray-500">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
