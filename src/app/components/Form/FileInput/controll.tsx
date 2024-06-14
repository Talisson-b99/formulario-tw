'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

type ControllProps = ComponentProps<'input'>

const Controll = ({ multiple = false, ...props }: ControllProps) => {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    // eslint-disable-next-line no-useless-return
    if (!e.target.files?.length) return

    const files = Array.from(e.target.files)

    onFilesSelected(files, multiple)
  }
  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}

export default Controll
