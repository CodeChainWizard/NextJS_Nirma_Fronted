'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import FancyButton2 from "@/components/Stylebutton2";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative flex items-center justify-center h-screen bg-[#0d1117] text-white overflow-hidden">
      {/* Floating Background Animations */}
      <motion.div
        className="absolute w-70 h-70 fixed top-1/2 left-20 transform -translate-y-1/2 filter blur-sm opacity-50"
        animate={{ y: ["0%", "20%", "-20%", "0%"], x: ["0%", "10%", "-10%", "0%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/image/loginside.png" alt="Floating Image" width={200} height={200} className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute w-70 h-70 fixed top-1/2 right-20 transform -translate-y-1/2 filter blur-sm opacity-50"
        animate={{ y: ["0%", "20%", "-20%", "0%"], x: ["0%", "10%", "-10%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/image/13.2.png" alt="Floating Image" className="w-full h-full" />
      </motion.div>

      {/* Blurred Colorful Effects */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500 opacity-30 blur-3xl rounded-full top-1/4 left-1/4"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-1/4 right-1/4"
        animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Register Form */}
      <motion.div
        className="w-96 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center">Register for ShippyChain</h2>

        {/* Name Input */}
        <motion.div className="relative mt-6">
          <input
            type="text"
            className="w-full p-3 bg-transparent border border-transparent text-white rounded-lg outline-none focus:border-white hover:border-white transition duration-300 backdrop-blur-md bg-opacity-10"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </motion.div>

        {/* Email Input */}
        <motion.div className="relative mt-6">
          <input
            type="email"
            className="w-full p-3 bg-transparent border border-transparent text-white rounded-lg outline-none focus:border-white hover:border-white transition duration-300 backdrop-blur-md bg-opacity-10"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>

        {/* Password Input */}
        <motion.div className="relative mt-6">
          <input
            type="password"
            className="w-full p-3 bg-transparent border border-transparent text-white rounded-lg outline-none focus:border-white hover:border-white transition duration-300 backdrop-blur-md bg-opacity-10"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>

        {/* Register Button */}
        <div className="w-full flex justify-center items-center mt-6">
          <FancyButton2 />
        </div>
        <div className="w-full flex justify-center mt-4">
        <Link href="/login" className="text-sm text-gray-400 hover:text-white transition duration-300">
            Already have an account? Login
        </Link> 
        </div>
      </motion.div>
    </div>
  )
}
