import styled from 'styled-components'

type LegendPointProp = {
  color: string
}

export const LegendPointStyled = styled.div<LegendPointProp>`
  height: 14px;
  width: 15px;
  border-radius: 8px;
  margin-right: 8px;
  ${props =>
    props.color &&
    `
        background-color: ${props.color};
    `};
`

export const LegendStyled = styled.div`
  display: flex;
  align-items: center;
`
