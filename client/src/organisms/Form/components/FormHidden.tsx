import React, { FC, ReactElement, useContext } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

interface Props {
  label: string
  handleSave: any
  disabled?: boolean
  icon?: ReactElement<SvgIconProps>
  fullWidth?: boolean
}

export const FormHidden = React.forwardRef<any, any>(({ label }, ref) => {
  const handleButton = (event: object) => {
    // addStatus('textInput', 'error', 'some error with text')
    // addStatus('newInput', 'error', 'some error with text area')
    console.group('handleButton')
    console.log(event)
    console.groupEnd()
  }

  return <button ref={ref} onClick={handleButton} style={{ visibility: 'hidden' }}/>
})
