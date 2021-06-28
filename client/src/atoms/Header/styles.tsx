import { theme } from 'styles/theme'
import styled from 'styled-components'

export const HeaderBorder = styled.div`
  border: 1px solid ${theme.dividerGrey};
  width: 100%;
`

type HeaderProps = {
  noScroll: boolean
}

export const HeaderContainer = styled.div<HeaderProps>`
  display: contents;
  ${(props) =>
    props.noScroll &&
    `
        display: table;
    `};
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
        flex-grow: 1;
        max-height: fit-content;
        overflow-x: hidden;
        overflow-y: auto;
    `};
`

export const expandIconStyles = {
  marginLeft: 'auto',
  fill: theme.dividerGrey
}
