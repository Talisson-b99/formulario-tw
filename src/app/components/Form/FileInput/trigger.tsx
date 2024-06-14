'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './root'

const Trigger = () => {
  const { id } = useFileInput()
  return (
    <label
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-zinc-500 shadow-sm transition-all duration-200 ease-in hover:border-violet-100 hover:bg-violet-25 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
      htmlFor={id}
    >
      <div className="flex size-12 items-center justify-center rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 transition-all duration-200 ease-in group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="dark:group-hover-text-violet-300 size-5 text-zinc-600 transition-all duration-200 ease-in group-hover:text-violet-600 dark:text-zinc-500" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-bold text-violet-700 dark:text-violet-500">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}

export default Trigger
