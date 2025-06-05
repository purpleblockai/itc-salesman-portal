"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, Check, ArrowLeft } from "lucide-react"

export default function RegistrationCompletePage() {
  const router = useRouter()

  const handleContinue = () => {
    router.push("/signup/qr-code")
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-hidden p-6">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 375 812"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Wavy, curvy lines */}
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
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        {/* Success icon */}
        <div className="bg-[#B275F7] w-32 h-32 rounded-full flex items-center justify-center mb-8">
          <Check className="w-16 h-16 text-black" />
        </div>

        {/* Success message */}
        <h1 className="text-[#B275F7] text-4xl font-gugi text-center mb-16">
          Registration
          <br />
          Complete!
        </h1>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="bg-[#B275F7] w-16 h-16 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B275F7]"
          aria-label="Continue to QR code"
        >
          <ArrowRight className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Logo at bottom */}
      <div className="mt-auto mb-4 text-center z-10">
        <h2 className="text-[#B275F7] text-2xl font-gugi">Spiel</h2>
        <h3 className="text-[#B275F7] text-2xl font-gugi">Portal</h3>
      </div>
    </div>
  )
}
