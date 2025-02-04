import HeroSeo from '@/app/components/HeroSeo'
import Seofaq from '@/app/components/Seofaq'
import Seopricing from '@/app/components/Seopricing'
import Seoquest from '@/app/components/Seoquest'
import React from 'react'

export default function page() {
  return (
    <div>
       <HeroSeo /> 
       <Seoquest />
       <Seopricing />
       <Seofaq />
    </div>
  )
}
