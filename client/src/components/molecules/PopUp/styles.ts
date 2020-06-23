import styled from 'styled-components'
import { theme, zindex } from 'styles/theme'

export const PopUpWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupContainer = styled.div`
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

export const PopupClosedStyled = styled.div`
  padding-top: 16px;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0);
  transition: 0.4s;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: ${zindex.fabOverlay};
`
