"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function SignupDetailsPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState("")
  const [wdCode, setWdCode] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")

  useEffect(() => {
    // Get the phone number from sessionStorage
    const storedPhone = sessionStorage.getItem("signupPhone") || ""
    setPhoneNumber(storedPhone)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName || !wdCode || !password || !confirmPassword || !acceptPolicy) {
      // Show validation error
      return
    }

    if (password !== confirmPassword) {
      // Show password mismatch error
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Store user details in sessionStorage
      sessionStorage.setItem(
        "signupDetails",
        JSON.stringify({
          fullName,
          wdCode,
          phoneNumber,
        }),
      )
      // Redirect to UPI page
      router.push("/signup/upi")
    }, 1500)
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-hidden p-6">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden z-0">
        <svg
          width="100%"
          height="600"
          viewBox="0 0 375 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* 8 wavy, curvy lines */}
          <path
            d="M-10,40 C55,20 95,60 115,110 C135,160 135,220 115,270 C95,320 55,350 -10,330"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,70 C45,50 80,80 100,125 C120,170 120,225 100,270 C80,315 45,340 -10,320"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,100 C35,80 65,100 85,140 C105,180 105,230 85,270 C65,310 35,330 -10,310"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,130 C25,110 50,120 70,155 C90,190 90,235 70,270 C50,305 25,320 -10,300"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,160 C15,140 35,140 55,170 C75,200 75,240 55,270 C35,300 15,310 -10,290"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,190 C5,170 20,160 40,185 C60,210 60,245 40,270 C20,295 5,300 -10,280"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,220 C-5,200 5,180 25,200 C45,220 45,250 25,270 C5,290 -5,290 -10,270"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,10 C65,0 110,40 130,100 C150,160 150,230 130,290 C110,350 65,380 -10,370"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="text-white p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Main content */}
      <div className="flex-1 flex flex-col mt-12 z-10">
        <h1 className="text-white text-3xl font-gugi mb-8">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="fullName" className="text-white font-colophon font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="bg-[#222222] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-[#B275F7] font-colophon font-normal"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="wdCode" className="text-white font-colophon font-medium">
              WD Code
            </label>
            <input
              id="wdCode"
              type="text"
              value={wdCode}
              onChange={(e) => setWdCode(e.target.value)}
              placeholder="XXXXXX"
              className="bg-[#222222] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-[#B275F7] font-colophon font-normal"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-white font-colophon font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="XXXXXX"
                className="bg-[#222222] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-[#B275F7] w-full font-colophon font-normal"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="confirmPassword" className="text-white font-colophon font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="XXXXXX"
                className="bg-[#222222] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:border-[#B275F7] w-full font-colophon font-normal"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="acceptPolicy"
              checked={acceptPolicy}
              onChange={(e) => setAcceptPolicy(e.target.checked)}
              className="w-5 h-5 rounded-full bg-[#222222] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#B275F7] text-[#B275F7]"
            />
            <label htmlFor="acceptPolicy" className="ml-2 text-white font-colophon font-normal">
              By continuing you accept our{" "}
              <Link href="#" className="text-[#B275F7]">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#B275F7] text-black py-4 px-6 rounded-full font-gugi text-lg mt-6 disabled:opacity-70"
          >
            {isLoading ? "Processing..." : "Confirm"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white font-colophon font-normal">
            Already has an account?{" "}
            <Link href="/login" className="text-[#B275F7] font-gugi">
              Log In
            </Link>
          </p>
        </div>
      </div>

      {/* Logo at bottom */}
      <div className="mt-auto mb-4 text-center z-10">
        <h2 className="text-[#B275F7] text-2xl font-gugi">Spiel</h2>
        <h3 className="text-[#B275F7] text-2xl font-gugi">Portal</h3>
      </div>
    </div>
  )
}
