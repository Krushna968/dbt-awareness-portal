import { 
  InformationCircleIcon,
  FingerPrintIcon,
  BanknotesIcon,
  LinkIcon,
  PlayCircleIcon,
  DocumentCheckIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline'

export default function InfoPage() {
  const videos = [
    {
      id: 'dQw4w9WgXcQ', // Sample YouTube video ID
      title: 'How to Link Aadhaar to Bank Account - NPCI Tutorial',
      description: 'Official NPCI guide on linking your Aadhaar to bank account for DBT benefits',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Aadhaar Seeding Explained - Step by Step',
      description: 'Complete walkthrough of the Aadhaar seeding process at bank branches',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'DBT Benefits and Schemes - Government Tutorial',
      description: 'Understanding Direct Benefit Transfer schemes and eligibility',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Check DBT Status Online - UIDAI Portal Guide',
      description: 'How to check your Aadhaar seeding status using official portals',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    }
  ]

  const faqs = [
    {
      question: 'Can I link multiple bank accounts to one Aadhaar?',
      answer: 'No, NPCI confirms that a customer can link only one bank account with Aadhaar for DBT purposes. This ensures clear identification for benefit transfers.'
    },
    {
      question: 'What documents do I need for Aadhaar seeding?',
      answer: 'You need your original Aadhaar card (or e-Aadhaar), bank account details, and a filled NPCI consent form (Annexure I). The bank may also require your passbook or account statement.'
    },
    {
      question: 'How long does the linking process take?',
      answer: 'The linking process at the bank branch typically takes 15-30 minutes. However, it may take 24-48 hours for the seeding to reflect in the NPCI DBT mapper system.'
    },
    {
      question: 'Is there any fee for Aadhaar seeding?',
      answer: 'No, Aadhaar seeding is completely free of charge. Banks cannot charge any fee for this service as per RBI guidelines.'
    }
  ]

  const comparisonData = [
    {
      aspect: 'Purpose',
      aadhaar: 'Biometric identification system',
      dbt: 'Direct benefit transfer mechanism'
    },
    {
      aspect: 'Function',
      aadhaar: 'Provides unique 12-digit ID',
      dbt: 'Transfers government subsidies directly'
    },
    {
      aspect: 'Requirement',
      aadhaar: 'Mandatory for various services',
      dbt: 'Required for government benefit schemes'
    },
    {
      aspect: 'Linking Process',
      aadhaar: 'One-time KYC verification',
      dbt: 'Aadhaar must be seeded in bank account'
    }
  ]

  return (
    <div className="min-h-screen bg-tech-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-gov-blue-600 to-gov-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <InformationCircleIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Understanding Aadhaar & DBT Linking
          </h1>
          <p className="text-xl text-tech-gray-600 max-w-3xl mx-auto">
            Learn about Aadhaar seeding, Direct Benefit Transfer, and why linking 
            your Aadhaar to your bank account is essential for receiving government benefits.
          </p>
        </div>

        {/* What is Aadhaar Linking Section */}
        <section className="mb-16">
          <div className="card">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gov-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FingerPrintIcon className="w-6 h-6 text-gov-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-tech-gray-900">
                  What is Aadhaar Linking?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-tech-gray-700 mb-4">
                    Aadhaar is India's 12-digit biometric identification system that provides 
                    a unique identity to residents. <strong>Aadhaar seeding</strong> means attaching 
                    your Aadhaar number to your bank account.
                  </p>
                  
                  <div className="bg-gov-blue-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gov-blue-900 mb-2">Key Points:</h4>
                    <ul className="space-y-2 text-sm text-gov-blue-800">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gov-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Required for receiving many government benefits and subsidies
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gov-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Only one bank account can be linked to one Aadhaar at a time
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gov-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Enables direct transfer without intermediaries
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gov-blue-600 to-gov-purple-600 rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FingerPrintIcon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Aadhaar Seeding Process</h3>
                    <p className="text-blue-100 text-sm">
                      Visit your bank → Submit consent form → Aadhaar gets linked
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is DBT Section */}
        <section className="mb-16">
          <div className="card">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gov-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <BanknotesIcon className="w-6 h-6 text-gov-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-tech-gray-900">
                  What is DBT (Direct Benefit Transfer)?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-tech-gray-700 mb-4">
                    Direct Benefit Transfer (DBT) is a Government of India initiative launched in 2013 
                    to transfer subsidies directly to citizens' bank accounts. This system eliminates 
                    middlemen and ensures transparent, timely delivery of benefits.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Goals of DBT:</h4>
                      <ul className="space-y-1 text-sm text-green-800">
                        <li>• Reduce corruption and leakage</li>
                        <li>• Ensure timely benefit delivery</li>
                        <li>• Improve financial inclusion</li>
                        <li>• Enable better targeting</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">DBT Statistics:</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• 77+ schemes under DBT</li>
                        <li>• ₹586.7+ Crore disbursed</li>
                        <li>• Millions of beneficiaries</li>
                        <li>• Pan-India coverage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BanknotesIcon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">DBT Impact</h3>
                    <p className="text-green-100 text-sm">
                      Direct • Transparent • Efficient • Corruption-Free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Link for DBT Section */}
        <section className="mb-16">
          <div className="card">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <LinkIcon className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-tech-gray-900">
                  Why Link Aadhaar for DBT?
                </h2>
              </div>
              
              <p className="text-tech-gray-700 mb-8">
                Aadhaar linking and DBT activation work hand-in-hand. While Aadhaar serves as your 
                unique identity for various services, linking it to your bank account specifically 
                enables DBT benefits.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-tech-gray-100">
                      <th className="border border-tech-gray-300 px-4 py-3 text-left font-semibold text-tech-gray-900">
                        Aspect
                      </th>
                      <th className="border border-tech-gray-300 px-4 py-3 text-left font-semibold text-gov-blue-600">
                        Aadhaar Linking
                      </th>
                      <th className="border border-tech-gray-300 px-4 py-3 text-left font-semibold text-gov-purple-600">
                        DBT Activation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-tech-gray-50">
                        <td className="border border-tech-gray-300 px-4 py-3 font-medium text-tech-gray-900">
                          {row.aspect}
                        </td>
                        <td className="border border-tech-gray-300 px-4 py-3 text-tech-gray-700">
                          {row.aadhaar}
                        </td>
                        <td className="border border-tech-gray-300 px-4 py-3 text-tech-gray-700">
                          {row.dbt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-gov-blue-50 to-gov-purple-50 rounded-lg p-6">
                <h4 className="font-bold text-tech-gray-900 mb-3">
                  Example DBT Schemes You Can Access:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['LPG Subsidy', 'PMGSY', 'Scholarships', 'MGNREGA', 'Pension Schemes', 'PMAY', 'Jan Aushadhi', 'Fertilizer Subsidy'].map((scheme, index) => (
                    <div key={index} className="bg-white rounded-lg px-3 py-2 text-sm text-center shadow-sm">
                      {scheme}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demonstrations Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <PlayCircleIcon className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-tech-gray-900 mb-4">
              Video Demonstrations
            </h2>
            <p className="text-tech-gray-600 max-w-2xl mx-auto">
              Watch these helpful tutorials to understand the Aadhaar linking process 
              and DBT benefits in detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-xl flex items-center justify-center">
                    <a 
                      href={`https://youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <PlayCircleIcon className="w-8 h-8 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-tech-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-tech-gray-600 text-sm mb-4">
                    {video.description}
                  </p>
                  <a 
                    href={`https://youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-tech-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-tech-gray-600">
              Common questions about Aadhaar linking and DBT processes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="p-6 cursor-pointer flex justify-between items-center">
                  <h3 className="font-semibold text-tech-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon className="w-5 h-5 text-tech-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-tech-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="gradient-bg rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Check Your DBT Status?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Now that you understand Aadhaar linking and DBT, check if your 
              account is already linked or find a nearby bank to complete the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/check-status"
                className="btn-primary bg-white text-gov-blue-600 hover:bg-gray-100"
              >
                Check DBT Status
              </a>
              <a 
                href="/bank-locator"
                className="btn-secondary border-white text-white hover:bg-white hover:text-gov-blue-600"
              >
                Find Nearby Bank
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
