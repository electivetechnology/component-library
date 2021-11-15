import styled from 'styled-components'
import { AlignTypes } from 'molecules/Pages/base'
import { font, theme } from 'styles/theme'

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

type PagesContainerProp = {
  sticky: boolean
}

export const PagesContainerStyled = styled.div<PagesContainerProp>`
  background-color: ${theme.white};
  padding: 8px 24px 24px;
  bottom: 0;
  position: absolute;
  width: 85vw;
  z-index: 1000;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  @media screen and (min-width: 750px) {
    display: inline-flex;
    position: relative;
    width: -webkit-fill-available;
    padding: 24px 24px 0;
    ${props =>
      props.sticky &&
      `
        position: absolute;
        top: 0;
        height: 48px;
      `
    }
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
  margin: auto;
  grid-gap: 12px;
  display: none;
  ${props =>
    props.isMobile &&
    `
      padding: 0;
      display: inline-flex;
      grid-column: 2;
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
  grid-column: 3;
  margin-left: auto;
  @media screen and (min-width: 750px) {
    display: none;
  }
`

export const HelperTextStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
    font-size: 12px;
    font-family: ${font.primary};
  }
`
