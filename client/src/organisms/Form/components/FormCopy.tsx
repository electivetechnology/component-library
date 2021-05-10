import React, { FunctionComponent, useState } from 'react'
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import {
  CopyIconStyled,
  ToastStyled,
  CopiedStyled
} from 'organisms/Form/styles'
import { theme } from 'styles/theme'

interface Props {
  value: string
  darkMode: boolean
  isHovered: boolean
}
const FormCopy: FunctionComponent<Props> = ({ 
  value, 
  darkMode,
  isHovered
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
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
  )
}

export default FormCopy
