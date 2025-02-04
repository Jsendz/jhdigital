import Image from 'next/image'
import React from 'react'

export default function HeroSeo() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Asegurate de estar siempre al frente</h2>
            <p className="mb-4">En JH Digital Services nos encargamos del aspecto SEO para ti. Des de On-page a oof-page SEO y digital marketing para ayudar a dar mas posibilidad a tu pagina web. Mas visibilidad igual a mas trafico en tu negocio digital lo que resulta en el exito asegurado.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image className="w-full rounded-lg" src="/images/heroseo/despa.jpg" alt="office content 1" width={500}
                  height={500} />
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/heroseo/equipo.jpg" alt="office content 2" width={500}
                  height={500}/>
        </div>
    </div>
</section>
  )
}
