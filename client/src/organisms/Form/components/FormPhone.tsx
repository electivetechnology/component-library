import React, { FunctionComponent, useContext, Fragment } from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import ReactPhoneInput from 'react-phone-input-mui'
import { TextField } from '@material-ui/core'
import { FormContext, InputContext } from 'organisms/Form/base'
import { makeStyles } from '@material-ui/styles'
import 'react-phone-input-2/lib/style.css'

const useStyles = makeStyles({
  dropdown: () => ({
    position: 'absolute',
    top: '20px'
  })
})

const FormPhone: FunctionComponent = () => {
  const classes = useStyles()

  const {
    inputValue,
    name,
    label,
    disabled
  } = useContext(InputContext)

  const { onBlur, darkMode = false } = useContext(FormContext)

  const inputHook = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <ReactPhoneInput
      buttonStyle={{
        border: 'none',
        backgroundColor: 'white',
        maxHeight: '35px !important',
        marginBottom: '24px'
      }}
      inputStyle={{ border: 'none', height: '35px !important' }}
      {...inputHook}
      defaultCountry={'gb'}
      onBlur={handleBlur}
      component={TextField}
      placeholder={label}
      autoFormat={false}
      disabled={disabled}
      dropdownClass={classes.dropdown}
    />
  )
}
export default FormPhone
