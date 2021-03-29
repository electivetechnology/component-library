import React from 'react'
import {
  ColumnStyled, ColumnContentStyled
} from './styles'
import {
  ColumnBorderStyled,
  SideColumnDesktopdStyled,
  iconLeftStyle,
  iconStyle
} from 'molecules/Columns/styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined'

type Props = {
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
        {isClosable && !expandMainColumn && (
            <ArrowForwardIosIcon style={iconLeftStyle} onClick={handleCloseAllContent} />
          )}
        {isClosable && expandMainColumn && (
          <ChevronLeftOutlinedIcon style={iconStyle} onClick={handleCloseAllContent} />
        )}
      </SideColumnDesktopdStyled>
      <ColumnContentStyled isClosable={isClosable}>
        {children}
      </ColumnContentStyled>
      {isOptionalContentClosable && !mainColumnExpanded && (
        <ArrowForwardIosIcon style={iconLeftStyle} onClick={handleCloseOptionalContent} />
        )}
      {isOptionalContentClosable && mainColumnExpanded &&(
        <ChevronLeftOutlinedIcon style={iconStyle} onClick={handleCloseOptionalContent} />
      )}
    </ColumnStyled>
  )
}

export default ColumnComponent
