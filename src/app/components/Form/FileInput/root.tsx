'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  deleteFile: (fileName: string) => void
}

const FileInputContext = createContext({} as FileInputContextType)

const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  function deleteFile(fileName: string) {
    const fileRemoveded = files.filter((item) => item.name !== fileName)
    setFiles([...fileRemoveded])
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, deleteFile }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)

export default Root
