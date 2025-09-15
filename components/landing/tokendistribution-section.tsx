"use client"

import { motion } from "framer-motion"
import React from "react"
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"
import { Luckiest_Guy } from "next/font/google"

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
})

const tokenomics = {
  distribution: [
    { category: "Public Sale", percentage: 40, color: "#FF6384" },
    { category: "Team", percentage: 20, color: "#36A2EB" },
    { category: "Community Rewards", percentage: 15, color: "#FFCE56" },
    { category: "Advisors", percentage: 5, color: "#4BC0C0" },
    { category: "Liquidity", percentage: 10, color: "#9966FF" },
    { category: "Foundation", percentage: 10, color: "#FF9F40" },
  ],
}

export default function TokenDistributionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-20 bg-transparent-to-b from-yellow-100 to-white"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2
          className={`${luckiestGuy.className} text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed`}
        >
          Token Distribution
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-15">
          {/* Chart */}
          <div className="flex lg:w-1/2 h-64 sm:h-72 md:h-80">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={tokenomics.distribution}
                  dataKey="percentage"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {tokenomics.distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* List Details */}
          <div className="w-full lg:w-1/2 space-y-4 text-left">
            {tokenomics.distribution.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span
                  className="inline-block w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-lg sm:text-lg font-medium text-gray-700">
                  {item.category}:{" "}
                  <span className="font-bold text-gray-900">
                    {item.percentage}%
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}