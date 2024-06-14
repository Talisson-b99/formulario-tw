'use client'
import Logo from './logo'
import MainNavigation from './MainNavigation'
import UsedSpaceWidget from './usedSpaceWidget'
import Profile from './profile'
import { InputControl, InputPrefix, InputRoot } from '../input'
import { Menu, Search } from 'lucide-react'
import * as Collpasible from '@radix-ui/react-collapsible'
import Button from '../button'

const Sidebar = () => {
  return (
    <Collpasible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white px-3 py-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:relative lg:left-auto lg:right-auto lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collpasible.Trigger className="lg:hidden" asChild>
          <Button variant="primary">
            <Menu />
          </Button>
        </Collpasible.Trigger>
      </div>
      <Collpasible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="size-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>
        <MainNavigation />
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>
        <Profile />
      </Collpasible.Content>
    </Collpasible.Root>
  )
}

export default Sidebar
