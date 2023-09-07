import { ReactNode } from "react";

export interface IButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  width?: string;
  bgImage?: string;
}

export interface ISButtonProps {
  width?: string;
  bgImage?: string;
}
