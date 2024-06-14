'use client'
import { ComponentProps } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

type TabItemProps = ComponentProps<'button'> & {
  value: string
  title: string
  isSelected?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TabItem = ({
  value,
  title,
  isSelected = false,
  ...props
}: TabItemProps) => {
  return (
    <Tabs.Trigger
      value={value}
      className="relative h-full w-full px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-500 dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
      {...props}
    >
      <span className="truncate">{title}</span>

      {isSelected ? (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      ) : null}
    </Tabs.Trigger>
  )
}

export default TabItem
