import { theme } from 'styles/theme'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const iconStyles = makeStyles({
  Icon: (props: any) => ({
    fill: props.selected ? theme.white : theme.primaryGrey,
    margin: props.horizontal ? 'unset' : 'auto',
    height: '24px',
    width: '24px'
  })
})

type NavigationContainerProps = {
  horizontal?: boolean
  expandSubMenu?: boolean
  showSubMenu?: boolean
}
export const NavigationContainerStyled = styled.div<NavigationContainerProps>`
  height: 100%;
  width: auto;
  background-color: ${theme.grayAthens};
  ${(props) =>
    props.horizontal &&
    `
      width: 100%;
      height: 60px;
      background-color: ${theme.grayAthens};
      box-shadow: 0px 1px 3px ${theme.borderGrey};
      border-radius: 12px;
      padding: 6px 24px;
      width: revert;
      height: 100%;
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
    `};
`

export const SubMenuStyled = styled.div`
  margin-left: auto;
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
  &:hover {
    background-color: ${theme.dividerGrey};
  }
  ${(props) =>
    props.selected &&
    `
      background-color: ${theme.primaryGrey};
    `};
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
      &:hover {
        background-color: ${theme.hoverBlue};
      }
    `};
  ${(props) =>
    props.roundIcon &&
    `
      padding: 8px 4px;
      border-radius: 24px;
      border: 1px solid ${theme.primaryGrey};
      margin: 0 8px 0 0;
      &:hover {
        background-color: ${theme.hoverBlue};
      }
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
