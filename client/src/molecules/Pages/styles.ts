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
  padding-right: 14px;
  position: sticky;
`
