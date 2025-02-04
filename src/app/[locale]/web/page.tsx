import CTAWeb from '@/app/components/CTAWeb';
import HeroWeb from '@/app/components/Heroweb';
import Process from '@/app/components/Process';
import Projects from '@/app/components/projects/Projects';
import Us from '@/app/components/Us';
import { useTranslations } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
 

  
import { Metadata } from 'next';

// SEO Metadata
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = useTranslations();

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    alternates: {
      canonical: `https://jhdigitalservices.com/${params.locale}`,
    },
    openGraph: {
      title: t('pageTitle'),
      description: t('pageDescription'),
      url: `https://jhdigitalservices.com/${params.locale}`,
      siteName: "Your Website",
      images: [
        {
          url: `https://jhdigitalservices.com/assets/${params.locale}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t('pageTitle'),
      description: t('pageDescription'),
      images: [`https://jhdigitalservices.com/assets/${params.locale}/twitter-image.jpg`],
    },
  };
}
  
  export default function Page() {
 
  // Once the request locale is set, you
  // can call hooks from `next-intl`

 
  return (
    <div>
        <HeroWeb />
        <CTAWeb />
        <Process />
        <Us/>
        <Projects />

    </div>
    // ...
  );
}
