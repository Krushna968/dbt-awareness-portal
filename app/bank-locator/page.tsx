'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  MapPinIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PhoneIcon,
  ClockIcon,
  ArrowRightIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'

interface Bank {
  id: string
  name: string
  branch: string
  address: string
  distance: number
  phone: string
  hours: string
  bankType: 'public' | 'private' | 'cooperative'
  aadhaarEnabled: boolean
  lat: number
  lng: number
}

export default function BankLocatorPage() {
  const [searchLocation, setSearchLocation] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [bankTypeFilter, setBankTypeFilter] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<Bank[]>([])

  // Sample bank data
  const sampleBanks: Bank[] = [
    {
      id: '1',
      name: 'State Bank of India',
      branch: 'Main Branch',
      address: '123 MG Road, City Center, Delhi - 110001',
      distance: 0.8,
      phone: '+91-11-2345-6789',
      hours: '10:00 AM - 4:00 PM',
      bankType: 'public',
      aadhaarEnabled: true,
      lat: 28.6139,
      lng: 77.2090
    },
    {
      id: '2',
      name: 'Punjab National Bank',
      branch: 'Connaught Place',
      address: '45 Connaught Place, New Delhi - 110001',
      distance: 1.2,
      phone: '+91-11-2345-6790',
      hours: '10:00 AM - 4:00 PM',
      bankType: 'public',
      aadhaarEnabled: true,
      lat: 28.6315,
      lng: 77.2167
    },
    {
      id: '3',
      name: 'HDFC Bank',
      branch: 'Karol Bagh',
      address: '78 Karol Bagh, New Delhi - 110005',
      distance: 2.1,
      phone: '+91-11-2345-6791',
      hours: '9:30 AM - 6:00 PM',
      bankType: 'private',
      aadhaarEnabled: true,
      lat: 28.6517,
      lng: 77.1910
    },
    {
      id: '4',
      name: 'Bank of Baroda',
      branch: 'Lajpat Nagar',
      address: '56 Lajpat Nagar, New Delhi - 110024',
      distance: 3.5,
      phone: '+91-11-2345-6792',
      hours: '10:00 AM - 4:00 PM',
      bankType: 'public',
      aadhaarEnabled: true,
      lat: 28.5677,
      lng: 77.2436
    }
  ]

  const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan']
  const districts = ['Central Delhi', 'South Delhi', 'North Delhi', 'East Delhi', 'West Delhi']

  const handleSearch = async () => {
    setIsSearching(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Filter banks based on criteria
    let filteredBanks = sampleBanks
    
    if (bankTypeFilter !== 'all') {
      filteredBanks = filteredBanks.filter(bank => bank.bankType === bankTypeFilter)
    }
    
    // Sort by distance
    filteredBanks.sort((a, b) => a.distance - b.distance)
    
    setSearchResults(filteredBanks)
    setIsSearching(false)
  }

  const getBankTypeColor = (type: string) => {
    switch (type) {
      case 'public': return 'bg-green-100 text-green-800'
      case 'private': return 'bg-blue-100 text-blue-800'
      case 'cooperative': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-tech-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPinIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Find Nearby Banks
          </h1>
          <p className="text-xl text-tech-gray-600 max-w-3xl mx-auto">
            Locate Aadhaar-enabled bank branches near you for seamless 
            Aadhaar seeding and DBT registration.
          </p>
        </div>

        {/* Search Section */}
        <div className="card mb-8">
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
              {/* Location Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-tech-gray-700 mb-2">
                  Search Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Enter city, area, or pincode"
                    className="w-full px-4 py-3 pl-10 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                  />
                  <MagnifyingGlassIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* State Dropdown */}
              <div>
                <label className="block text-sm font-medium text-tech-gray-700 mb-2">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* District Dropdown */}
              <div>
                <label className="block text-sm font-medium text-tech-gray-700 mb-2">
                  District
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full px-4 py-3 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                  disabled={!selectedState}
                >
                  <option value="">Select District</option>
                  {districts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filters Toggle */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-gov-blue-600 hover:text-gov-blue-700 font-medium"
              >
                <FunnelIcon className="w-4 h-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Searching...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
                    Find Banks
                  </div>
                )}
              </button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="bg-tech-gray-50 rounded-lg p-4 border">
                <h3 className="font-medium text-tech-gray-900 mb-3">Filter Options</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-tech-gray-700 mb-2">
                      Bank Type
                    </label>
                    <select
                      value={bankTypeFilter}
                      onChange={(e) => setBankTypeFilter(e.target.value)}
                      className="w-full px-3 py-2 border border-tech-gray-300 rounded-md focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Banks</option>
                      <option value="public">Public Sector</option>
                      <option value="private">Private Sector</option>
                      <option value="cooperative">Cooperative Banks</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-tech-gray-700 mb-2">
                      Distance
                    </label>
                    <select className="w-full px-3 py-2 border border-tech-gray-300 rounded-md focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent">
                      <option>Within 5 km</option>
                      <option>Within 10 km</option>
                      <option>Within 25 km</option>
                      <option>Any distance</option>
                    </select>
                  </div>
                  
                  <div className="flex items-end">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-tech-gray-300 text-gov-blue-600 focus:ring-gov-blue-500" defaultChecked />
                      <span className="ml-2 text-sm text-tech-gray-700">Aadhaar Enabled Only</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="card h-[600px]">
              <div className="p-4 border-b border-tech-gray-200">
                <h2 className="text-xl font-semibold text-tech-gray-900">
                  Bank Locations Map
                </h2>
                <p className="text-sm text-tech-gray-600">
                  Interactive map showing nearby Aadhaar-enabled banks
                </p>
              </div>
              
              {/* Map Placeholder */}
              <div className="relative flex-1 bg-gradient-to-br from-gov-blue-50 to-gov-purple-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPinIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-tech-gray-900 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-tech-gray-600 mb-4 max-w-md">
                    Map integration would show bank locations with markers. 
                    Use Google Maps API or OpenStreetMap for production.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      Public Banks
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      Private Banks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div>
            <div className="sticky top-24">
              <div className="card">
                <div className="p-4 border-b border-tech-gray-200">
                  <h2 className="text-xl font-semibold text-tech-gray-900">
                    Nearby Banks
                  </h2>
                  <p className="text-sm text-tech-gray-600">
                    {searchResults.length > 0 
                      ? `Found ${searchResults.length} banks near you`
                      : 'Use the search above to find banks'
                    }
                  </p>
                </div>
                
                <div className="max-h-[500px] overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-tech-gray-200">
                      {searchResults.map((bank) => (
                        <div key={bank.id} className="p-4 hover:bg-tech-gray-50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-tech-gray-900">
                                {bank.name}
                              </h3>
                              <p className="text-sm text-tech-gray-600">
                                {bank.branch}
                              </p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBankTypeColor(bank.bankType)}`}>
                              {bank.bankType === 'public' ? 'Public' : bank.bankType === 'private' ? 'Private' : 'Cooperative'}
                            </span>
                          </div>
                          
                          <p className="text-sm text-tech-gray-700 mb-2">
                            {bank.address}
                          </p>
                          
                          <div className="flex items-center text-xs text-tech-gray-600 mb-3 space-x-4">
                            <div className="flex items-center">
                              <MapPinIcon className="w-3 h-3 mr-1" />
                              {bank.distance} km away
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className="w-3 h-3 mr-1" />
                              {bank.hours}
                            </div>
                          </div>
                          
                          {bank.aadhaarEnabled && (
                            <div className="flex items-center text-xs text-green-600 mb-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              Aadhaar Seeding Available
                            </div>
                          )}
                          
                          <div className="flex flex-col gap-2">
                            <Link
                              href={`/bank-locator/bank/${bank.id}`}
                              className="btn-primary text-xs py-2 px-3 text-center"
                            >
                              Link Aadhaar at this Branch
                              <ArrowRightIcon className="w-3 h-3 ml-1" />
                            </Link>
                            <a
                              href={`tel:${bank.phone}`}
                              className="btn-secondary text-xs py-2 px-3 text-center"
                            >
                              <PhoneIcon className="w-3 h-3 mr-1" />
                              Call Branch
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <BuildingLibraryIcon className="w-16 h-16 text-tech-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-tech-gray-900 mb-2">
                        No banks found yet
                      </h3>
                      <p className="text-tech-gray-600 text-sm">
                        Enter your location and click "Find Banks" to see nearby branches
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12">
          <div className="card">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-tech-gray-900 mb-4">
                Need Help Finding a Bank?
              </h3>
              <p className="text-tech-gray-600 mb-6 max-w-2xl mx-auto">
                Use our bank locator to find the nearest Aadhaar-enabled branches. 
                Download consent forms or get detailed instructions before your visit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BuildingLibraryIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-tech-gray-900 mb-1">All Major Banks</h4>
                  <p className="text-sm text-tech-gray-600">
                    Find public, private, and cooperative banks
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ClockIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-tech-gray-900 mb-1">Current Hours</h4>
                  <p className="text-sm text-tech-gray-600">
                    Updated working hours and contact details
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPinIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-tech-gray-900 mb-1">Exact Locations</h4>
                  <p className="text-sm text-tech-gray-600">
                    Get directions to the nearest branch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
