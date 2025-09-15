"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Luckiest_Guy } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";
import { CONFIG } from "../ui/config";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Title + subtitle */}
      <div className="container grid items-center justify-center gap-10 px-4 text-center md:px-4 lg:gap-10">
        <div className="space-y-3 mt-10">
          <h1
            className={`${luckiestGuy.className} text-5xl md:text-6xl lg:text-7xl`}
          >
            <span className="text-red-600">B</span>
            <span className="text-black-500">I</span>
            <span className="text-yellow-500">N</span>
            <span className="text-green-600">G</span>
            <span className="text-green-600"> </span>
            <span className="text-orange-500">!</span>
            <span className="text-orange-500">!</span>
            <span className="text-orange-500">!</span>
          </h1>
          <p
            className={`${luckiestGuy.className} mx-auto max-w-[800px] text-black-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}
          >
            Wholesome vibes, fun memes & community power
          </p>
        </div>
      </div>

      {/* Hero character */}
      <img
        src="/hero-bing.png"
        width={350}
        height={150}
        alt="App preview"
        className="flex mx-auto mt-20 hidden lg:block"
      />

      {/* Bottom buttons */}
      <div className="absolute bottom-10 left-10 hidden md:block -mt-6">
        <Link
          href={CONFIG.urls.dexscreener}
          target="_blank"
          rel="noopener noreferrer"
          >
        <Button className="p-0 bg-transparent hover:bg-transparent">
          <img src="/dex.png" alt="DexScreener" width={300} height={48} />
        </Button>
        </Link>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        {/* Trigger button */}
        <Button
          className="p-0 bg-transparent hover:bg-transparent"
          onClick={() => setOpen(true)}
        >
          <img
            src="/connect_wallet.png"
            alt="ConnectWallet"
            width={300}
            height={68}
          />
        </Button>

        {/* Popup modal */}
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🚧 Coming Soon 🚧
              </h2>
              <p className="text-gray-600 mb-6">
                Wallet connection feature will be available soon!
              </p>
              <Button
                className="bg-red-600 text-white hover:bg-red-500"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default HeroSection;