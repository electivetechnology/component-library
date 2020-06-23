import styled from 'styled-components'
import { theme, zindex } from 'styles/theme'

export const PopUpWrapperStyled = styled.div`
  display: block;
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

type WrapperProp = {
  popUpHeight?: string
}

export const PopUpContentWrapperStyled = styled.div<WrapperProp>`
  display: block;
  height: auto;
  padding: 16px;
  text-align: center;
`

export const ContentContainer = styled.div``

export const PopupClosedStyled = styled.div`
  padding-top: 16px;
`

export const popUpStyles = {
  dialogPaper: {
    height: '100vh',
    margin: '0',
    maxHeight: '100%',
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    '@media screen and (min-width: 750px)': {
      margin: '48px',
      maxHeight: 'calc(100% - 96px);',
      borderRadius: '4px',
      height: 'auto',
      maxWidth: '600px'
    }
  }
}

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
