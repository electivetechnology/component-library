import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import {
  HeaderBorder,
  HeaderContentStyled,
  expandIconStyles,
  HeaderContent,
  HeaderContainer
} from './styles'
import Font from '../Font/Font'
import { theme } from 'styles/theme'

type Props = {
  children: any
  title?: string
  headerTheme?: string
  noScroll?: boolean
}

const Header: React.FC<Props> = ({
  title,
  children,
  headerTheme = 'primary',
  noScroll = false
}) => {
  const defaultShowSection = window.innerWidth > 400
  const [showSection, setShowSection] = useState(defaultShowSection)

  const handleShowSection = () => {
    setShowSection(!showSection)
  }

  const fontColor = headerTheme === 'primary' ? theme.primaryColor : theme.grey
  return (
    <HeaderContainer noScroll={noScroll}>
      <HeaderBorder />
      {title ? (
        <HeaderContentStyled>
          <div style={{ paddingTop: '4px' }}>
            <Font variant='body1' color={fontColor} fontWeight={600}>
              {title}
            </Font>
          </div>
          {showSection ? (
            <ExpandLessIcon
              style={expandIconStyles}
              onClick={handleShowSection}
            />
          ) : (
            <ExpandMoreIcon
              style={expandIconStyles}
              onClick={handleShowSection}
            />
          )}
        </HeaderContentStyled>
      ) : null}
      <HeaderContent showSection={showSection}>{children}</HeaderContent>
    </HeaderContainer>
  )
}

export default Header
