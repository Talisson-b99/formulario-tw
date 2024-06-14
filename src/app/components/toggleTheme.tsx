'use client'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from 'next-themes'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  function handleTheme() {
    const themeSelected = theme === 'dark' ? 'light' : 'dark'
    setTheme(themeSelected)
  }
  return (
    <div>
      <button onClick={() => handleTheme()}>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </button>
    </div>
  )
}

export default ToggleTheme
