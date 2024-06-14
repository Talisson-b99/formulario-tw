import { ComponentProps } from 'react'

type TextArea = ComponentProps<'textarea'>

const TextArea = (props: TextArea) => {
  return (
    <textarea
      className="min-h-[120px] w-full resize-none rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 focus-within:transition-all focus-within:duration-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
      {...props}
    ></textarea>
  )
}

export default TextArea
