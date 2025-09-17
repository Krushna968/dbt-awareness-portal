'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  UserIcon,
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('') // Clear error when user starts typing
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, show success message
      alert('Sign in successful! (This is a demo)')
    } catch (err) {
      setError('Invalid email or password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gov-blue-50 to-gov-purple-50 py-12 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-tech-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-tech-gray-600">
            Sign in to your DBT Sahayak account
          </p>
        </div>

        {/* Sign In Form */}
        <div className="card">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-tech-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pl-10 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
                    required
                  />
                  <EnvelopeIcon className="w-5 h-5 text-tech-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-tech-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pl-10 pr-10 border border-tech-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue-500 focus:border-transparent"
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
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-tech-gray-300 text-gov-blue-600 focus:ring-gov-blue-500"
                  />
                  <span className="ml-2 text-sm text-tech-gray-600">Remember me</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-gov-blue-600 hover:text-gov-blue-700 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-tech-gray-600">
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  className="text-gov-blue-600 hover:text-gov-blue-700 font-medium"
                >
                  Sign up here
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
                  Secure Government Portal
                </h4>
                <p className="text-sm text-tech-gray-600">
                  This is a secure government portal. Your data is encrypted and protected 
                  according to government security standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center space-y-2">
          <Link
            href="/"
            className="block text-tech-gray-600 hover:text-gov-blue-600 text-sm"
          >
            ← Back to Home
          </Link>
          <Link
            href="/check-status"
            className="block text-tech-gray-600 hover:text-gov-blue-600 text-sm"
          >
            Check DBT Status without signing in
          </Link>
        </div>
      </div>
    </div>
  )
}
