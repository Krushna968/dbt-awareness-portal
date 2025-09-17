'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  BuildingLibraryIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  DocumentArrowDownIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline'

interface BankDetails {
  id: string
  name: string
  branch: string
  address: string
  phone: string
  hours: string
  email: string
  manager: string
  bankType: 'public' | 'private' | 'cooperative'
  image: string
  specialInstructions?: string
}

export default function BankDetailPage() {
  const params = useParams()
  const bankId = params.id as string
  
  const [bankDetails, setBankDetails] = useState<BankDetails | null>(null)
  const [loading, setLoading] = useState(true)

  // Sample bank details data
  const sampleBankDetails: Record<string, BankDetails> = {
    '1': {
      id: '1',
      name: 'State Bank of India',
      branch: 'Main Branch',
      address: '123 MG Road, City Center, Delhi - 110001',
      phone: '+91-11-2345-6789',
      hours: '10:00 AM - 4:00 PM (Monday to Friday), 10:00 AM - 2:00 PM (Saturday)',
      email: 'sbi.main@sbi.co.in',
      manager: 'Mr. Rajesh Kumar',
      bankType: 'public',
      image: 'https://via.placeholder.com/600x300/1e40af/ffffff?text=State+Bank+of+India',
      specialInstructions: 'Please bring all original documents. Aadhaar seeding is available during banking hours.'
    },
    '2': {
      id: '2',
      name: 'Punjab National Bank',
      branch: 'Connaught Place',
      address: '45 Connaught Place, New Delhi - 110001',
      phone: '+91-11-2345-6790',
      hours: '10:00 AM - 4:00 PM (Monday to Friday), 10:00 AM - 2:00 PM (Saturday)',
      email: 'pnb.cp@pnb.co.in',
      manager: 'Ms. Priya Sharma',
      bankType: 'public',
      image: 'https://via.placeholder.com/600x300/dc2626/ffffff?text=Punjab+National+Bank',
    },
    // Add more sample data as needed
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const details = sampleBankDetails[bankId] || sampleBankDetails['1']
      setBankDetails(details)
      setLoading(false)
    }, 1000)
  }, [bankId])

  const linkingSteps = [
    {
      step: 1,
      title: 'Prepare Required Documents',
      description: 'Gather your original Aadhaar card, bank account details, and a printed consent form',
      details: [
        'Original Aadhaar card or e-Aadhaar printout',
        'Bank account number and IFSC code',
        'Account holder\'s signature',
        'Mobile number registered with bank'
      ]
    },
    {
      step: 2,
      title: 'Fill the NPCI Consent Form',
      description: 'Download and complete the Aadhaar seeding consent form (Annexure I)',
      details: [
        'Fill all mandatory fields accurately',
        'Ensure Aadhaar number is correct',
        'Sign the form in the designated area',
        'Double-check bank account details'
      ]
    },
    {
      step: 3,
      title: 'Visit the Bank Branch',
      description: 'Submit the form and documents to the bank manager or designated officer',
      details: [
        'Visit during banking hours',
        'Meet with the branch manager or DBT officer',
        'Submit completed form with documents',
        'Verify information with bank staff'
      ]
    },
    {
      step: 4,
      title: 'Verification & Processing',
      description: 'Bank will verify your details and update the NPCI DBT mapper',
      details: [
        'Bank verifies Aadhaar and account details',
        'Information is updated in NPCI system',
        'You receive confirmation receipt',
        'Process takes 24-48 hours to reflect'
      ]
    }
  ]

  const downloadableForms = [
    {
      name: 'NPCI Aadhaar Seeding Consent Form (Annexure I)',
      description: 'Official consent form required for Aadhaar seeding',
      type: 'PDF',
      size: '245 KB'
    },
    {
      name: 'Aadhaar Seeding Guidelines',
      description: 'Step-by-step guide for Aadhaar linking process',
      type: 'PDF',
      size: '180 KB'
    },
    {
      name: 'Bank-specific Instructions',
      description: 'Special instructions and requirements for this branch',
      type: 'PDF',
      size: '125 KB'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-tech-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gov-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-tech-gray-600">Loading bank details...</p>
        </div>
      </div>
    )
  }

  if (!bankDetails) {
    return (
      <div className="min-h-screen bg-tech-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <ExclamationCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-tech-gray-900 mb-2">Bank Not Found</h2>
          <p className="text-tech-gray-600 mb-6">The requested bank details could not be found.</p>
          <Link href="/bank-locator" className="btn-primary">
            ← Back to Bank Locator
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-tech-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/bank-locator"
            className="inline-flex items-center text-gov-blue-600 hover:text-gov-blue-700 font-medium"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Bank Search
          </Link>
        </div>

        {/* Bank Header */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BuildingLibraryIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-tech-gray-900 mb-2">
                    {bankDetails.name}
                  </h1>
                  <p className="text-xl text-tech-gray-600 mb-4">
                    {bankDetails.branch}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-tech-gray-700">
                      <MapPinIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      {bankDetails.address}
                    </div>
                    <div className="flex items-center text-tech-gray-700">
                      <PhoneIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      {bankDetails.phone}
                    </div>
                    <div className="flex items-center text-tech-gray-700">
                      <ClockIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      {bankDetails.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <img 
                src={bankDetails.image} 
                alt={bankDetails.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          {bankDetails.specialInstructions && (
            <div className="px-8 pb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <ExclamationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Special Instructions</h4>
                    <p className="text-blue-800 text-sm">{bankDetails.specialInstructions}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Step-by-Step Instructions */}
        <div className="card mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-tech-gray-900 mb-6">
              How to Link Your Aadhaar at This Branch
            </h2>
            
            <div className="space-y-8">
              {linkingSteps.map((step, index) => (
                <div key={step.step} className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    {index < linkingSteps.length - 1 && (
                      <div className="w-px h-16 bg-tech-gray-300 mt-4"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-tech-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-tech-gray-700 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-tech-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Downloadable Forms */}
        <div className="card mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-tech-gray-900 mb-6">
              Download Required Forms
            </h2>
            <p className="text-tech-gray-600 mb-6">
              Download and prepare these forms before visiting the bank to save time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloadableForms.map((form, index) => (
                <div key={index} className="border border-tech-gray-200 rounded-lg p-4 hover:border-gov-blue-300 transition-colors">
                  <div className="flex items-center mb-3">
                    <DocumentArrowDownIcon className="w-8 h-8 text-red-600 mr-3" />
                    <div>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                        {form.type}
                      </span>
                      <p className="text-xs text-tech-gray-500 mt-1">{form.size}</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-tech-gray-900 mb-2">
                    {form.name}
                  </h3>
                  <p className="text-sm text-tech-gray-600 mb-4">
                    {form.description}
                  </p>
                  <button className="btn-secondary w-full text-sm py-2">
                    <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                    Download {form.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-tech-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-tech-gray-700">Branch Manager</label>
                  <p className="text-tech-gray-900">{bankDetails.manager}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-tech-gray-700">Phone Number</label>
                  <p className="text-tech-gray-900">{bankDetails.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-tech-gray-700">Email Address</label>
                  <p className="text-tech-gray-900">{bankDetails.email}</p>
                </div>
                <div className="pt-4">
                  <a
                    href={`tel:${bankDetails.phone}`}
                    className="btn-primary w-full text-center"
                  >
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    Call Branch Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-tech-gray-900 mb-4">
                Additional Resources
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <PlayCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-tech-gray-900">Video Tutorial</h4>
                    <p className="text-sm text-tech-gray-600">
                      Watch how to fill the Aadhaar seeding form correctly
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DocumentArrowDownIcon className="w-5 h-5 text-gov-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-tech-gray-900">NPCI Guidelines</h4>
                    <p className="text-sm text-tech-gray-600">
                      Official documentation from NPCI on Aadhaar seeding
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <PhoneIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-tech-gray-900">NPCI Helpline</h4>
                    <p className="text-sm text-tech-gray-600">
                      Call 1800-11-4445 for technical support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="card">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-tech-gray-900 mb-4">
                Ready to Visit This Branch?
              </h3>
              <p className="text-tech-gray-600 mb-6 max-w-2xl mx-auto">
                Make sure you have all required documents and forms ready. 
                Contact the branch if you have any questions before your visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  Get Directions
                </button>
                <Link href="/check-status" className="btn-secondary">
                  Check My DBT Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
