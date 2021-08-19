import styled from 'styled-components'

type PillProp = {
  color: string
  align: string
}

export const PillStyled = styled.div<PillProp>`
  height: 14px;
  width: 14px;
  border-radius: 8px;
  margin-left: auto;
  ${(props) =>
    props.color &&
    `
      background-color: ${props.color};
    `};
  ${(props) =>
    props.align && props.align === 'left' &&
    `
      margin: 0;
      margin-left: unset;
    `};
`
