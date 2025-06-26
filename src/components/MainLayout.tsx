'use client'
import Link from "next/link";
import { useState } from "react";
import { XIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 flex flex-col lg:hidden">
          <div className="flex justify-between items-center mb-8">
            <div className="font-bold text-xl text-blue-600">ReferTech</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <XIcon size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              href="#"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            >
              Browse Jobs
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            >
              For Referrers
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            >
              Success Stories
            </Link>
          </nav>
          <div className="mt-auto flex flex-col space-y-3">
            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition">
              Sign In
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
      {children}

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <Link href="/" className="inline-block font-bold text-blue-600">
                ReferTech
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                Connecting tech talent with their dream companies through employee referrals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">About Us</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Careers</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Resources</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Help Center</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Connect</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Twitter</Link></li>
                <li><Link href="#" className="hover:text-gray-900">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} ReferTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 