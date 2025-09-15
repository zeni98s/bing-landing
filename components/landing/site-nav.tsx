"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MountainIcon, MenuIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";
import Image from "next/image";
import { CONFIG } from "../ui/config";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});


function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
            </motion.div >
            <div className="p-0 ml-2 bg-transparent hover:bg-transparent">
            <img src="/app.png" alt="Bing" width={100} height={40} />
            </div>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              {/* Connect Wallet button with picture */}
              <Button className="p-0 ml-2 bg-transparent hover:bg-transparent" >
                <Link href="/animation" />
                <img src="/connect_wallet.png" alt="Connect Wallet" width={0} height={0} />
              </Button>

              {/* DexScreener button pakai gambar */}
              <Link href="https://letsbonk.fun/">
                <Button className="p-0 ml-2 bg-transparent hover:bg-transparent" >
                  <img src="/bonk.png" alt="Bonk" width={80} height={40} />
                </Button>
              </Link>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed inset-0 z-50 bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <NavLinks />
              <Button variant="outline" className="mt-4">
                Connect Wallet
              </Button>
              <Link href="/animation">
                <Button className="bg-red-600 text-white hover:bg-red-500 mt-2">
                  DexScreener
                </Button>
              </Link>
              <Button variant="ghost" className="mt-4" onClick={toggleMenu}>
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SiteNav;

function NavLinks() {
  return (
    <>
    
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2" >
        <Link
          href="#aboutbing"
          scroll={true}
          prefetch={false}
          className={`${luckiestGuy.className} text-5xl md:text-2xl lg:text-2xl text-red-500`}
        >
          About BING
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2" >
        <Link
          href="#Tokenomics"
          className={`${luckiestGuy.className} text-5xl md:text-2xl lg:text-2xl text-black-400`}
          prefetch={false}
        >
          Tokenomics
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2" >
        <Link
          href={CONFIG.urls.trade}
          className={`${luckiestGuy.className} text-5xl md:text-2xl lg:text-2xl text-yellow-500`}
          prefetch={false}
        >
          How to Buy
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2" >
        <Link
          href={CONFIG.urls.community}
          className={`${luckiestGuy.className} text-5xl md:text-2xl lg:text-2xl text-green-600`}
          prefetch={true}
        >
          Community 
        </Link>
      </motion.div>
    </>
  );
}