"use client"

import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"
import { Luckiest_Guy } from "next/font/google"
import Link from "next/link"
import { CONFIG } from "../ui/config"

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
})

export default function TokenomicsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-20 bg-gradient-to-b from-yellow-100 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2
          className={`${luckiestGuy.className} text-5xl md:text-6xl font-bold text-center mb-12 text-gray-900`}
        >
          Tokenomics
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
              <img
                src="/buy.png"
                alt="mascot bing"
                width={400}
                height={400}
                className="mx-auto rounded-full hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(0,200,255,0.8)] transition-all duration-500 ease-in-out"
              />
          </div>

          {/* Right Side - Token Info */}
          <div className="grid grid-cols-2 gap-6">
            {/* Token Name */}
            <div className="col-span-2 border-2 border-black rounded-lg p-4 flex justify-between">
              <span className="font-bold">Token Name</span>
              <span className={`${luckiestGuy.className} font-bold`}>
                BingOnBonk !!!
              </span>
            </div>

            {/* Symbol */}
            <div className="border-2 border-black rounded-lg p-4 flex justify-between col-span-1">
              <span className="font-bold">Ticker</span>
              <span className={`${luckiestGuy.className} font-bold text-xl`}>
                $Soon
              </span>
            </div>

            {/* Supply */}
            <div className="border-2 border-black rounded-lg p-4 flex justify-between col-span-2">
              <span className="font-bold">Token Supply</span>
              <p className={`${luckiestGuy.className} text-sm sm:text-base md:text-lg leading-relaxed`}>
                1,000,000,000
              </p>
            </div>

            {/* Chain */}
            <div className="border-2 border-black rounded-lg p-4 flex justify-between col-span-2">
              <span className="font-bold">Chain</span>
              <span className={`${luckiestGuy.className} font-bold`}>
                Solana
              </span>
            </div>

            {/* Contract */}
            <div className="col-span-2 border-2 border-black rounded-lg p-4 text-sm">
              <p className="font-bold">Contract Address:</p>
              <p className="break-all text-gray-700">Coming Soon</p>
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex gap-4 justify-center mt-4">
              <Link
                href={CONFIG.urls.buy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 bg-yellow-300 border-2 border-black rounded-lg font-bold hover:scale-105 transition">
                  Buy
                </button>
              </Link>
              <Link
                href={CONFIG.urls.trade}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 bg-yellow-300 border-2 border-black rounded-lg font-bold hover:scale-105 transition">
                  Chart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
