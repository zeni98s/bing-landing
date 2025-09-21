"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Luckiest_Guy } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";
import { CONFIG } from "../ui/config";


const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });


export default function LinksSection() {
const [open, setOpen] = useState(false);


return (
<motion.section
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="w-full py-12 md:py-20 bg-cover bg-center"
style={{ backgroundImage: "url('/bg.png')" }}
>
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className={`${luckiestGuy.className} text-3xl md:text-5xl mb-6`}>B I N G</h2>
<p className={`${luckiestGuy.className} mx-auto max-w-2xl text-sm md:text-lg`}>Wholesome vibes, fun memes & community power</p>


<div className="mt-8 flex flex-col md:flex-row md:justify-center gap-6 items-center">
<Link href={CONFIG.urls.dexscreener} target="_blank" rel="noopener noreferrer">
<Button className="p-0 bg-transparent hover:bg-transparent">
<Image src="/dex.png" alt="Dex" width={300} height={64} className="w-[160px] md:w-[300px]" />
</Button>
</Link>


<Button className="p-0 bg-transparent hover:bg-transparent" onClick={() => setOpen(true)}>
<Image src="/connect_wallet.png" alt="Connect Wallet" width={300} height={64} className="w-[140px] md:w-[300px]" />
</Button>
</div>


{open && (
<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
<div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
<h2 className="text-2xl font-bold text-gray-800 mb-4">🚧 Coming Soon 🚧</h2>
<p className="text-gray-600 mb-6">Wallet connection feature will be available soon!</p>
<Button className="bg-red-600 text-white hover:bg-red-500" onClick={() => setOpen(false)}>Close</Button>
</div>
</div>
)}
</div>
</motion.section>
);
}