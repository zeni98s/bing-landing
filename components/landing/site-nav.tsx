"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";
import { CONFIG } from "../ui/config";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

function SiteNav() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <div className="p-0 ml-2 bg-transparent hover:bg-transparent">
              <img src="/app.png" alt="Bing" width={80} height={40} />
            </div>
          </Link>

          {/* Nav links selalu tampil */}
          <nav className="flex gap-2">
            <NavLinks />
          </nav>

          {/* Tombol kanan */}
          <div className="flex items-center gap-2">

            {/* DexScreener button */}
            <Link href="https://letsbonk.fun/">
              <Button className="p-0 ml-2 bg-transparent hover:bg-transparent">
                <img src="/bonk.png" alt="Bonk" width={60} height={40} />
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default SiteNav;

function NavLinks() {
  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2 gap-2">
        <Link
          href="#aboutbing"
          scroll={true}
          prefetch={false}
          className={`${luckiestGuy.className} text-1xl text-red-500`}
        >
          About BING
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2 gap-2">
        <Link
          href="#Tokenomics"
          className={`${luckiestGuy.className} text-1xl text-black-400`}
          prefetch={false}
        >
          Tokenomics
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2">
        <Link
          href={CONFIG.urls.trade}
          className={`${luckiestGuy.className} text-1xl text-yellow-500`}
          prefetch={false}
        >
          How to Buy
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="-mt-2">
        <Link
          href={CONFIG.urls.community}
          className={`${luckiestGuy.className} text-1xl text-green-600`}
          prefetch={true}
        >
          Community
        </Link>
      </motion.div>
    </>
  );
}
