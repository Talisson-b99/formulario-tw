import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export type NavItemProps = {
  title: string
  icon: ElementType
}

const NavItem = ({ title, icon: Icon }: NavItemProps) => {
  return (
    <a
      href="#"
      className="group flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-300 ease-in-out hover:bg-violet-100 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-600" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-600 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:group-hover:text-violet-300" />
    </a>
  )
}

export default NavItem
