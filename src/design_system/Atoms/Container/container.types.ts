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
  overflowY?: string;
  overflowX?: string;
  backgroundColor?: boolean
  maxHeight?: string;
  position?: string;
  top?: string;
  left?: string;
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
  overflowY?: string;
  overflowX?: string;
  backgroundColor?: boolean;
  maxHeight?: string;
  position?: string;
  top?: string
  left?: string;
};