import { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";

// Define Props type for Next.js 14 with [locale]
interface Props {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Contact Us - JH Digital Services (${params.locale})`,
    description: "Get in touch with us for inquiries, support, or collaboration opportunities.",
    alternates: {
      canonical: `https://jhdigitalservices.com/${params.locale}/contact`,
    },
    openGraph: {
      title: `Contact Us - JH Digital Services (${params.locale})`,
      description: "Reach out to our team for any questions or project discussions.",
      url: `https://jhdigitalservices.com/${params.locale}/contact`,
      siteName: "JH Digital Services",
      images: [
        {
          url: `https://jhdigitalservices.com/assets/${params.locale}/contact-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Contact JH Digital Services",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Contact Us - JH Digital Services (${params.locale})`,
      description: "Reach out to our team for any inquiries or assistance.",
      images: [`https://jhdigitalservices.com/assets/${params.locale}/contact-twitter-image.jpg`],
    },
  };
}

const ContactPage = ({ params }: Props) => {
  return (
    <section className="py-12 bg-gray-100" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-700 mt-2">We'd love to hear from you! Fill out the form below.</p>
        <ContactForm locale={params.locale} />
      </div>
    </section>
  );
};

export default ContactPage;
