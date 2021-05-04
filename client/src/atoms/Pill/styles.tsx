import styled from 'styled-components'

type PillProp = {
  color: string
}

export const PillStyled = styled.div<PillProp>`
  height: 14px;
  width: 14px;
  background-color: red;
  border-radius: 8px;
  margin-left: auto;
  ${(props) =>
    props.color &&
    `
      color: ${props.color};
    `};

`
