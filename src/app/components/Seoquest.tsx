import Image from 'next/image'
import React from 'react'

export default function Seoquest() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image className="w-full dark:hidden rounded-xl" src="/fondo.jpg" alt="dashboard image" width={500}
                  height={500}/>
       
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <button className='p-5 rounded-xl bg-cyan-400 text-slate-800'>Analisis gratuito de tu sitio web</button>
        </div>
    </div>
</section>
  )
}
