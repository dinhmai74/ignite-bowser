// @ts-ignore
import React, { useContext } from "react"
import { useTheme } from "@ui-kitten/components"
import { Color } from "./color-model"

export const AppThemeContext = React.createContext({
  theme: "light",
  toggle: () => {},
})

interface UseThemes {
  toggle: () => void
  color: Color
}

export const useThemes = (): UseThemes => {
  const themeContext = useContext(AppThemeContext)
  const toggle = () => {
    themeContext.toggle()
  }

  return {
    toggle,
    // @ts-ignore
    color: useTheme(),
  }
}

