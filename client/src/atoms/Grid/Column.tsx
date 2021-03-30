import React from 'react'
import {
  ColumnStyled, ColumnContentStyled, ColumnCloseStyled, CloseTextStyled
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
        {isClosable && expandMainColumn && (
          <ColumnCloseStyled>
            <ArrowForwardIosIcon style={iconLeftStyle} onClick={handleCloseAllContent} />
            <CloseTextStyled>
              Show
            </CloseTextStyled>
          </ColumnCloseStyled>
        )}
        {isClosable && !expandMainColumn && (
          <ColumnCloseStyled>
            <ChevronLeftOutlinedIcon style={iconStyle} onClick={handleCloseAllContent} />
            <CloseTextStyled>
              Hide
            </CloseTextStyled>
          </ColumnCloseStyled>
        )}
      </SideColumnDesktopdStyled>
      <ColumnContentStyled isClosable={isClosable}>
        {children}
      </ColumnContentStyled>
      {isOptionalContentClosable && mainColumnExpanded && (
        <ColumnCloseStyled>
          <ArrowForwardIosIcon style={iconLeftStyle} onClick={handleCloseOptionalContent} />
          <CloseTextStyled>
            Show
          </CloseTextStyled>
        </ColumnCloseStyled>
      )}
      {isOptionalContentClosable && !mainColumnExpanded &&(
        <ColumnCloseStyled>
          <ChevronLeftOutlinedIcon style={iconStyle} onClick={handleCloseOptionalContent} />
          <CloseTextStyled>
            Hide
          </CloseTextStyled>
        </ColumnCloseStyled>
      )}
    </ColumnStyled>
  )
}

export default ColumnComponent
