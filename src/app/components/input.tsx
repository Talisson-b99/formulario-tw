import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export const InputControl = (props: InputControlProps) => {
  return (
    <input
      className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      type="text"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export const InputRoot = (props: InputControlProps) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 focus-within:transition-all focus-within:duration-200 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/30">
      <div className="flex items-center gap-2" {...props}></div>
    </div>
  )
}
