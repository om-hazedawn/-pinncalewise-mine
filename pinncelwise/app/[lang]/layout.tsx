import { ReactNode } from "react";
import { locales } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({
    lang: lang === "zh-HK" ? "zh" : lang,
  }));
}

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;
  return children;
}
