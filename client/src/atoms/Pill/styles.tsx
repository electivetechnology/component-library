import styled from 'styled-components'

type PillProp = {
  color: string
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
`
