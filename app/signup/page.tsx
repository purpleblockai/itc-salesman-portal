"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const handleGetOTP = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber) {
      // Show validation error
      setPhoneError("Please enter a valid phone number")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Store the phone number in sessionStorage for later use
      sessionStorage.setItem("signupPhone", phoneNumber)
      // Redirect to OTP verification
      router.push("/verify?flow=signup")
    }, 1500)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhoneNumber(value)
    setPhoneError("")
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden p-6">
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
        className="text-black p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Main content */}
      <div className="flex-1 flex flex-col mt-12 z-10">
        <h1 className="text-black text-3xl font-gugi mb-8">Sign Up</h1>

        <form onSubmit={handleGetOTP} className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="phoneNumber" className="text-black font-colophon font-medium">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4 text-gray-600">
                <span className="text-sm">+91</span>
              </div>
              <input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter 10 digit number"
                className="bg-white w-full text-black pl-16 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#B275F7] font-colophon font-normal"
              />
            </div>
            {phoneError && (
              <span className="text-red-500 text-sm mt-1">{phoneError}</span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-black font-colophon font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="XXXXXX"
                className="bg-white text-black p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#B275F7] w-full font-colophon font-normal"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#B275F7] text-white py-4 px-6 rounded-full font-gugi text-lg mt-6 disabled:opacity-70 hover:bg-[#9B62E0]"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-black font-colophon font-normal">
            Already have an account?{" "}
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
