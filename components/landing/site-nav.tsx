"use client";


import React from "react";
import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";
import { Button } from "../ui/button";
import { CONFIG } from "../ui/config";


const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });


export default function SiteNav() {
return (
<header className="absolute top-0 left-0 w-full z-50 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
>
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 backdrop-blur-sm">
<Link href="#" className="flex items-center gap-2" prefetch={false}>
<img src="/app.png" alt="Bing logo" className="w-20 h-auto" />
</Link>


<nav className="flex items-center gap-4">
<a href="#aboutbing" className={`${luckiestGuy.className} text-lg text-red-500`}>About BING</a>
<a href="#Tokenomics" className={`${luckiestGuy.className} text-lg text-black`}>Tokenomics</a>
<a href={CONFIG.urls.trade} className={`${luckiestGuy.className} text-lg text-yellow-500`} target="_blank" rel="noreferrer">How to Buy</a>
<a href={CONFIG.urls.community} className={`${luckiestGuy.className} text-lg text-green-600`} target="_blank" rel="noreferrer">Community</a>
</nav>


<div className="flex items-center gap-2">
<a href="https://letsbonk.fun/" target="_blank" rel="noreferrer">
<Button className="p-0 bg-transparent hover:bg-transparent">
<img src="/bonk.png" alt="Bonk" className="w-14 h-auto" />
</Button>
</a>
</div>
</div>
</header>
);
}