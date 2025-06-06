"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function SignupUpiPage() {
  const router = useRouter()
  const [upiId, setUpiId] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!upiId) {
      // Show validation error
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Store UPI ID in sessionStorage
      sessionStorage.setItem("signupUpi", upiId)

      // In a real app, you would send all the collected data to your backend here

      // Redirect to completion page
      router.push("/signup/complete")
    }, 1500)
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
        <h1 className="text-black text-3xl font-gugi mb-4">Almost Done!!</h1>
        <p className="text-black mb-8 font-colophon font-normal">Please enter your valid UPI ID here</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="upiId" className="text-black font-colophon font-medium">
              Enter UPI ID here
            </label>
            <input
              id="upiId"
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="example@ybl"
              className="bg-white text-black p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#B275F7] font-colophon font-normal"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#B275F7] text-white py-4 px-6 rounded-full font-gugi text-lg mt-6 disabled:opacity-70 hover:bg-[#9B62E0]"
          >
            {isLoading ? "Processing..." : "Confirm"}
          </button>
        </form>
      </div>

      {/* Logo at bottom */}
      <div className="mt-auto mb-4 text-center z-10">
        <h2 className="text-[#B275F7] text-2xl font-gugi">Spiel</h2>
        <h3 className="text-[#B275F7] text-2xl font-gugi">Portal</h3>
      </div>
    </div>
  )
}
