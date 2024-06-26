import { LifeBuoy, Settings } from 'lucide-react'
import NavItem from './MainNavigation/navItem'

const UsedSpaceWidget = () => {
  return (
    <div className="flex flex-col gap-6">
      <nav className="space-y-1">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Settings} />
      </nav>
      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
        <div className="space-y-1">
          <span className="block text-sm font-medium text-violet-700 dark:text-zinc-100">
            Used space
          </span>
          <span className="block text-sm text-violet-500 dark:text-zinc-400">
            Your team has used 80% of your available space. Need more?
          </span>
        </div>

        <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
          <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-zinc-400"></div>
        </div>

        <div className="space-x-3">
          <button className="text-sm font-semibold text-violet-500 dark:text-violet-300">
            Dimiss
          </button>
          <button className="text-sm font-semibold text-violet-700 dark:text-zinc-300">
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsedSpaceWidget
