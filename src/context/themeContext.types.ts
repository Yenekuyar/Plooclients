import { ReactChild, ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'

export interface IThemeContextData {
    toggleTheme(): void
    theme: DefaultTheme
}

export interface IThemeProps {
    children: ReactNode | any
}