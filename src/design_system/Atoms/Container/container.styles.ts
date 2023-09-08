import styled from 'styled-components'
import { ISContainerProps } from './container.types'

export const StyledContainer = styled.div<ISContainerProps>`
  margin: 4px;
  padding: 4px;
  display: ${props => props.display || 'relative'};
  justify-content: ${props => props.justifyContent || 'normal'};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection || 'column'};
  width: 100%;
  text-align: center;
  overflow-y: ${props => props.overflowY || 'visible'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  flex-basis: ${props => props.flexBasis || '100%'};
  background-color: ${props => props.backgroundColor || false ? props.theme.pallete.primary.main : props.theme.pallete.primary.secondary};
  max-height: ${props => props.maxHeight || ''};
`