import styled from 'styled-components'
import { AlignTypes } from 'molecules/Pages/base'

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
  text-align: right;
  padding-right: 40px;
  position: sticky;
`

export const PagesContainerStyled = styled.div`
  display: inline-flex;
  padding: 24px;
`

export const ProgressIndicatorStyled = styled.div`
  display: inline-flex;
`

export const ProgressContainerStyled = styled.div`
  margin-left: auto;
`

export const ProgressBarStyled = styled.div`
  padding: 0 12px 8px 0;
  display: inline-flex;
  grid-gap: 12px;
`

export const HelperTextStyled = styled.div`
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`
