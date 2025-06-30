'use client'

import { auth } from '@/lib/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Login() {
  const router = useRouter()

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error during Google login:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">ReferTech</span>
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Sign in to find your dream job through referrals.
        </p>
        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-lg font-semibold text-gray-700 shadow-md transition hover:bg-gray-50"
        >
          <Image
            src="/google.svg"
            alt="Google logo"
            width={24}
            height={24}
          />
          <span>Continue with Google</span>
        </button>
        <p className="mt-6 text-sm text-gray-500">
          By continuing, you agree to our{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  )
}
