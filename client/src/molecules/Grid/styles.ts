import styled from 'styled-components'
import { theme } from 'styles/theme'

type GridContainerProps = {
  grid: string
  isActive: boolean
  transition: string
  transform: string
  activeTransform: string
  width: string
  height: string
  backgroundColor: string
}
export const GridContainerStyled = styled.div<GridContainerProps>`
  display: grid;
  position: absolute;
  padding-right: 8px;
  width: 100%;
  height: 100%;
  transform: translate(102%, -0.5%);
  transition: 0.5s;
  z-index: 100;
  ${props =>
    props.width &&
    `
        width: ${props.width};
    `};
  ${props =>
    props.height &&
    `
        height: ${props.height};
    `};
  ${props =>
    props.backgroundColor &&
    `
        background-color: ${props.backgroundColor};
    `};
  ${props =>
    props.transform &&
    `
        transform: translate(${props.transform});
        transition: ${props.transition};
    `};
  ${props =>
    props.grid &&
    `
        grid-template-columns: ${props.grid};
        grid-gap: 8px;
    `};
  ${props =>
      props.isActive && props.transition && props.activeTransform &&
      `
          transform: translate(${props.activeTransform});
          transition: ${props.transition};
      `};
`

export const CloseButtonStyled = styled.div``

export const ColumnOneStyled = styled.div``

type ColumnProps = {
  display: boolean
}

export const ColumnStyled = styled.div<ColumnProps>`
  display: inline-flex;
  width: 100%;
  height: inherit;
  ${props =>
    props.display &&
    `
        display: none;
    `};
`

type ColumnContentProps = {
  isClosable: boolean
}

export const ColumnContentStyled = styled.div<ColumnContentProps>`
  padding-top: 24px;
  overflow: scroll;
  width: 100%;
  padding-right: 8px;
  ::-webkit-scrollbar {
    display: none;
  }
  // hide scroll bar on firefox
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${props =>
    props.isClosable &&
    `
        padding-right: 0;
    `};
`

export const ColumnCloseStyled = styled.div`
  height: 60px;
`

export const CloseTextStyled = styled.div`
  transform-origin:84px 70px;
  transform:rotate(-90deg);
  font-size: 12px;
  position: relative;
  bottom: 132px;
  left: -12px;
  color: ${theme.grey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`

// New styles
export const DividerStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    height: 100%;
    border: 1px solid ${theme.highlight};
    margin: 0 8px;
  }
`

type ColumnContainerProps = {
  isColumnClosed: boolean
}

export const ColumnContainerStyled = styled.div<ColumnContainerProps>`
  overflow: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  // hide scroll bar on firefox
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: block;
  ${props =>
    props.isColumnClosed &&
    `
        display: inline-flex;
    `};
`

type ColumnHeaderProps = {
  isColumnClosed: boolean
}

export const ColumnHeaderStyled = styled.div<ColumnHeaderProps>`
  flex-direction: row-reverse;
  display: flex;
  justify-content: space-between;
  ${props =>
    props.isColumnClosed &&
    `
        display: flex;
        flex-direction: column-reverse;
        justify-content: start;
        width: auto;
    `};
  @media screen and (min-width: 750px) {
    display: inline-flex;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
  }
`

type ColumnHeadProps = {
  isColumnClosed: boolean
}

export const ColumnHeadStyled = styled.div<ColumnHeadProps>`
  grid-column: 2;
  ${props =>
    props.isColumnClosed &&
    `
        transform: rotate(-180deg);
        writing-mode: vertical-lr;
        position: relative;
    `};
  width: auto;
  ${props =>
    props.isColumnClosed &&
    `
        left: -12px;
    `};
`

export const IconPlaceHolderStyled = styled.div`
  height: 28px;
  width: 24px;
`

type ColumnFoldProps = {
  isColumnClosed: boolean
}

export const ColumnFoldStyled = styled.div<ColumnFoldProps>`
  grid-column: 1;
  position: relative;
  ${props =>
    props.isColumnClosed &&
    `
        transform: rotate(-90deg);
        padding-left: 16px;
        top: 0;
    `};
    @media screen and (min-width: 750px) {
      top: 4px;
    }
  `

export const iconStyle = {
  transform: 'rotate(90deg)',
  paddingRight: '8px'
}

export const iconArrowStyle = {
  height: '20px',
  width: '20px'
}

export const iconCloseStyle = {
  transform: 'rotate(90deg)',
  paddingRight: '8px'
}

type ColumnParentProps = {
  isColumnClosed: boolean
  gridRow?: string
}

export const ColumnParentStyled = styled.div<ColumnParentProps>`
  display: inline-flex;
  width: 98%;
  height: inherit;
  padding-top: 16px;
  ${props =>
    props.isColumnClosed &&
    `
        width: 55px;
  `};
  ${props =>
    props.gridRow &&
    `
        grid-row: ${props.gridRow};
  `};
`

