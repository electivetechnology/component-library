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
import { FormTextType } from './types'
import { FormContext } from './Form'
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'

type Props = {
  input: FormTextType
  type?: string
  readOnly: boolean
  textFieldType?: string
  copy?: boolean
}

const FormText: FunctionComponent<Props> = ({
  input,
  readOnly,
  textFieldType = 'standard',
  copy = false
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const { onBlur, dispatch } = useContext(FormContext)

  const { type, label, affix, multiline, width, value } = input

  const inputHook = useFormInput(label, dispatch, value)

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

  const textField = (
    <FormTextContainerStyled>
      <TextField
        isInline={!!width}
        variant={textFieldType}
        id={label}
        label={label}
        handleBlur={onBlur}
        {...inputHook}
        type={type}
        multiline={multiline}
        disabled={readOnly}
        margin={width ? 'none' : 'normal'}
        paddingBttm={textFieldType === 'standard'}
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
