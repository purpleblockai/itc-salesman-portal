"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="relative flex flex-col justify-between min-h-screen bg-black overflow-hidden p-6">
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

      {/* Logo section */}
      <div className="flex justify-center items-center mt-32 z-10">
        <div className="text-center">
          <h1 className="text-[#B275F7] text-5xl font-gugi">Spiel</h1>
          <h2 className="text-[#B275F7] text-5xl font-gugi">Portal</h2>
        </div>
      </div>

      {/* Title */}
      {/* Title section removed */}

      {/* Auth buttons section */}
      <div className="flex flex-col space-y-4 mb-12 z-10">
        <button
          onClick={() => router.push("/login")}
          className={`py-4 px-6 rounded-full font-gugi text-lg ${
            !isSignUp ? "bg-[#B275F7] text-black" : "bg-transparent text-[#B275F7] border border-[#B275F7]"
          }`}
        >
          Log In
        </button>

        <div className="relative">
          <button
            onClick={() => router.push("/signup")}
            className={`w-full py-4 px-6 rounded-full font-gugi text-lg ${
              isSignUp ? "bg-[#B275F7] text-black" : "bg-transparent text-[#B275F7] border border-[#B275F7]"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
