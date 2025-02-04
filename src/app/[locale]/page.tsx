
import Hero from "@/app/components/Hero"
import ServicesPage from "../components/features/Service";
import Header from "../components/Header";
import Testimonial from "../components/testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";





 
type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'Index' });

 

  return {
    title: t("title"), // Localized Page Title
    description: t("description"), // Localized Meta Description
    alternates: {
      canonical: `https://jhdigitalservices.com/${locale}`,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://jhdigitalservices.com/${locale}`,
      siteName: "My Website",
      images: [
        {
          url: `https://jhdigitalservices.com/assets/${locale}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`https://jhdigitalservices.com/assets/${locale}/twitter-image.jpg`],
    },
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
