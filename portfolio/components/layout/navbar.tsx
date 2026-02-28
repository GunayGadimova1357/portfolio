"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-8 z-50 bg-[var(--chrome-surface)]/90 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="text-white text-xl font-medium tracking-tight">
        Gunay
      </Link>

      <ul 
        className="flex items-center gap-1"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navItems.map((item, index) => (
          <li key={item.name} className="relative">
            <Link
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative z-10 px-5 py-2 text-[15px] text-white/70 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>

            {hoveredIndex === index && (
              <motion.div
                layoutId="nav-hover-bg"
                className="absolute inset-0 bg-white/10 rounded-full -z-0"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
