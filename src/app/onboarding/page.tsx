'use client'

import { auth, db } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Onboarding() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [fullName, setFullName] = useState('')
  const [linkedinId, setLinkedinId] = useState('')
  const [desiredRole, setDesiredRole] = useState('')
  const [skills, setSkills] = useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        router.push('/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const handleOnboarding = async (e: React.FormEvent) => {
    e.preventDefault()
    if (user) {
      try {
        await setDoc(doc(db, 'profiles', user.uid), {
          fullName,
          linkedinId,
          desiredRole,
          skills: skills.split(',').map((skill) => skill.trim()),
        })
        router.push('/dashboard')
      } catch (error) {
        console.error('Error creating profile:', error)
      }
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Complete Your Profile
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Tell us a bit about yourself to get started.
        </p>
        <form onSubmit={handleOnboarding} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="linkedinId" className="block text-sm font-medium text-gray-700">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              id="linkedinId"
              value={linkedinId}
              onChange={(e) => setLinkedinId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="desiredRole" className="block text-sm font-medium text-gray-700">
              Desired Role
            </label>
            <input
              type="text"
              id="desiredRole"
              value={desiredRole}
              onChange={(e) => setDesiredRole(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Complete Onboarding
          </button>
        </form>
      </div>
    </div>
  )
}
