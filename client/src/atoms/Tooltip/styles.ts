import { theme } from 'styles/theme'
import styled from 'styled-components'

export const TooltipContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`

type TooltipProp = {
  showTooltip: boolean
  placement: string
}

export const TooltipStyled = styled.span<TooltipProp>`
  visibility: hidden;
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 8px;
  color: ${theme.white};
  background: ${theme.disabledTextGrey};
  font-size: 14px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  z-index: 100;
  white-space: nowrap;
  ${(props) =>
    props.showTooltip &&
    `
      visibility: visible;
    `};
  ${(props) =>
    props.placement &&
    props.placement === 'bottom' &&
    `
      bottom: calc(24px * -1);
    `};
  ${(props) =>
    props.placement &&
    props.placement === 'top' &&
    `
      top: calc(24px * -1);
    `};
  ${(props) =>
    props.placement &&
    props.placement === 'right' &&
    `
      left: calc(100% + 4px);
      top: 50%;
      transform: translateX(0) translateY(-50%);
    `};
  ${(props) =>
    props.placement &&
    props.placement === 'left' &&
    `
      left: auto;
      right: calc(100% + 4px);
      top: 50%;
      transform: translateX(0) translateY(-50%);
    `};
`
