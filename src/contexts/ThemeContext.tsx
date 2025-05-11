import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_DARK'

const darkTheme = {
  ...dark,
  colors: {
    ...dark.colors,
    background: '#0F0D21',
  },
}

const lightTheme = {
  ...light,
  colors: {
    ...light.colors,
    background: '#E2E8FF', // Light blue
  },
}

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
