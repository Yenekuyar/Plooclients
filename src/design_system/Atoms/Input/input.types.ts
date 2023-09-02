import { InputHTMLAttributes } from "react"

export type IInputProps = {
  type: string,
  placeholder: string,
  id: string | number,
} & InputHTMLAttributes<HTMLInputElement>