import React, { useContext, FC, useEffect } from 'react'
import { NavContext } from 'molecules/Columns/base'
import {
  iconStyle,
  ColumnStyled,
  ColumnBorderStyled,
  iconLeftStyle,
  ColumnContentStyled,
  SideColumnMobiledStyled,
  SideColumnDesktopdStyled,
  MobileButtonLabelStyled,
  iconMobileLeftStyle
} from 'molecules/Columns/styles'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

type Props = {
  children: any
  isClosable?: boolean
  colspan?: number
  addColumn?: any
  columnIndex?: number
  fixedWidth?: number
  handleClose?: any
  align: 'left' | 'right'
  backgroundColor?: string
  divider?: Boolean
  scroll?: boolean
}

const Column: FC<Props> = ({
  children,
  isClosable = true,
  colspan = 1,
  fixedWidth = 0,
  addColumn,
  columnIndex,
  handleClose,
  backgroundColor,
  align = 'right',
  divider = true,
  scroll = false
}) => {
  const { colWidth, columns } = useContext(NavContext)

  colspan = !fixedWidth ? colspan : 0

  useEffect(() => {
    addColumn(colspan, fixedWidth)
  }, [])

  const onClose = () => {
    handleClose && handleClose()
    addColumn(colspan, fixedWidth, false)
  }

  const onOpen = () => {
    addColumn(colspan, fixedWidth, true)
  }

  const columnExists = columns?.find(
    (column: any, index: number) => columnIndex === index
  )

  const width = fixedWidth ? fixedWidth : colWidth * colspan

  const isHidden = !columnExists || !columnExists.display

  const displayWidth = columnExists && columnExists.display ? width : 0

  return (
    <ColumnStyled
      columnWidth={displayWidth}
      isHidden={isHidden}
      align={align}
      backgroundColor={backgroundColor}
      scroll={scroll}
    >
      <SideColumnMobiledStyled onClick={onClose} isClosable={isClosable}>
        <ArrowBackIcon style={iconMobileLeftStyle} />
        <MobileButtonLabelStyled>Back</MobileButtonLabelStyled>
      </SideColumnMobiledStyled>
      <SideColumnDesktopdStyled>
        {divider && <ColumnBorderStyled />}
        {isClosable && !isHidden && (
          <ArrowForwardIosIcon style={iconLeftStyle} onClick={onClose} />
        )}
        {isHidden && (
          <ChevronLeftOutlinedIcon style={iconStyle} onClick={onOpen} />
        )}
      </SideColumnDesktopdStyled>
      <ColumnContentStyled>{!isHidden && children}</ColumnContentStyled>
    </ColumnStyled>
  )
}

export default Column
