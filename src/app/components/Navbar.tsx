"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Modern Gym
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-700 text-center py-4 md:hidden transition-all duration-300">
          <li className="py-2 border-b border-blue-500">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="py-2 border-b border-blue-500">
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="py-2 border-b border-blue-500">
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className="py-2">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
