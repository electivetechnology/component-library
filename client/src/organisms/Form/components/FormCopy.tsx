import React, { FC, useState } from 'react'
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import {
  CopyIconStyled,
  ToastStyled,
  CopiedStyled,
  CopyElementStyled
} from 'organisms/Form/styles'
import { theme } from 'styles/theme'

interface Props {
  value: string
  darkMode: boolean
}
const FormCopy: FC<Props> = ({ value, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  const handleMouseHover = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <CopyElementStyled
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      isActive={isHovered}
    >
      <CopyIconStyled onClick={handleCopy} isActive={isHovered}>
        {isCopied ? (
          <CopiedStyled>
            <ToastStyled darkMode={darkMode}>Copied!</ToastStyled>
            <CheckCircleOutline
              style={{
                top: '20px',
                position: 'relative',
                height: '20px',
                marginTop: '4px',
                color: darkMode ? theme.white : theme.grey
              }}
            />
          </CopiedStyled>
        ) : (
          <FileCopyOutlined style={{ height: '20px', color: darkMode ? theme.white : theme.grey }} />
        )}
      </CopyIconStyled>
    </CopyElementStyled>
  )
}

export default FormCopy
