import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'brand'

export function useTheme(defaultTheme: Theme = 'light') {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark', 'brand')
    root.classList.add(theme)
  }, [theme])

  return { theme, setTheme }
}
