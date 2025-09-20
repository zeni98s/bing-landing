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
      {/* Background overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Title & subtitle */}
      <div className="container grid items-center justify-center gap-10 px-4 text-center">
        <div className="space-y-3 mt-10">
          <h1
            className={`${luckiestGuy.className} text-5xl md:text-6xl lg:text-7xl`}
          >
            <span className="text-red-600">B</span>
            <span className="text-black-500">I</span>
            <span className="text-yellow-500">N</span>
            <span className="text-green-600">G</span>
            <span className="text-green-600"> </span>
            <span className="text-orange-500">!!!</span>
          </h1>
          <p
            className={`${luckiestGuy.className} mx-auto max-w-[800px] text-black-400 text-base md:text-xl lg:text-2xl`}
          >
            Wholesome vibes, fun memes & community power
          </p>
        </div>
      </div>

      {/* Hero character (1 elemen responsif) */}
      <img
        src="/hero-bing.png"
        alt="App preview"
        className="mx-auto mt-10 md:mt-20 w-[180px] md:w-[350px]"
      />

      {/* Bottom buttons */}
      <div className="absolute bottom-10 left-10">
        <Link
          href={CONFIG.urls.dexscreener}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="p-0 bg-transparent hover:bg-transparent">
            <img
              src="/dex.png"
              alt="DexScreener"
              className="w-[120px] md:w-[300px]"
            />
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-10 right-10">
        <Button
          className="p-0 bg-transparent hover:bg-transparent"
          onClick={() => setOpen(true)}
        >
          <img
            src="/connect_wallet.png"
            alt="Connect Wallet"
            className="w-[100px] md:w-[300px]"
          />
        </Button>
      </div>

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
    </motion.section>
  );
}

export default HeroSection;