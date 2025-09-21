import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Luckiest_Guy } from "next/font/google";


const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });


export default function AboutBingSection() {
return (
<motion.section
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5, delay: 0.2 }}
className="w-full min-h-[70vh] flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-cover bg-center"
style={{ backgroundImage: "url('/bg.png')" }}
>
<div className="max-w-7xl w-full px-4 md:px-6 grid gap-8 text-center">
<div className="space-y-3">
<h2 className={`${luckiestGuy.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight`}>
<span className="text-red-600">A</span>
<span className="text-black">B</span>
<span className="text-yellow-500">O</span>
<span className="text-green-600">U</span>
<span className="text-red-600">T</span>
<span> </span>
<span className="text-red-600">B</span>
<span className="text-black">I</span>
<span className="text-yellow-500">N</span>
<span className="text-green-600">G</span>
</h2>
<p className={`${luckiestGuy.className} text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto`}>
BING takes the spirit of Bing — a playful, curious bunny — and brings it to crypto. More than a token, it's a community powered by nostalgia, charm, and meme energy.
</p>
</div>


<div className="flex items-center justify-center">
<div className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px]">
<Image
src="/moon.png"
alt="Bing mascot moon"
width={720}
height={720}
className="rounded-full transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(0,200,255,0.8)]"
priority={false}
/>
</div>
</div>
</div>
</motion.section>
);
}