import Hero from "@/app/components/Hero";
import ServicesPage from "../components/features/Service";
import Header from "../components/Header";
import Testimonial from "../components/testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";

// Define Props type for correct usage with Next.js
type Props = {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Dynamic SEO Metadata
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const { locale } = params;

  // Fetch translations
  const t = await getTranslations({ locale, namespace: "Index" });

  // Access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://jhdigitalservices.com/${locale}`,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://jhdigitalservices.com/${locale}`,
      siteName: "My Website",
      images: [
        `https://jhdigitalservices.com/assets/${locale}/og-image.jpg`,
        ...previousImages,
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

export default function Page({ params, searchParams }: Props) {
  return (
    <main className="w-full h-full bg-white bg-opacity-50">
      <Hero />
      <Header />
      <ServicesPage />
      <Testimonial />
    </main>
  );
}
