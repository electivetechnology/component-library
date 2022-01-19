import React from 'react'
import {
  DividerStyled,
  ColumnContainerStyled,
  ColumnHeaderStyled,
  iconStyle,
  ColumnFoldStyled,
  ColumnParentStyled,
  ColumnHeadStyled,
  IconPlaceHolderStyled,
  iconArrowStyle
} from 'molecules/Grid/styles'
import UnfoldLess from '@material-ui/icons/UnfoldLess'
import UnfoldMore from '@material-ui/icons/UnfoldMore'
import Arrow from '@material-ui/icons/ArrowBackOutlined'
import { Font } from 'electivegroup-component-library-2'

type Props = {
  handleCloseColumn: any
  isColumnClosed: boolean
  icon?: boolean
  label?: string
  gridRow?: string
}

const ColumnComponent: React.FC<Props> = ({
  children,
  handleCloseColumn,
  isColumnClosed,
  icon = true,
  label,
  gridRow,
}) => {
  const isMobile = window.innerWidth < 750

  const renderIcon = () => {
    if ((icon || !label) && isColumnClosed) {
      return <UnfoldMore />
    } else if ((icon || !label) && !isColumnClosed && isMobile) {
      return <Arrow style={iconArrowStyle} />
    } else if  ((icon || !label) && !isColumnClosed) {
      return <UnfoldLess style={iconStyle} />
    } else {
      return <IconPlaceHolderStyled />
    }
  }
  return (
    <ColumnParentStyled isColumnClosed={isColumnClosed} gridRow={gridRow}>
      <DividerStyled />
      <ColumnContainerStyled
        isColumnClosed={isColumnClosed}>
        <ColumnHeaderStyled
          onClick={handleCloseColumn}
          isColumnClosed={isColumnClosed}>
          <ColumnFoldStyled isColumnClosed={isColumnClosed}>
            {renderIcon()}
          </ColumnFoldStyled>
          <ColumnHeadStyled isColumnClosed={isColumnClosed}>
            {label && <Font variant='subtitle2'>{label}</Font>}
          </ColumnHeadStyled>
        </ColumnHeaderStyled>
        {isColumnClosed ? null : children}
      </ColumnContainerStyled>
    </ColumnParentStyled>
  )
}

export default ColumnComponent
