import React from 'react'
import {
  DividerStyled,
  ColumnContainerStyled,
  ColumnHeaderStyled,
  iconStyle,
  ColumnFoldStyled,
  ColumnParentStyled,
  ColumnHeadStyled
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
    if (isMobile && isColumnClosed) {
      return <KeyboardArrowRight />
    } else if (isMobile && !isColumnClosed) {
      return <KeyboardArrowLeft />
    } else if (!isMobile && isColumnClosed) {
      return <UnfoldMore />
    } else {
      return <UnfoldLess style={iconStyle} />
    }
  }
  return (
    <ColumnParentStyled isColumnClosed={isColumnClosed}>
      <DividerStyled />
      <ColumnContainerStyled
        isColumnClosed={isColumnClosed}>
        <ColumnHeaderStyled
          icon={icon}
          onClick={handleCloseColumn}
          isColumnClosed={isColumnClosed}>
          {label && <ColumnHeadStyled isColumnClosed={isColumnClosed} icon={icon}>
            <Font variant='subtitle2'>{label}</Font>
          </ColumnHeadStyled>}
          {icon && <ColumnFoldStyled isColumnClosed={isColumnClosed}>
            {renderIcon()}
          </ColumnFoldStyled>}
        </ColumnHeaderStyled>
        {children}
      </ColumnContainerStyled>
    </ColumnParentStyled>
  )
}

export default ColumnComponent
