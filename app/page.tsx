import Link from 'next/link'
import { 
  ArrowRightIcon, 
  BanknotesIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  EyeIcon,
  BuildingLibraryIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Secure Direct Transfer',
      description: 'Government subsidies sent directly to your bank account with zero leakage'
    },
    {
      icon: BanknotesIcon,
      title: 'Cut Out Middlemen',
      description: 'Every rupee reaches you directly without intermediaries or corruption'
    },
    {
      icon: DocumentCheckIcon,
      title: 'Simple Linking Process',
      description: 'Visit any bank branch with Aadhaar-seeding consent form to get started'
    },
    {
      icon: UserGroupIcon,
      title: '77+ Active Schemes',
      description: 'Access pensions, LPG subsidies, scholarships and more government benefits'
    }
  ]

  const steps = [
    {
      step: '1',
      title: 'Visit Your Bank',
      description: 'Take your Aadhaar and account details to any bank branch',
      icon: BuildingLibraryIcon
    },
    {
      step: '2',
      title: 'Submit Consent Form',
      description: 'Fill and submit the NPCI Aadhaar-seeding consent form (Annexure I)',
      icon: DocumentCheckIcon
    },
    {
      step: '3',
      title: 'Verification Complete',
      description: 'Your Aadhaar will appear in NPCI DBT mapper for benefit credits',
      icon: CheckCircleIcon
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Direct Benefit Transfer
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                Secure, transparent, and efficient delivery of government subsidies 
                through Aadhaar-enabled Direct Benefit Transfer system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/check-status" className="btn-primary inline-flex items-center justify-center">
                  <EyeIcon className="w-5 h-5 mr-2" />
                  Check Your DBT Status
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/info" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gov-blue-600">
                  Learn About DBT
                </Link>
              </div>
            </div>
            
            {/* Animated illustration */}
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20 flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BanknotesIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Open Government</h3>
                  <p className="text-blue-100">Transparent • Secure • Direct</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Aadhaar-DBT Linking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              About Aadhaar-DBT Linking
            </h2>
            <p className="text-xl text-tech-gray-600 max-w-3xl mx-auto">
              Direct Benefit Transfer (DBT) is a Government of India initiative to send subsidies 
              directly into citizens' bank accounts, ensuring transparency and eliminating leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-tech-gray-900">{benefit.title}</h3>
                <p className="text-tech-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* How to Link Steps */}
          <div className="bg-tech-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-tech-gray-900">
              How to Link Your Aadhaar for DBT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-tech-gray-900">{step.title}</h4>
                  <p className="text-tech-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Check Status CTA Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Check Your DBT Status Now
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Verify if your Aadhaar is linked to receive DBT benefits. 
              Enter your details to see if you're eligible for government subsidies and schemes.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <EyeIcon className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Status Check</h3>
              <p className="text-blue-100 mb-6">
                The official government portal lets citizens check their linking status 
                via UIDAI. Get real-time information about your DBT eligibility.
              </p>
              <Link href="/check-status" className="btn-primary inline-flex items-center">
                <DocumentCheckIcon className="w-5 h-5 mr-2" />
                Check Status Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-tech-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-tech-gray-900">
                Why DBT Matters for You
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-0.5" />
                  <p className="text-tech-gray-700">
                    <strong>Direct Transfer:</strong> Subsidies reach your bank account directly without delays or corruption
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-0.5" />
                  <p className="text-tech-gray-700">
                    <strong>Financial Inclusion:</strong> Access to 77+ government schemes including pensions, LPG, and scholarships
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-0.5" />
                  <p className="text-tech-gray-700">
                    <strong>Transparency:</strong> Real-time tracking of benefits and elimination of middlemen
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-tech-gray-900">Need Help?</h4>
              <p className="text-tech-gray-600 mb-4">
                Find nearby banks for Aadhaar seeding or get detailed information about the linking process.
              </p>
              <div className="space-y-3">
                <Link href="/bank-locator" className="btn-secondary w-full">
                  Find Nearby Bank
                </Link>
                <Link href="/info" className="text-gov-blue-600 hover:underline">
                  Learn More About DBT →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
