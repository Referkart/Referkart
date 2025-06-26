import React from 'react'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  return (
    <header className="w-full py-4 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-xl text-blue-600">ReferTech</div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              How It Works
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Browse Jobs
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              For Referrers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Success Stories
            </Link>
          </nav>
          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar 