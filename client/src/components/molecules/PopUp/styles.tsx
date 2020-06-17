import styled from 'styled-components'
import { theme } from 'styles/theme'

export const PopUpWrapperStyled = styled.div`
  display: grid;
  @media screen and (min-width: 750px) {
    padding: 0;
  }
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
  display: grid;
  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr 158px;
    ${(props) =>
      props.popUpHeight &&
      `
      height: ${props.popUpHeight};
    `}
  }
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
      maxWidth: '600px',
    },
  },
}
