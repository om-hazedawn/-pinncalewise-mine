import type { NavItem, FooterItem } from "../types/navigation"

export const navigationItems: Record<string, NavItem[]> = {
  en: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Company Formation",
      href: "/company-formation",
    },
    {
      title: "Company Dissolution",
      href: "/company-dissolution",
    },
    {
      title: "Company Secretary",
      href: "/company-secretary",
    },
    {
      title: "Accounting",
      href: "/accounting",
    },
    {
      title: "Tax Filing",
      href: "/tax-filing",
    },
    {
      title: "Audit Services",
      href: "/audit",
    },
    {
      title: "Other Services",
      href: "/other-services",
      items: [
        {
          title: "Share Transfer",
          href: "/other-services/share-transfer",
        },
        {
          title: "Virtual Office",
          href: "/other-services/virtual-office",
        },
      ],
    },
    {
      title: "Tools",
      href: "/tools",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  zh: [
    {
      title: "主頁",
      href: "/",
    },
    {
      title: "開公司",
      href: "/company-formation",
    },
    {
      title: "註銷公司",
      href: "/company-dissolution",
    },
    {
      title: "公司秘書服務",
      href: "/company-secretary",
    },
    {
      title: "會計理賬",
      href: "/accounting",
    },
    {
      title: "報稅服務",
      href: "/tax-filing",
    },
    {
      title: "核數服務",
      href: "/audit",
    },
    {
      title: "其他服務",
      href: "/other-services",
      items: [
        {
          title: "Share Transfer",
          href: "/other-services/share-transfer",
        },
        {
          title: "Virtual Office",
          href: "/other-services/virtual-office",
        },
      ],
    },
    {
      title: "實用工具",
      href: "/tools",
    },
    {
      title: "慧思博客",
      href: "/blog",
    },
    {
      title: "聯絡我們",
      href: "/contact",
    },
  ],
}

export const footerItems: Record<string, FooterItem[]> = {
  en: [
    {
      title: "Company",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Pricing", href: "/pricing" },
        { title: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  zh: [
    {
      title: "公司",
      items: [
        { title: "關於我們", href: "/about" },
        { title: "服務", href: "/services" },
        { title: "價格", href: "/pricing" },
        { title: "聯絡我們", href: "/contact" },
      ],
    },
    {
      title: "法律",
      items: [
        { title: "私隱政策", href: "/privacy" },
        { title: "服務條款", href: "/terms" },
      ],
    },
  ],
}

