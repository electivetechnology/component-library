import React, { FunctionComponent, useState } from 'react'
import { FileCopyOutlined, CheckCircleOutline } from '@material-ui/icons'
import {
  CopyIconStyled,
  ToastStyled,
  CopiedStyled,
  CopyElementStyled
} from 'organisms/Form/styles'

interface Props {
  value: string
}
const FormCopy: FunctionComponent<Props> = ({ value }) => {
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
    >
      <CopyIconStyled onClick={handleCopy} isActive={isHovered}>
        {isCopied ? (
          <CopiedStyled>
            <ToastStyled>Copied!</ToastStyled>
            <CheckCircleOutline
              style={{
                top: '20px',
                position: 'relative',
                height: '20px',
                marginTop: '4px'
              }}
            />
          </CopiedStyled>
        ) : (
          <FileCopyOutlined style={{ height: '20px' }} />
        )}
      </CopyIconStyled>
    </CopyElementStyled>
  )
}

export default FormCopy
