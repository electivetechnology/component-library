import styled from 'styled-components'

type LegendPointProp = {
  color: string
}

export const LegendPointStyled = styled.div<LegendPointProp>`
  height: 14px;
  width: 15px;
  border-radius: 8px;
  margin: auto;
  ${props =>
    props.color &&
    `
        background-color: ${props.color};
    `};
`

export const LegendStyled = styled.div`
  display: grid;
  grid-template-columns: 18px auto;
  grid-gap: 8px;
`

export  const clearButtonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  marginTop: "10px"
}
