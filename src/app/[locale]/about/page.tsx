
import About from '@/app/components/About';
import Mission from '@/app/components/Mission';
import { useTranslations } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
 

  
  
  
  export default function Aboutus() {
 
  // Once the request locale is set, you
  // can call hooks from `next-intl`

 
  return (
    <div>
<About />
<Mission />
    </div>
    // ...
  );
}
