'use client'
// app/components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold cursor-pointer" aria-label="Homepage">
          MyApp
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Menu */}
        <ul 
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex space-x-4 p-4 md:p-0 transition-all ${isOpen ? "block" : "hidden"}`} 
          role="menu"
        >
          <li role="menuitem">
            <Link href="/about" className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-400">About</Link>
          </li>
          <li role="menuitem">
            <Link href="/services" className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-400">Services</Link>
          </li>
          <li role="menuitem">
            <Link href="/contact" className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
