import React from 'react'
import {
  DividerStyled,
  ColumnContainerStyled,
  ColumnHeaderStyled,
  iconStyle,
  ColumnFoldStyled,
  ColumnParentStyled,
  ColumnHeadStyled,
  IconPlaceHolderStyled
} from './styles'
import UnfoldLess from '@material-ui/icons/UnfoldLess'
import UnfoldMore from '@material-ui/icons/UnfoldMore'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import { Font } from 'atoms'

type Props = {
  handleCloseColumn: any
  isColumnClosed: boolean
  icon?: boolean
  label?: string
}

const ColumnComponent: React.FC<Props> = ({
  children,
  handleCloseColumn,
  isColumnClosed,
  icon = true,
  label,
}) => {
  const isMobile = window.innerWidth < 750
  const renderIcon = () => {
    if ((icon || !label) && isMobile && isColumnClosed) {
      return <KeyboardArrowRight />
    } else if ((icon || !label) && isMobile && !isColumnClosed) {
      return <KeyboardArrowLeft />
    } else if ((icon || !label) && !isMobile && isColumnClosed) {
      return <UnfoldMore />
    } else if ((icon || !label) && !isMobile && !isColumnClosed) {
      return <UnfoldLess style={iconStyle} />
    } else {
      return <IconPlaceHolderStyled />
    }
  }
  return (
    <ColumnParentStyled isColumnClosed={isColumnClosed}>
      <DividerStyled />
      <ColumnContainerStyled
        isColumnClosed={isColumnClosed}>
        <ColumnHeaderStyled
          onClick={handleCloseColumn}
          isColumnClosed={isColumnClosed}>
          <ColumnHeadStyled isColumnClosed={isColumnClosed}>
            {label && <Font variant='subtitle2'>{label}</Font>}
          </ColumnHeadStyled>
          <ColumnFoldStyled isColumnClosed={isColumnClosed}>
            {renderIcon()}
          </ColumnFoldStyled>
        </ColumnHeaderStyled>
        {children}
      </ColumnContainerStyled>
    </ColumnParentStyled>
  )
}

export default ColumnComponent
