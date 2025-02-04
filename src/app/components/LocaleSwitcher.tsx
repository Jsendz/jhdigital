"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Replace the locale in the current URL
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    // ✅ Update the URL with the new locale
    router.push(newPath);
  };

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")} onChange={handleLocaleChange}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
