import styled from 'styled-components'
import { theme } from 'styles/theme'



export const SelectContainerStyled = styled.div`
  border: 1px ${theme.Gray} solid;
`

type SelectProp = {

}

export const SelectStyled = styled.div<SelectProp>`
  border: 1px ${theme.Gray} solid;
`

type OptionProp = {
  active: boolean
}

export const OptionStyled = styled.div<OptionProp>`
  cursor: pointer;
  border: 1px ${theme.Gray} solid;
  ${(props) =>
    props.active &&
    `
        color: green;
    `};
`
