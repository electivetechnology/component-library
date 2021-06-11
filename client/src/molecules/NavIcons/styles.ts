import { theme } from 'styles/theme'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const iconStyles = makeStyles({
  Icon: (props: any) => ({
    fill: props.selected && !props.roundIcon ? theme.white : theme.primaryGrey,
    margin: props.horizontal ? 'unset' : 'auto',
    height: '24px',
    width: '24px'
  })
})

type NavigationContainerProps = {
  horizontal?: boolean
  expandSubMenu?: boolean
  showSubMenu?: boolean
  backgroundColor: string
}
export const NavigationContainerStyled = styled.div<NavigationContainerProps>`
  height: 100%;
  width: auto;
  background-color: ${theme.grayAthens};
  max-width: 56px;
  ${(props) =>
    props.horizontal &&
    `
      width: 100%;
      height: auto;
      background-color: ${theme.grayAthens};
      box-shadow: 0px 1px 3px ${theme.borderGrey};
      border-radius: 12px;
      padding: 6px 18px;
      width: revert;
      max-width: none;
      overflow-x: scroll;
    `};
  ${(props) =>
    props.horizontal && props.expandSubMenu &&
    `
      border-radius: 12px 12px 0 0;
    `};
  ${(props) =>
    props.horizontal && props.showSubMenu &&
    `
      border-radius: 0 0 12px 12px;
    `};
  ${(props) =>
    props.backgroundColor && 
    `
      background-color: ${props.backgroundColor};
    `};
`

type NavigationContentProps = {
  horizontal?: boolean
}

export const NavigationContentStyled = styled.div<NavigationContentProps>`
  margin: 0 8px;
  ${(props) =>
    props.horizontal &&
    `
      display: inline-flex;
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: auto auto;
      height: 36px;
    `};
`

export const SubMenuStyled = styled.div`
  margin: auto 0 auto auto;
  @media screen and (min-width: 750px) {
    display: none;
  }
`

export const VerticalDividerStyled = styled.div`
  border: 1px solid ${theme.dividerGrey};
  margin: 16px 0;
`

export const HorizontalDividerStyled = styled.div`
  border: 1px solid ${theme.dividerGrey};
  margin: 0 16px;
`

type IconStyledProps = {
  selected: boolean
  horizontal?: boolean
  roundIcon?: boolean
}

export const IconStyled = styled.div<IconStyledProps>`
  height: 32px;
  width: 42px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin: 6px 0;
  cursor: pointer;
  background-color: transparent;
  @media screen and (min-width: 960px) {
    &:hover {
      background-color: ${theme.dividerGrey};
    }
  }
  ${(props) =>
    props.horizontal &&
    `
      height: 18px;
      width: 26px;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 8px;
      margin: 0 3px;
      @media screen and (min-width: 960px) {
        &:hover {
          background-color: ${theme.hoverBlue};
        }
      }
    `};
  ${(props) =>
    props.roundIcon &&
    `
      padding: 8px 4px;
      border-radius: 24px;
      border: 1px solid ${theme.primaryGrey};
      margin: 0 8px 0 0;
      @media screen and (min-width: 960px) {
        &:hover {
          background-color: ${theme.hoverBlue};
        }
      }
    `};
  ${(props) =>
    props.selected &&
    `
      background-color: ${theme.primaryGrey};
    `};
`

export const HorizontalBarContainerStyled = styled.div`
  background-color: ${theme.grayAthens};
  box-shadow: 0px 1px 3px ${theme.borderGrey};
  border-radius: 12px;
  padding: 4px 24px;
  display: grid;
  grid-template-columns: auto auto;
`

export const HorizontalLeftTitleStyled = styled.div`
  padding-right: 8px;
  margin: auto 0;
`

export const HorizontalRightTitleStyled = styled.div`
  padding-right: 8px;
  margin: auto 0;
  margin-left: auto;
`

export const HorizontalBarItemsStyled = styled.div`
  display: inline-flex;
`

export const NavIconMenuStyled = styled.div`
  position: absolute;
  top: 95px;
  z-index: 100;
  width: fit-content;
  box-shadow: 0px 3px 5px ${theme.borderGrey};
  background-color: ${theme.white};
  right: 24px;
  @media screen and (min-width: 750px) {
    top: 76px;
  }
  @media screen and (min-width: 960px) {
    top: 68px;
    right: auto;
  }
`
