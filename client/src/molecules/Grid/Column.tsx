import React from 'react'
import {
  ColumnStyled,
  ColumnContentStyled,
  ColumnCloseStyled,
  CloseTextStyled
} from './styles'
import {
  ColumnBorderStyled,
  SideColumnDesktopdStyled,
  iconLeftStyle,
  iconStyle
} from 'molecules/Columns/styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'

type Props = {
  children: any
  divider?: boolean
  expandMainColumn: boolean
  isClosable?: boolean
  isOptionalContentClosable?: boolean
  handleCloseOptionalContent?: any
  handleCloseAllContent?: any
  mainColumnExpanded?: boolean
}

const ColumnComponent: React.FC<Props> = ({
  children,
  divider = false,
  expandMainColumn,
  isClosable = true,
  isOptionalContentClosable = false,
  handleCloseOptionalContent,
  handleCloseAllContent,
  mainColumnExpanded
}) => {
  return (
    <ColumnStyled display={expandMainColumn}>
      <SideColumnDesktopdStyled>
        {divider && <ColumnBorderStyled />}
        {isClosable && expandMainColumn && (
          <ColumnCloseStyled onClick={handleCloseAllContent}>
            <ArrowForwardIosIcon style={iconLeftStyle} />
            <CloseTextStyled>Show</CloseTextStyled>
          </ColumnCloseStyled>
        )}
        {isClosable && !expandMainColumn && (
          <ColumnCloseStyled onClick={handleCloseAllContent}>
            <ChevronLeftOutlinedIcon style={iconStyle} />
            <CloseTextStyled>Hide</CloseTextStyled>
          </ColumnCloseStyled>
        )}
      </SideColumnDesktopdStyled>
      <ColumnContentStyled isClosable={isClosable}>
        {children}
      </ColumnContentStyled>
      {isOptionalContentClosable && mainColumnExpanded && (
        <ColumnCloseStyled onClick={handleCloseOptionalContent}>
          <ArrowForwardIosIcon style={iconLeftStyle} />
          <CloseTextStyled>Show</CloseTextStyled>
        </ColumnCloseStyled>
      )}
      {isOptionalContentClosable && !mainColumnExpanded && (
        <ColumnCloseStyled onClick={handleCloseOptionalContent}>
          <ChevronLeftOutlinedIcon style={iconStyle} />
          <CloseTextStyled>Hide</CloseTextStyled>
        </ColumnCloseStyled>
      )}
    </ColumnStyled>
  )
}

export default ColumnComponent
