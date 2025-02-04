
import Hero from "@/app/components/Hero"
import ServicesPage from "../components/features/Service";
import Header from "../components/Header";
import Testimonial from "../components/testimonials/Testimonials";
import {setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";


type Props = {
  params: {locale:string}
}

 
export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);


  const t = useTranslations('Index');

  return (
    <div className="w-full h-full bg-white bg-opacity-50  ">
      <Hero />
      <Header />
      <ServicesPage/>
      <Testimonial />
      
    </div>
  );
}
