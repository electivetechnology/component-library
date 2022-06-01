import { Font } from 'atoms'
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
  overline?: string
  title?: string
  startIcon?: any
  startIconCentreAlign?: boolean
  selected?: boolean
  onClick?: any
  nonClickable?: boolean
}

const List: FunctionComponent<ListProp> = ({
  additionalInformation,
  additionalInformationAlign,
  endIcon = false,
  endIconCentreAlign = false,
  overline,
  title,
  startIcon = false,
  startIconCentreAlign = false,
  selected = false,
  onClick,
  nonClickable = false
}) => {
  return (
    <ListContainerStyled
      nonClickable={nonClickable}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      selected={selected}
    >
      {startIcon && (
        <IconContainerStyled iconCenterAlign={startIconCentreAlign}>
          {startIcon}
        </IconContainerStyled>
      )}
      <MainContainerStyled>
        {/* update with own font component late */}
        {overline && (
          <ListFontStyled overline>
            <ListFontStyled overline>{overline}</ListFontStyled>
          </ListFontStyled>
        )}
        <ListFontStyled>
          <ListFontStyled header>{title}</ListFontStyled>
        </ListFontStyled>
        {additionalInformation && (
          <ListFontStyled
            header
            additionalInformationAlign={additionalInformationAlign}
          >
            <ListFontStyled additionalInformation>
              {additionalInformation}
            </ListFontStyled>
          </ListFontStyled>
        )}
      </MainContainerStyled>
      {endIcon && (
        <IconContainerStyled iconCenterAlign={endIconCentreAlign}>
          {endIcon}
        </IconContainerStyled>
      )}
    </ListContainerStyled>
  )
}

export default List
