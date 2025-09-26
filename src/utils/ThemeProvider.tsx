import { ReactNode } from 'react'
import { Theme, useTheme } from './useTheme'

type Props = {
  initialTheme?: Theme
  children: ReactNode
}

export const ThemeProvider = ({ initialTheme = 'light', children }: Props) => {
  useTheme(initialTheme)
  return <>{children}</>
}
