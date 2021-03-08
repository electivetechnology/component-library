import React, { useState } from 'react'
import { ExpandMoreOutlined as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons'
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
  title?: string
  headerTheme?: string
}

const Header: React.FC<Props> = ({
  title,
  children,
  headerTheme = 'primary'
}) => {
  const defaultShowSection = window.innerWidth <= 400 ? false : true
  const [showSection, setShowSection] = useState(defaultShowSection)

  const handleShowSection = () => {
    setShowSection(!showSection)
  }

  const fontColor =
    headerTheme === 'primary' ? theme.primaryColorValencia : theme.grey
  return (
    <HeaderContainer>
      <HeaderBorder />
      <div>
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
      </div>
      <HeaderContent showSection={showSection}>{children}</HeaderContent>
    </HeaderContainer>
  )
}

export default Header
