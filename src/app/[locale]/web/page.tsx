import CTAWeb from '@/app/components/CTAWeb';
import HeroWeb from '@/app/components/Heroweb';
import Process from '@/app/components/Process';
import Projects from '@/app/components/projects/Projects';
import Us from '@/app/components/Us';
import { useTranslations } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
 

  

  
  export default function Page() {
 
  // Once the request locale is set, you
  // can call hooks from `next-intl`

 
  return (
    // ...
    (<div>
      <HeroWeb />
      <CTAWeb />
      <Process />
      <Us/>
      <Projects />
    </div>)
  );
}
