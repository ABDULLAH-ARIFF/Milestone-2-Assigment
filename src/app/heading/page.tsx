"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const headings = [
  "Discover Innovation with Us ",   
  "Your Gateway to Cutting-Edge Technology",
  "Transforming Ideas into Reality",
  "Experience the Future of Technology",
  "Innovation at Your Fingertips",
  "Discover Innovation with Us ", 
  "Bringing You the Best in Tech",
  "Revolutionizing the Digital World",
  "Empowering You with Smart Solutions",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center  h-[10px] bg-white text-blue-600 p-6 mb-[7px] text-3xl font-bold">
      <motion.h1
        key={headings[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="text-center">
        {headings[index]}
      </motion.h1>
    </div>
  );
}
