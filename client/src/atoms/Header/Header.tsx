import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import {
  HeaderBorder,
  HeaderContentStyled,
  expandIconStyles,
  HeaderContent,
  HeaderContainer,
  HeaderContenContainStyled
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
  const defaultShowSection = window.innerWidth > 400
  const [showSection, setShowSection] = useState(defaultShowSection)

  const handleShowSection = () => {
    setShowSection(!showSection)
  }

  const fontColor =
    headerTheme === 'primary' ? theme.primaryColorValencia : theme.grey
  return (
    <HeaderContainer>
      <HeaderContenContainStyled>
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
      </HeaderContenContainStyled>
    </HeaderContainer>
  )
}

export default Header
