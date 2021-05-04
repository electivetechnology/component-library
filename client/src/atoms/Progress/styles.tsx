import styled from "styled-components"
import { theme } from "styles/theme"

type ProgressProps = {
  borderColor: string
  fill: string
}

export const ProgressStyled = styled.div<ProgressProps>`
  height: 36px;
  width: 36px;
  border-radius: 20px;
  ${(props) =>
    props.borderColor &&
    `
      border: 1px solid ${props.borderColor};
  `};
  ${(props) =>
    props.fill &&
    `
      background-color: ${props.fill};
  `};
`
