import { theme } from 'styles/theme'
import styled from 'styled-components'
import { PositionType } from 'utils/types'

export const ActionBarContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 10px;
  background-color: #2196f3;
  padding: 10px;
  overflow: scroll;
`

type ActionBarProps = {
  colour: string
}

export const ActionBarStyled = styled.div<ActionBarProps>`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`

type ActionBarContentProps = {
  position: PositionType
}
export const ActionBarContentStyled = styled.div<ActionBarContentProps>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  ${(props) =>
    `
      ${props.position === 'start' ? `left: 6px;` : ``}
      ${
        props.position === 'middle'
          ? `left: 50%; transform: translate(-50%, -50%);`
          : ``
      }
      ${props.position === 'end' ? `right: 6px;` : ``}
    `};
`
