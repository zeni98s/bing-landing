import { motion } from "framer-motion";
import { BrushIcon, LineChartIcon, CuboidIcon, PencilIcon } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { Luckiest_Guy } from "next/font/google";
import Image from "next/image"

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className={`${luckiestGuy.className} text-5xl md:text-6xl lg:text-7xl`} >
            <span className="text-red-600">A</span>
            <span className="text-black-600">B</span>
            <span className="text-yellow-500">O</span>
            <span className="text-green-600">U</span>
            <span className="text-red-600">T</span>
            <span className="text-red-600"> </span>
            <span className="text-red-600">B</span>
            <span className="text-black-600">I</span>
            <span className="text-yellow-500">N</span>
            <span className="text-green-600">G</span>
          </h2>
          <p className={`${luckiestGuy.className} text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed`}>
            BING takes the spirit of Bing a playful, curious bunny and brings it to crypto. More than a token, it's a community powered by nostalgia, charm, and meme energy.
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center p-0 bg-transparent hover:bg-transparent">
  <Image
    src="/moon.png"
    alt="Text & Image Animations"
    width={300}
    height={200}
    className="mx-auto rounded-full hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(0,200,255,0.8)] transition-all duration-500 ease-in-out"
  />
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturesSection;

// @ts-ignore
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}