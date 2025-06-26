'use client'
import React from 'react'
import {
  BriefcaseIcon,
  UsersIcon,
  ArrowRightIcon,
  SearchIcon,
} from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50">
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get Your <span className="text-blue-600">Dream Tech Job</span>{' '}
              Through Referrals
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Connect with industry insiders willing to refer you to top tech
              companies. Boost your chances of landing interviews by up to 14x.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
                Find Referrals <ArrowRightIcon size={18} className="ml-2" />
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition flex items-center justify-center">
                Become a Referrer
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-gray-600">
                  Trusted by <span className="font-semibold">2,000+</span>{' '}
                  professionals
                </p>
              </div>
            </div>
          </div>
          {/* Right Column - Visual Element */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-purple-100 rounded-full opacity-70 blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <BriefcaseIcon className="text-blue-600" size={24} />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-900">Top Tech Jobs</h3>
                      <p className="text-sm text-gray-500">
                        With insider referrals
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-green-700 text-sm font-medium">
                      Trending
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      role: 'Senior Frontend Developer',
                      company: 'TechGiant Inc.',
                      location: 'Remote',
                      referrals: 12,
                    },
                    {
                      role: 'Product Manager',
                      company: 'InnovateCorp',
                      location: 'San Francisco, CA',
                      referrals: 8,
                    },
                    {
                      role: 'Data Scientist',
                      company: 'AnalyticsPro',
                      location: 'New York, NY',
                      referrals: 5,
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-100 hover:border-blue-100 hover:bg-blue-50 rounded-lg transition cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {job.role}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {job.company} • {job.location}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-blue-600">
                          <UsersIcon size={16} className="mr-1" />
                          <span>{job.referrals} referrers</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search for jobs or companies..."
                      className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <SearchIcon
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default HeroSection 