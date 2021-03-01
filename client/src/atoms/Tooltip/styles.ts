import { theme } from 'styles/theme'
import styled from 'styled-components'

type TooltipLabelProp = {
  fontSize?: string
}

export const TooltipLabelStyled = styled.span<TooltipLabelProp>`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
  ${(props) =>
    props.fontSize &&
    `
      font-size: ${props.fontSize};
    `};
`

type TooltipProp = {
  placement: string
}

export const TooltipStyled = styled.span<TooltipProp>`
  position: relative;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
  &:before {
    content: attr(data-text); /* here's the magic */
    position: absolute;
    border-radius: 4px;
    color: ${theme.white};
    background: ${theme.disabledTextGrey};
    padding: 2px 8px;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    width: auto;
    height: auto;

    display: none;

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
  }
  &:hover:before {
    display: block;
  }
`
