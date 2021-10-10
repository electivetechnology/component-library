import React, { FunctionComponent } from 'react'
import {
  ListContainerStyled,
  ListFontStyled,
  MainContainerStyled,
  IconContainerStyled
} from './styles'

type ListProp = {
  additionalInformation?: string
  additionalInformationAlign?: string
  endIcon?: any
  endIconCentreAlign?: boolean
  header?: string
  paragraph?: string
  startIcon?: any
  startIconCentreAlign?: boolean
}

const List: FunctionComponent<ListProp> = ({
  additionalInformation,
  additionalInformationAlign,
  endIcon,
  endIconCentreAlign,
  header,
  paragraph,
  startIcon,
  startIconCentreAlign,
}) => {
  return (
    <ListContainerStyled
      startIcon={startIcon}
      endIcon={endIcon}>
      {startIcon && 
        <IconContainerStyled
          iconCenterAlign={startIconCentreAlign}>{startIcon}</IconContainerStyled>}
      <MainContainerStyled>
        <ListFontStyled header>
          {header} Main container
        </ListFontStyled>
        <ListFontStyled>
          {paragraph} Paragraph
        </ListFontStyled>
        {additionalInformation && <ListFontStyled header additionalInformationAlign={additionalInformationAlign}>
          {additionalInformation} Main container
        </ListFontStyled>}
      </MainContainerStyled>
      {endIcon && 
        <IconContainerStyled
          iconCenterAlign={endIconCentreAlign}>{endIcon}</IconContainerStyled>}
    </ListContainerStyled>
  )
}

export default List
