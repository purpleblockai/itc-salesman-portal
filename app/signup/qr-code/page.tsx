"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Download } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

export default function QRCodePage() {
  const router = useRouter()

  const handleDownload = () => {
    // In a real app, this would download the QR code image
    alert("QR code download started")
  }

  const handleDone = () => {
    router.push("/")
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden p-6">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="text-black p-2 rounded-full hover:bg-gray-100 transition-colors z-10 mb-4"
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
        <div className="bg-white p-6 rounded-lg mb-8 shadow-lg">
          <div className="w-64 h-64 relative">
            <QRCodeSVG
              value="https://itc-retailer-game-i9hm.vercel.app/"
              size={256}
              level="H"
              includeMargin={true}
              fgColor="#000000"
              bgColor="#FFFFFF"
              style={{
                padding: "8px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "2px solid #B275F7"
              }}
            />
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
            className="w-full flex items-center justify-center bg-transparent border border-[#B275F7] text-[#B275F7] py-4 px-6 rounded-full font-gugi text-lg hover:bg-gray-50"
          >
            <Download className="w-5 h-5 mr-2" /> Download QR Code
          </button>

          <button
            onClick={handleDone}
            className="w-full bg-[#B275F7] text-white py-4 px-6 rounded-full font-gugi text-lg hover:bg-[#9B62E0]"
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
