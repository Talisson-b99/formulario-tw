'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import TabItem from './tabItem'
import { useState } from 'react'

const tabsItem = [
  {
    value: 'tab1',
    title: 'My details',
  },
  {
    value: 'tab2',
    title: 'Profile',
  },
  {
    value: 'tab3',
    title: 'Password',
  },
  {
    value: 'tab4',
    title: 'Team',
  },
  {
    value: 'tab5',
    title: 'Plan',
  },

  {
    value: 'tab6',
    title: 'Billing',
  },
  {
    value: 'tab7',
    title: 'Email',
  },
  {
    value: 'tab8',
    title: 'Notifications',
  },
  {
    value: 'tab9',
    title: 'Integrations',
  },
  {
    value: 'tab10',
    title: 'API',
  },
]

const SettingsTabs = () => {
  const [isSelected, setIsSelected] = useState('tab1')

  return (
    <Tabs.Root>
      <ScrollArea.Root className="" type="scroll">
        <ScrollArea.Viewport className="overflow-x-scroll">
          <Tabs.List className="mt-6 flex items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {tabsItem.map((item) => (
              <TabItem
                key={item.value}
                isSelected={item.value === isSelected}
                title={item.title}
                value={item.value}
                onClick={() => setIsSelected(item.value)}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
        {/* <ScrollArea.Corner /> */}
      </ScrollArea.Root>
    </Tabs.Root>
  )
}

export default SettingsTabs
