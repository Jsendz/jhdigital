
import Hero from "@/app/components/Hero"
import ServicesPage from "../components/features/Service";
import Header from "../components/Header";
import Testimonial from "../components/testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { Metadata, ResolvingMetadata } from "next";





 
// Define Props type for correct usage with Next.js
type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

// Dynamic SEO Metadata
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const locale = (await params).locale;

  // Fetch translations
  const t = await getTranslations({ locale, namespace: "Index" });

  // Access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

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
