'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

const SelectItem = ({ text, ...props }: SelectItemProps) => {
  return (
    <Select.Item
      className="flex cursor-pointer items-center px-2 py-2.5 outline-none data-[highlighted]:bg-violet-50 dark:data-[highlighted]:bg-zinc-700 dark:hover:data-[highlighted]:bg-zinc-600"
      {...props}
    >
      <Select.ItemText asChild>
        <span className="dark:text-zinc-100">{text}</span>
      </Select.ItemText>
      <Select.ItemIndicator className="ml-auto">
        <Check className="size-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

export default SelectItem
