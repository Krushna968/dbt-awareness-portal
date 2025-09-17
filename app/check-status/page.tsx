'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  MapPinIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

interface FormData {
  aadhaarNumber: string
  bankAccount: string
  captcha: string
}

interface StatusResult {
  isLinked: boolean
  message: string
  schemes?: string[]
}

export default function CheckStatusPage() {
  const [formData, setFormData] = useState<FormData>({
    aadhaarNumber: '',
    bankAccount: '',
    captcha: ''
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<StatusResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Random result simulation
    const isLinked = Math.random() > 0.5
    
    if (isLinked) {
      setResult({
        isLinked: true,
        message: 'Congratulations! Your Aadhaar is already seeded in the DBT mapper and you are set to receive benefits.',
        schemes: ['Pradhan Mantri Gramin Awas Yojana', 'LPG Subsidy', 'National Social Assistance Programme', 'Scholarship Schemes']
      })
    } else {
      setResult({
        isLinked: false,
        message: 'Your Aadhaar is not linked for DBT benefits. Follow the steps below to link your Aadhaar.'
      })
    }
    
    setLoading(false)
    setShowResult(true)
  }

  const checkAgain = () => {
    setShowResult(false)
    setResult(null)
    setFormData({
      aadhaarNumber: '',
      bankAccount: '',
      captcha: ''
    })
  }

  const nextSteps = [
    {
      title: 'How to Link',
      description: 'Get step-by-step instructions on linking your Aadhaar',
      href: '/info',
      icon: DocumentTextIcon
    },
    {
      title: 'Find Nearby Bank',
      description: 'Locate banks for Aadhaar seeding in your area',
      href: '/bank-locator',
      icon: MapPinIcon
    }
  ]

  return (
    <div className="min-h-screen bg-tech-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MagnifyingGlassIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Check Your DBT Status
          </h1>
          <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
            Enter your Aadhaar and bank details to verify if you're eligible 
            to receive Direct Benefit Transfer payments.
          </p>
        </div>

        {!showResult ? (
          /* Status Check Form */
          <div className="card max-w-2xl mx-auto">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-tech-gray-900 mb-6 text-center">
                Enter Aadhaar and Bank Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Aadhaar Number *
                  </label>
                  <input
                    type="text"
                    id="aadhaarNumber"
                    name="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={handleInputChange}
                    placeholder="Enter 12-digit Aadhaar number"
                    className="w-full px-4 py-3 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                    maxLength={12}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="bankAccount" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Bank Account Number *
                  </label>
                  <input
                    type="text"
                    id="bankAccount"
                    name="bankAccount"
                    value={formData.bankAccount}
                    onChange={handleInputChange}
                    placeholder="Enter bank account number"
                    className="w-full px-4 py-3 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="captcha" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Verification Code *
                  </label>
                  <div className="flex space-x-4">
                    <div className="bg-tech-gray-100 px-4 py-3 rounded-lg border text-center font-mono text-lg flex-shrink-0">
                      AB12C3
                    </div>
                    <input
                      type="text"
                      id="captcha"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleInputChange}
                      placeholder="Enter the code shown"
                      className="flex-1 px-4 py-3 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Checking Status...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                      Check DBT Status
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Results Display */
          <div className="space-y-8">
            {/* Status Result */}
            <div className={`card max-w-2xl mx-auto ${
              result?.isLinked ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
            }`}>
              <div className="p-8 text-center">
                {result?.isLinked ? (
                  <div>
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      DBT Status: Linked ✓
                    </h3>
                    <p className="text-green-700 mb-6">
                      {result.message}
                    </p>
                    
                    {result.schemes && (
                      <div className="bg-white rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-tech-gray-900 mb-3">
                          Available DBT Schemes for You:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {result.schemes.map((scheme, index) => (
                            <div key={index} className="text-sm text-tech-gray-700 bg-tech-gray-50 rounded px-3 py-2">
                              {scheme}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <ExclamationTriangleIcon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                      DBT Status: Not Linked
                    </h3>
                    <p className="text-yellow-700 mb-6">
                      {result?.message}
                    </p>
                  </div>
                )}
                
                <button
                  onClick={checkAgain}
                  className="btn-secondary"
                >
                  Check Again
                </button>
              </div>
            </div>

            {/* Next Steps (for not linked status) */}
            {!result?.isLinked && (
              <div className="card max-w-4xl mx-auto">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-tech-gray-900 mb-6 text-center">
                    Next Steps to Link Your Aadhaar
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {nextSteps.map((step, index) => (
                      <Link
                        key={index}
                        href={step.href}
                        className="flex items-center p-6 border border-tech-gray-200 rounded-lg hover:border-gov-blue-300 hover:bg-gov-blue-50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-gov-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gov-blue-200 transition-colors">
                          <step.icon className="w-6 h-6 text-gov-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-tech-gray-900 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-sm text-tech-gray-600">
                            {step.description}
                          </p>
                        </div>
                        <ArrowRightIcon className="w-5 h-5 text-tech-gray-400 group-hover:text-gov-blue-600 transition-colors" />
                      </Link>
                    ))}
                  </div>

                  {/* Linking Process Steps */}
                  <div className="bg-tech-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-tech-gray-900 mb-4 text-center">
                      Quick Linking Guide
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gov-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                          1
                        </div>
                        <p className="text-sm text-tech-gray-700">
                          Visit any bank branch with your Aadhaar and account details
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gov-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                          2
                        </div>
                        <p className="text-sm text-tech-gray-700">
                          Submit the NPCI consent form (Annexure I)
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gov-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                          3
                        </div>
                        <p className="text-sm text-tech-gray-700">
                          Your Aadhaar will be updated in NPCI DBT mapper
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Why Link Section (for linked status) */}
            {result?.isLinked && (
              <div className="card max-w-4xl mx-auto">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-tech-gray-900 mb-6 text-center">
                    Benefits You Can Access
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheckIcon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-tech-gray-900 mb-2">Secure Transfers</h4>
                      <p className="text-sm text-tech-gray-600">
                        Direct and secure transfer of government subsidies to your bank account
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BanknotesIcon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-tech-gray-900 mb-2">Multiple Schemes</h4>
                      <p className="text-sm text-tech-gray-600">
                        Access to 77+ government schemes including pensions, subsidies, and scholarships
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserGroupIcon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-tech-gray-900 mb-2">Family Benefits</h4>
                      <p className="text-sm text-tech-gray-600">
                        Ensure all family members are linked for comprehensive benefit coverage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="card max-w-2xl mx-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-tech-gray-900 mb-3">
                Need Help?
              </h3>
              <p className="text-tech-gray-600 mb-4">
                Remember: Only your bank can update the DBT mapper. 
                NPCI and government do not link accounts directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/info" className="text-gov-blue-600 hover:underline">
                  Learn About DBT Process →
                </Link>
                <Link href="/bank-locator" className="text-gov-blue-600 hover:underline">
                  Find Nearby Banks →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
