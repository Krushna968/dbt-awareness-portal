'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  UserPlusIcon,
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
  FingerPrintIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    aadhaarNumber: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid Indian mobile number'
    }

    if (!formData.aadhaarNumber.trim()) {
      newErrors.aadhaarNumber = 'Aadhaar number is required'
    } else if (!/^\d{12}$/.test(formData.aadhaarNumber)) {
      newErrors.aadhaarNumber = 'Aadhaar number must be 12 digits'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and privacy policy'
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, show success message
      alert('Account created successfully! (This is a demo)')
    } catch (err) {
      setErrors({ general: 'Failed to create account. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gov-blue-50 to-gov-purple-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlusIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-tech-gray-900 mb-2">
            Create Your Account
          </h1>
          <p className="text-tech-gray-600">
            Join DBT Sahayak to manage your Direct Benefit Transfer services
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="card">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{errors.general}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 pl-10 border rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent ${
                        errors.fullName ? 'border-red-300' : 'border-tech-gray-300'
                      }`}
                      required
                    />
                    <UserIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                  {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 pl-10 border rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-300' : 'border-tech-gray-300'
                      }`}
                      required
                    />
                    <EnvelopeIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit mobile number"
                      className={`w-full px-4 py-3 pl-10 border rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent ${
                        errors.mobile ? 'border-red-300' : 'border-tech-gray-300'
                      }`}
                      maxLength={10}
                      required
                    />
                    <PhoneIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                  {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
                </div>

                {/* Aadhaar Number */}
                <div>
                  <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Aadhaar Number *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="aadhaarNumber"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={handleInputChange}
                      placeholder="Enter 12-digit Aadhaar number"
                      className={`w-full px-4 py-3 pl-10 border rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent ${
                        errors.aadhaarNumber ? 'border-red-300' : 'border-tech-gray-300'
                      }`}
                      maxLength={12}
                      required
                    />
                    <FingerPrintIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                  {errors.aadhaarNumber && <p className="text-red-600 text-sm mt-1">{errors.aadhaarNumber}</p>}
                  <p className="text-xs text-tech-gray-500 mt-1">
                    We'll use your Aadhaar only to check status securely
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      className={`w-full px-4 py-3 pl-10 pr-10 border rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent ${
                        errors.password ? 'border-red-300' : 'border-tech-gray-300'
                      }`}
                      required
                    />
                    <LockClosedIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tech-gray-400 hover:text-tech-gray-600"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-tech-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Re-enter your password"
                      className={`w-full px-4 py-3 pl-10 pr-10 border rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent ${
                        errors.confirmPassword ? 'border-red-300' : 'border-tech-gray-300'
                      }`}
                      required
                    />
                    <LockClosedIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tech-gray-400 hover:text-tech-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Terms and Privacy */}
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="rounded border-tech-gray-300 text-gov-blue-600 focus:ring-gov-blue-500 mt-0.5 mr-3 flex-shrink-0"
                  />
                  <span className="text-sm text-tech-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-gov-blue-600 hover:text-gov-blue-700">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-gov-blue-600 hover:text-gov-blue-700">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && <p className="text-red-600 text-sm mt-1">{errors.terms}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-tech-gray-600">
                Already have an account?{' '}
                <Link
                  href="/signin"
                  className="text-gov-blue-600 hover:text-gov-blue-700 font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-start space-x-3">
              <ShieldCheckIcon className="w-5 h-5 text-gov-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-tech-gray-900 mb-1">
                  Your Data is Secure
                </h4>
                <p className="text-sm text-tech-gray-600">
                  Your personal information is encrypted and stored securely according to 
                  government data protection standards. We never share your Aadhaar information 
                  with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-tech-gray-600 hover:text-gov-blue-600 text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
