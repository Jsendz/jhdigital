
import Hero from "@/app/components/Hero"
import ServicesPage from "../components/features/Service";
import Header from "../components/Header";
import Testimonial from "../components/testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";


type Props = {
  children: ReactNode;
  params: {locale: string};
};


 
// Define Props type for correct usage with Next.js
export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'Index'});

  return {
    title: t('title')
  };
}

export default function IndexPage() {

  return (
    <div className="w-full h-full bg-white bg-opacity-50  ">
      <Hero />
      <Header />
      <ServicesPage/>
      <Testimonial />
      
    </div>
  );
}
