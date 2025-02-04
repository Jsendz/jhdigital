import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {ReactNode} from 'react';
import Navbar from '@/app/components/Navbar'
import "./globals.css"; 
import Footer from '../components/Footer';

type Props = {
  children: ReactNode;
  params: {locale: string};
}



export async function generateMetadata({params: {locale}} : Props) {
  const t = await getTranslations({locale, namespace: 'Index'});
 
  return {
    title: t('title')
  };
}



 
export default async function LocaleLayout({children, params: {locale}}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className="bg-fondo bg-cover bg-no-repeat">
        <NextIntlClientProvider messages={messages}>
          <Navbar  />
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}




