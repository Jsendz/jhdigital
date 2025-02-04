import CTAWeb from '@/app/components/CTAWeb';
import HeroWeb from '@/app/components/Heroweb';
import Process from '@/app/components/Process';
import Projects from '@/app/components/projects/Projects';
import Us from '@/app/components/Us';
import { useTranslations } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
 
type Props = {
    params: {locale: string};
  };
  
  
  
  export default function PathnamesPage({params: {locale}}: Props) {
 
  // Once the request locale is set, you
  // can call hooks from `next-intl`
  setRequestLocale(locale);
  const t = useTranslations('IndexPage');
 
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
