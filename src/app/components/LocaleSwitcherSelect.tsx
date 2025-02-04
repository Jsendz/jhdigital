"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void; // ✅ Now required
};

export default function LocaleSwitcherSelect({ children, defaultValue, label, onChange }: Props) {
  const [isPending] = useTransition();

  return (
    <label className={clsx("relative text-gray-400", isPending && "transition-opacity [&:disabled]:opacity-30")}>
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onChange} // ✅ Now properly forwarded
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}
