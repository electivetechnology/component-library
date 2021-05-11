import styled from 'styled-components'
import { theme } from 'styles/theme'

export const BannerWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BannerContainer = styled.div`
  padding: 16px;
  position: absolute;
  background-color: white;
  z-index: 100;
  top: 30%;
  border-radius: 8px;
`

export const CloseIconStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    z-index: 50;
    display: flex;
  }
`
export const HeaderWrapperStyled = styled.div`
  display: grid;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${theme.white};
  justify-content: center;
  border-bottom: 1px solid #ccc;
  padding: 16px 8px 8px;
  @media screen and (min-width: 750px) {
    grid-row: 1;
    box-sizing: border-box;
    justify-content: unset;
    padding: 24px;
  }
`

export const BannerClosedStyled = styled.div`
  padding-top: 16px;
`
