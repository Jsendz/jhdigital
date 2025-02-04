import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'cat'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    "/web": {
        "en": "/Web-Services",
        "es": "/Servicios-Web",
        "fr": "/Services-Web",
        "cat": "/Serveis-Web",
    },
    "/marketing": {
        "en": "/Company",
        "es": "/Empresa",
        "fr": "/Société-en-Andorre",
        "cat": "/Empresa",
    },
    "/contenido": {
        "en": "/Real-Estate",
        "es": "/Inmobiliaria",
        "fr": "/Immobilier",
        "cat": "/Immobiliaria",
    },
    "/about": {
        "en": "/About-us",
        "es": "/Quienes-somos?",
        "fr": "/Qui-sommes-nous?",
        "cat": "/Qui-som?",
    },
    "/contact": {
        "en": "/Residency-in-Andorra",
        "es": "/Residencia-en-Andorra",
        "fr": "/Residence-en-Andorre",
        "cat": "/Residencia-a-Andorra",
    },
    "/pricing": {
        "en": "/Residency-in-Andorra",
        "es": "/Residencia-en-Andorra",
        "fr": "/Residence-en-Andorre",
        "cat": "/Residencia-a-Andorra",
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];


export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
