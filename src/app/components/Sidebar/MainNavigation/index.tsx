import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import NavItem from './navItem'

const menu = [
  {
    title: 'Home',
    icon: Home,
  },
  {
    title: 'Dashboard',
    icon: BarChart,
  },
  {
    title: 'Projects',
    icon: SquareStack,
  },
  {
    title: 'Tasks',
    icon: CheckSquare,
  },
  {
    title: 'Reporting',
    icon: Flag,
  },
  {
    title: 'Users',
    icon: Users,
  },
]

const MainNavigation = () => {
  return (
    <nav className="flex flex-1 flex-col space-y-1">
      {menu.map((item) => (
        <NavItem key={item.title} title={item.title} icon={item.icon} />
      ))}
    </nav>
  )
}

export default MainNavigation
