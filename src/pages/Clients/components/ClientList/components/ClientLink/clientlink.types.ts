import { ReactNode } from "react";

export interface IClientLink {
    children: ReactNode
    handleRowClick?: () => void
}