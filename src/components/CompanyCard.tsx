import React from 'react'
import { TrendingUpIcon } from 'lucide-react'

interface CompanyCardProps {
  name: string
  logo: string
  referrals: number
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, logo, referrals }) => {
  return (
    <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-md mx-3 w-[220px] h-[280px] transition-transform hover:scale-105 border border-gray-100">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-5">{name}</h3>
      <div className="mt-auto w-full">
        <div className="bg-[#0f62fe] text-white -ml-[12px] py-2 px-4 rounded-full flex items-center justify-center font-medium whitespace-nowrap text-base min-w-[200px]">
          <TrendingUpIcon size={16} className="mr-2" />
          <span>Available Referrals - {referrals}</span>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard 