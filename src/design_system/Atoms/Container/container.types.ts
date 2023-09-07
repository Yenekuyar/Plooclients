import { ReactNode } from 'react'

//Interface Styled ContainerProps
export interface ISContainerProps {
  display?: string;
  justifyContent?: string;
  flexDirection?: string;
  alignItems?: string;
  width?: string;
  flexWrap?: string;
  flexBasis?: string;
  overflow?: string;
  backgroundColor?: boolean
  maxHeight?: string;
}

export interface IContainerProps {
  children: ReactNode;
  display?: string
  justifyContent?: string;
  flexDirection?: string;
  alignItems?: string;
  width?: string;
  flexWrap?: string;
  flexBasis?: string;
  overflow?: string;
  backgroundColor?: boolean;
  maxHeight?: string;
};