'use client'

import { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative flex items-center justify-center h-screen bg-[#0d1117] text-white overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-500 opacity-30 blur-3xl rounded-full top-1/4 left-1/3"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-teal-500 opacity-20 blur-3xl rounded-full bottom-1/4 right-1/3"
        animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      {/* Register Form */}
      <motion.div
        className="w-96 bg-gray-900 bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center">Register for Web3</h2>
        
        {/* Username Input */}
        <motion.div className="relative mt-6">
          <input
            type="text"
            className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </motion.div>

        {/* Email Input */}
        <motion.div className="relative mt-6">
          <input
            type="email"
            className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>

        {/* Password Input */}
        <motion.div className="relative mt-6">
          <input
            type="password"
            className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>
        
        {/* Submit Button */}
        <motion.button
          className="w-full mt-6 py-3 rounded-lg text-lg font-semibold bg-transparent border border-pink-500 text-white hover:bg-pink-500 hover:text-black transition duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,20,147,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.button>
      </motion.div>
    </div>
  );
}