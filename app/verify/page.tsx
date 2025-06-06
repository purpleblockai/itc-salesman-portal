"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VerifyPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const flow = searchParams.get("flow") || "login"
  const [otp, setOtp] = useState(["", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  useEffect(() => {
    // Get the phone number from sessionStorage based on the flow
    const storedPhone = sessionStorage.getItem(flow === "signup" ? "signupPhone" : "loginPhone") || "+91 9983081638"
    setPhoneNumber(storedPhone)
  }, [flow])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(0, 1) // Only take the first character

    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()

    if (otp.some((digit) => !digit)) {
      // Show validation error
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      // Redirect based on the flow
      if (flow === "signup") {
        router.push("/signup/details")
      } else {
        router.push("/login/success")
      }
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
            d="M-10,190 C 5,170 20,160 40,185 C 60,210 60,245 40,270 C 20,295 5,300 -10,280"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,220 C-5,200 5,180 25,200 C45,220 45,250 25,270 C 5,290 -5,290 -10,270"
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
        <h1 className="text-black text-3xl font-gugi mb-8">Verify OTP</h1>

        <p className="text-black mb-6 font-colophon font-normal">
          We sent a code to your number <span className="text-[#B275F7]">{phoneNumber}</span>
        </p>

        <form onSubmit={handleVerify} className="flex flex-col">
          <div className="flex justify-between mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                className="bg-white text-black text-center w-16 h-16 rounded-lg border border-gray-300 focus:outline-none focus:border-[#B275F7] text-xl font-colophon font-medium"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#B275F7] text-white py-4 px-6 rounded-full font-gugi text-lg mt-6 disabled:opacity-70 hover:bg-[#9B62E0]"
          >
            {isLoading ? "Verifying..." : "Confirm"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-black font-colophon font-normal">
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
