'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Login from "./login/page"; // Ensure correct case
// import Register from "./register";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [activePage, setActivePage] = useState("home");
  const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0 });

useEffect(() => {
  const moveCursor = (e: MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorStyle({ top: e.clientY, left: e.clientX });
    });
  };
  window.addEventListener("mousemove", moveCursor);
  return () => window.removeEventListener("mousemove", moveCursor);
}, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0d1117] text-white overflow-hidden">
      {/* 3D Animated Cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-purple-500 opacity-50 blur-md"
        style={{ top: cursorStyle.top, left: cursorStyle.left, transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      />

      {/* Blob Background Animation */}
      <div className="absolute w-full h-full">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-50"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-50"
          animate={{ scale: [1, 1.5, 1], rotate: [360, 0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        className="absolute top-6 w-full flex justify-between items-center px-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-xl font-bold">Web3 UI</div>
        <div className="flex space-x-6">
          {["home", "about", "products"].map((page) => (
            <motion.a
              key={page}
              onClick={() => {
                setActivePage(page);
                console.log("Active Page:", page); // Debugging
              }}
              className={`cursor-pointer text-lg ${
                activePage === page ? "text-purple-400" : "text-white"
              } hover:text-purple-400 transition duration-300`}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </motion.a>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={() => {
              setActivePage("login");
              console.log("Navigating to Login"); // Debugging
            }}
            className="border border-white px-4 py-2 rounded-lg text-white bg-transparent hover:bg-purple-500 transition duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(128,0,128,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button
            onClick={() => {
              setActivePage("register");
              console.log("Navigating to Register"); // Debugging
            }}
            className="border border-white px-4 py-2 rounded-lg text-white bg-transparent hover:bg-blue-500 transition duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </div>
      </motion.nav>

      {/* Dynamic Page Rendering */}
      <motion.div
        className="relative w-full flex items-center justify-center min-h-screen"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {activePage === "home" && (
          <motion.div
            className="text-center text-4xl font-extrabold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Web3 UI 🚀
          </motion.div>
        )}
        {activePage === "about" && (
          <motion.div
            className="text-center text-3xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us - Web3 Revolution 🌍
          </motion.div>
        )}
        {activePage === "products" && (
          <motion.div
            className="text-center text-3xl font-bold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Web3 Products 🚀🔥
          </motion.div>
        )}
        {activePage === "login" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Login /> */}
          </motion.div>
        )}
        {activePage === "register" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Register /> */}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
