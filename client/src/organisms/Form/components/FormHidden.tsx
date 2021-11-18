import React, { forwardRef, FunctionComponent, memo, useContext } from 'react'
import { useFormSave } from 'organisms/Form/hooks'
import { FormContext } from 'organisms/Form/base'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

type Props =  {
  handleSave: Function
}

const FormHidden = forwardRef<any, Props>(({ handleSave }, ref) => {
  const { handleAction } = useFormSave(handleSave)

  return <button ref={ref} onClick={handleAction} style={{ visibility: 'hidden' }}/>
})

export default FormHidden

