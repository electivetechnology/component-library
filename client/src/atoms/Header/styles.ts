import { theme } from 'styles/theme'
import styled from 'styled-components'

export const HeaderBorder = styled.div`
  border: 1px solid ${theme.dividerGrey};
  width: 100%;
`

export const HeaderContentStyled = styled.div`
  width: 100%;
  display: flex;
`

type HeaderContentProp = {
  showSection: boolean
}
export const HeaderContent = styled.div<HeaderContentProp>`
  display: none;
  ${(props) =>
    props.showSection &&
    `
        display: block;
    `};
`

export const expandIconStyles = {
  marginLeft: 'auto',
  fill: theme.dividerGrey
}
