"use client"

import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()

  const handleNavigate = () => {
    router.push("/register")
  }

  return (
    <div className="relative flex flex-col justify-between min-h-screen bg-[#7A21B1] overflow-hidden p-6">
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
          {/* 12 wavy, curvy lines - similar to register page */}
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
          <path
            d="M-10,250 C-10,230 0,210 15,225 C30,240 30,260 15,275 C0,290 -10,285 -10,265"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,280 C-15,260 -5,240 5,250 C15,260 15,270 5,280 C-5,290 -15,300 -10,280"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,310 C-20,290 -10,270 -5,275 C0,280 0,285 -5,290 C-10,295 -20,330 -10,310"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-10,-20 C75,-30 125,20 145,90 C165,160 165,240 145,310 C125,380 75,420 -10,410"
            stroke="#B275F7"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Logo section */}
      <div className="z-10 mt-12">
        <h1 className="text-white text-5xl font-gugi">Spiel</h1>
        <h2 className="text-[#380e4e] text-5xl font-gugi">Portal</h2>
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center z-10 mb-8 mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="w-1 bg-[#380E4E] h-[90px] mr-4"></div>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-white text-2xl font-gugi leading-tight tracking-normal">
              Salesman
              <br />
              Registration
              <br />& Verification
            </h3>
            <button
              onClick={handleNavigate}
              className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg ml-4 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Go to registration"
            >
              <ArrowRight className="w-6 h-6 text-[#7A21B1]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
