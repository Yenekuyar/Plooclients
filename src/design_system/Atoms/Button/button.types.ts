import { ReactNode } from 'react'

export type IButtonProps = {
  type: 'button' | 'submit' | 'reset',
  children: ReactNode
}