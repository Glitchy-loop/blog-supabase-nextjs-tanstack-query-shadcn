interface NavItem {
  name: string
  href: string
}

interface HamburgerProps {
  open: boolean
  setOpen: (open: boolean) => void
  navItems: NavItem[]
}

export interface PostType {
  index: number
  id: number
  title: string
  image: string
  created_at: string
}
