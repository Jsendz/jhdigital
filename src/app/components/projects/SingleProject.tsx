import { Project } from '@/app/types/project';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const SingleProject = ({ project }: { project: Project }) => {
  const { title, paragraph, btn, btnLink, image,web } = project;
  return (
    
        <div className="bg-white  rounded-xl">
               <div className=' space-y-5 p-5'>
               <div className='w-full flex justify-center'>
               <Image
             src={image}
             width={300}
             height={300}
             alt="Picture of the author"
             className='rounded-xl'
           />
               </div>
               <span
                 className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                 {web}
               </span>
               <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
               {title}
               </h3>
               <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
               {paragraph}
               </p>
               <Link href={btnLink} title=""
                 className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                 role="button">
                 
                 
                 <button className='p-5 bg-slate-800 rounded-xl font-semibold'>{btn}</button>
               </Link>
               </div>
             </div>

  )
}

export default SingleProject;