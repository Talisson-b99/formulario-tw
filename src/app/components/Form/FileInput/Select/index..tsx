'use client'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

type SelectInputProps = Select.SelectProps & {
  children: React.ReactNode
  placeholder: string
}

const SelectInput = ({ children, placeholder, ...props }: SelectInputProps) => {
  const [country, setCountry] = useState('br')

  const handleChangeCountry = (value: string) => {
    setCountry(value)
  }

  return (
    <Select.Root onValueChange={handleChangeCountry} {...props}>
      <Select.Trigger className="flex h-11 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 focus:transition-all focus:duration-200 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
        {country && (
          <Select.Icon>
            <span
              className={`fi fi-${country !== 'pacific' ? country : 'br'} size-5`}
            ></span>
          </Select.Icon>
        )}

        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon className="ml-auto">
          <ChevronDown className="size-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          className="z-10 flex max-h-[400px] w-[--radix-select-trigger-width] rounded-lg border border-zinc-200 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-700"
          sideOffset={8}
          asChild
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Select.ScrollUpButton className="flex size-5 h-5 w-full items-center justify-center">
              <ChevronUp />
            </Select.ScrollUpButton>
            <Select.Viewport>{children}</Select.Viewport>
            <Select.ScrollDownButton className="flex size-5 w-full items-center justify-center">
              <ChevronDown />
            </Select.ScrollDownButton>
          </motion.div>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default SelectInput
