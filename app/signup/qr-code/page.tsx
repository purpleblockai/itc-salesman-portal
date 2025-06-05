"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Download } from "lucide-react"
import Image from "next/image"

export default function QRCodePage() {
  const router = useRouter()

  const handleDownload = () => {
    // In a real app, this would download the QR code image
    alert("QR code download started")
  }

  const handleDone = () => {
    // In a real app, this might redirect to a different page
    // For now, just go back to the landing page
    router.push("/")
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-hidden p-6">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 z-20">
        <div className="text-white text-sm">9:30</div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.5 6.5C1.5 4 3.5 2 6 2C8.5 2 10.5 4 10.5 6.5C10.5 9 8.5 11 6 11C3.5 11 1.5 9 1.5 6.5ZM12 6.5H22.5M12 17.5H22.5M1.5 17.5C1.5 15 3.5 13 6 13C8.5 13 10.5 15 10.5 17.5C10.5 20 8.5 22 6 22C3.5 22 1.5 20 1.5 17.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5" />
              <path
                d="M7 15V9L12 12L17 9V15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="text-white p-2 rounded-full hover:bg-gray-800 transition-colors z-10 mb-4"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Logo */}
      <div className="mb-8 z-10 text-center">
        <h1 className="text-[#B275F7] text-3xl font-gugi">Spiel</h1>
        <h2 className="text-[#B275F7] text-3xl font-gugi">Portal</h2>
      </div>

      {/* QR Code */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <div className="bg-[#222222] p-6 rounded-lg mb-8">
          <div className="w-64 h-64 relative">
            <Image src="/spiel-portal-salesman-qr.png" alt="QR Code" width={256} height={256} />
          </div>
        </div>

        <h2 className="text-[#B275F7] text-3xl font-gugi text-center mb-16">
          Your unique QR
          <br />
          Code Generated!!
        </h2>

        <div className="w-full max-w-md space-y-4">
          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center bg-transparent border border-[#B275F7] text-[#B275F7] py-4 px-6 rounded-full font-gugi text-lg"
          >
            <Download className="w-5 h-5 mr-2" /> Download QR Code
          </button>

          <button
            onClick={handleDone}
            className="w-full bg-[#B275F7] text-black py-4 px-6 rounded-full font-gugi text-lg"
          >
            Done
          </button>
        </div>
      </div>

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
    </div>
  )
}
