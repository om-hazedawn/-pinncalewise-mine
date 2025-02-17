export type NavItem = {
  title: string
  href: string
  items?: NavItem[]
}

export type FooterItem = {
  title: string
  items: {
    title: string
    href: string
  }[]
}

