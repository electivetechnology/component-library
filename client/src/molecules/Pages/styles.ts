import styled from 'styled-components'
import { AlignTypes } from 'molecules/Pages/base'
import { theme } from 'styles/theme'

type PageStyledProps = {
  align: AlignTypes
}

export const PageStyled = styled.div<PageStyledProps>`
  ${props =>
    props.align &&
    `
      align: ${props.align};
    `};
`

export const CloseIconStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
    text-align: right;
    padding-right: 40px;
    position: sticky;
  }
`

export const PagesContainerStyled = styled.div`
  padding: 12px 24px;
  display: inline-flex;
  bottom: 0;
  position: absolute;
  width: 90vw;
  justify-content: space-between;
  background-color: ${theme.white};
  @media screen and (min-width: 750px) {
    position: relative;
    justify-content: unset;
    width: -webkit-fill-available;
    padding: 24px;
  }
`

export const ProgressIndicatorStyled = styled.div`
  display: inline-flex;
`

export const ProgressContainerStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
    margin-left: auto;
  }
`

type ProgressBarProps = {
  isMobile?: boolean
}

export const ProgressBarStyled = styled.div<ProgressBarProps>`
  padding: 0 12px 8px 0;
  grid-gap: 12px;
  display: none;
  ${props =>
    props.isMobile &&
    `
      display: inline-flex;
    `};
  @media screen and (min-width: 750px) {
    display: inline-flex;
    ${props =>
      props.isMobile &&
      `
        display: none;
      `};
  }
`

export const MobileProgressNavStyled = styled.div`
  @media screen and (min-width: 750px) {
    display: none;
  }
`

export const HelperTextStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
    font-size: 12px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`
