import Image from 'next/image'
import React from 'react'


export default function About() {
  return (
    <section className="bg-white bg-opacity-50 dark:bg-gray-900 ">
        <div className="gap-16 items-center py-8 px-4 overflow-hidden  mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 h-full  sm:h-[750px] lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 w-full sm:w-[640px] md:w-[580px] xl:w-[700px] mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Asegurate de estar siempre al frente</h2>
                <p className="mb-4 md:pr-32 lg:pl-0">En JH Digital Services nos encargamos del aspecto SEO para ti. Des de On-page a oof-page SEO y digital marketing para ayudar a dar mas posibilidad a tu pagina web. Mas visibilidad igual a mas trafico en tu negocio digital lo que resulta en el exito asegurado.</p>
            </div>
            <div className="flex flex-row justify-evenly lg:justify-start xl:justify-evenly mt-8 w-full lg:w-[640px] h-full -ml-10 sm:ml-10 md:-mt-32 lg:-mt-0">
                <div className='sm:flex items-center hidden lg:hidden xl:flex mr-7'>
                    <div className=' w-44 '>
                        <Image className=" w-full  rounded-lg mt-32 " src="/images/heroseo/equipo.jpg" alt="office content 2" width={300}
                      height={100}/>
                      </div>
                </div>
                <div className='flex flex-col sm:justify-end mr-7 '>
                    <div className=' w-44   mb-2'>
                        <Image className="w-full rounded-lg   " src="/images/heroseo/despa.jpg" alt="office content 1" width={300}
                      height={100} />
                      </div>
                    <div className=' w-44  '>
                        <Image className="mt-4 w-full  rounded-lg " src="/images/heroseo/equipo.jpg" alt="office content 2" width={300}
                      height={100}/>
                      </div>
                </div>
                <div className='flex flex-col items-center mt-20 sm:mt-0'>
                    <div className=' w-44   mb-2'>
                        <Image className="w-full rounded-lg " src="/images/heroseo/despa.jpg" alt="office content 1" width={300}
                      height={100} />
                      </div>
                    <div className=' w-44  '>
                        <Image className=" w-full rounded-lg mt-4  " src="/images/heroseo/equipo.jpg" alt="office content 2" width={300}
                      height={100}/>
                      </div>
                </div>
                
               
                      
            </div>
        </div>
    </section>
  )
}
