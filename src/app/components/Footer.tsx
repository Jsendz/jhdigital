// app/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";


   export default function Footer  ()  {
  return (
    <footer className="bg-white bg-opacity-80 text-slate-800 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image src="/logo.svg" alt="logo" width={100} height={100}   />
            
            


            <p className="text-gray-400 mt-2">Empowering businesses with innovative solutions.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-md font-semibold">Company</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold">Resources</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Support</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-md font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};



