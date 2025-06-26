import React from 'react'
import CompanyCard from './CompanyCard'

// Tech company data with logos
const techCompanies = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
    referrals: 15,
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    referrals: 12,
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
    referrals: 8,
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    referrals: 10,
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
    referrals: 7,
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
    referrals: 2,
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png',
    referrals: 5,
  },
  {
    name: 'Intel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1200px-Intel-logo.svg.png',
    referrals: 3,
  },
  {
    name: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_logo.png/800px-Adobe_Corporate_logo.png',
    referrals: 4,
  },
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png',
    referrals: 6,
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1200px-Oracle_logo.svg.png',
    referrals: 9,
  },
  {
    name: 'Twitter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png',
    referrals: 2,
  },
  {
    name: 'LinkedIn',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png',
    referrals: 11,
  },
  {
    name: 'Uber',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png',
    referrals: 5,
  },
  {
    name: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_logo_bélo.svg/1200px-Airbnb_logo_bélo.svg.png',
    referrals: 3,
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
    referrals: 7,
  },
  {
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png',
    referrals: 8,
  },
  {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png',
    referrals: 4,
  },
  {
    name: 'Zoom',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Zoom_logo.svg/1200px-Zoom_logo.svg.png',
    referrals: 6,
  },
  {
    name: 'Twilio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/1200px-Twilio-logo-red.svg.png',
    referrals: 2,
  },
]

// Split companies into 2 groups for the different rows
const row1 = techCompanies.slice(0, 10)
const row2 = techCompanies.slice(10, 20)

const TechCompaniesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-3 text-gray-900">
          Top <span className="text-[#0f62fe]">Tech Companies</span> Hiring Now
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with industry insiders at these leading technology companies
          and boost your chances of landing interviews
        </p>
      </div>
      {/* Scrolling rows with fade overlays */}
      <div className="w-full relative overflow-hidden">
        {/* Fade overlays */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 z-10 bg-gradient-to-l from-gray-50 to-transparent" />
        {/* Row 1: Left to Right */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-right">
            {[...row1, ...row1].map((company, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0">
                <CompanyCard
                  name={company.name}
                  logo={company.logo}
                  referrals={company.referrals}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Row 2: Right to Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...row2, ...row2].map((company, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0">
                <CompanyCard
                  name={company.name}
                  logo={company.logo}
                  referrals={company.referrals}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechCompaniesSection 