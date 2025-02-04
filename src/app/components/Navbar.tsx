

import Image from "next/image"
import NavigationLink from './NavigationLink';
import {useTranslations} from 'next-intl';

import {setRequestLocale} from 'next-intl/server';
import LocaleSwitcher from "./LocaleSwitcher";








export default function Navbar() {

  
  
    


    

  return (
    <nav className="bg-white text-slate-800 bg-opacity-60 p-4 shadow-md sticky">
      <div className="container mx-auto flex justify-between items-center">
        <NavigationLink href="/">
        <Image src="/logo.svg" alt="logo" width={100} height={100}   />
        </NavigationLink>
        
        <ul className="flex space-x-4">
          <li>
            <NavigationLink href="/web" className="hover:text-gray-400">Web</NavigationLink>
          </li>
          
          <li>
            <NavigationLink href="/marketing" className="hover:text-gray-400">Services</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/contenido" className="hover:text-gray-400">Content</NavigationLink>
          </li>
          

          <li>
            <NavigationLink href="/about" className="hover:text-gray-400">About</NavigationLink>
            
          </li>
          <li>
            <NavigationLink href="/contact" className="hover:text-gray-400">contact</NavigationLink>
          </li>
          
        </ul>
        <LocaleSwitcher/>
      </div>
    </nav>
    
  )
}

