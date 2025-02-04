
import About from '@/app/components/About';
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
<About />
    </div>
    // ...
  );
}
