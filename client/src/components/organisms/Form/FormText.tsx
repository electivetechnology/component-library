import React, { FunctionComponent, memo, useContext, useState } from 'react'
import { Font, TextField } from 'components/atoms'
import { useFormInput } from './hooks'
import {
  FlexibilityWrapperStyled,
  AffixStyled,
  FormTextContainerStyled,
  CopyIconStyled,
  ToastStyled,
  CopiedStyled
} from './styles'
import { FormContext } from './Form'
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import { InputContext } from 'components/organisms/Form/FormInput'

const FormText: FunctionComponent = () => {
  const { name, type, label, options } = useContext(InputContext)
  const { affix, multiline, width, copy } = options || {}

  const { onBlur, dispatch, inputs } = useContext(FormContext)

  const value = inputs ? inputs[name] : null

  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const inputHook = useFormInput(name, dispatch, value)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  const handleMouseHover = (e: any) => {
    e.preventDefault()
    setIsHovered(true)
  }

  const handleMouseLeave = (e: any) => {
    e.preventDefault()
    setIsHovered(false)
  }

  const handleBlur = () => {
    onBlur(label)
  }

  const textField = (
    <FormTextContainerStyled>
      <TextField
        isInline={!!width}
        id={label}
        label={label}
        handleBlur={handleBlur}
        {...inputHook}
        type={type}
        multiline={multiline}
        margin={width ? 'none' : 'normal'}
        variant='standard'
      />
      {copy && (
        <div
          style={{ width: '48px', paddingLeft: '8px' }}
          onMouseEnter={(e) => handleMouseHover(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
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
        </div>
      )}
    </FormTextContainerStyled>
  )

  return affix ? (
    <FlexibilityWrapperStyled>
      {textField}
      <AffixStyled>
        <Font variant='body1'>{affix}</Font>
      </AffixStyled>
    </FlexibilityWrapperStyled>
  ) : (
    textField
  )
}

export default memo(FormText)
