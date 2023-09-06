import styled from 'styled-components'
import { ISContainerProps } from './container.types'

export const StyledContainer = styled.div<ISContainerProps>`
  margin: 4px;
  padding: 4px;
  display: ${props => props.display || 'relative'};
  justify-content: ${props => props.justifyContent || 'normal'};
  flex-direction: ${props => props.flexDirection || 'column'};
  width: 100%;
  text-align: center;
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  flex-basis: ${props => props.flexBasis || '100%'};
`