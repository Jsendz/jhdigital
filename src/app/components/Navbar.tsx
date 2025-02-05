'use client';
// app/components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import NavigationLink from "./NavigationLink";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <nav className="bg-white bg-opacity-70 p-4 shadow-md" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavigationLink href="/" className="text-xl font-bold cursor-pointer" aria-label="Homepage">
          <Image src="/logo.svg" alt="founder's photo" width={100} height={100} className="" />
        </NavigationLink>
        
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
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex space-x-4 text-md md:text-xl p-4 md:p-0 transition-all ${isOpen ? "block" : "hidden"}`}
          role="menu"
        >
          <li className="relative" role="menuitem">
            <button 
              className="flex items-center py-2 md:py-0 px-4 md:px-0 hover:text-gray-400 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              {t("services")} <ChevronDown className="ml-2" size={16} />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
                <li>
                  <NavigationLink href="/web" className="block px-4 py-2 hover:bg-gray-100">{t("web")}</NavigationLink>
                </li>
                <li>
                  <NavigationLink href="/marketing" className="block px-4 py-2 hover:bg-gray-100">{t("seo")}</NavigationLink>
                </li>
                <li>
                  <NavigationLink href="/contenido" className="block px-4 py-2 hover:bg-gray-100">{t("contenido")}</NavigationLink>
                </li>
              </ul>
            )}
          </li>
          <li role="menuitem">
            <NavigationLink href="/about" className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-400">{t("about")}</NavigationLink>
          </li>
          <li role="menuitem">
            <NavigationLink href="/contact" className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-400">{t("contacto")}</NavigationLink>
          </li>
        </ul>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
