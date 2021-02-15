import React, { FunctionComponent, useContext } from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import ReactPhoneInput from 'react-phone-input-mui'
import { TextField } from '@material-ui/core'
import { FormContext, InputContext } from 'organisms/Form/base'
import { makeStyles } from '@material-ui/styles'
import 'react-phone-input-2/lib/style.css'
import { FormPhoneStyled } from './styles'

const useStyles = makeStyles({
  dropdown: () => ({
    position: 'absolute',
    top: '20px'
  }),
  inputBase: () => ({
    height: '31px !important'
  })
})

const FormPhone: FunctionComponent = () => {
  const classes = useStyles()

  const { inputValue, name, label, disabled } = useContext(InputContext)

  const { onBlur, darkMode } = useContext(FormContext)

  const inputHook = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <FormPhoneStyled>
      <ReactPhoneInput
        buttonStyle={{
          border: 'none',
          backgroundColor: 'white',
          bottom: '0'
        }}
        inputStyle={{ border: 'none' }}
        {...inputHook}
        defaultCountry={'gb'}
        onBlur={handleBlur}
        component={TextField}
        placeholder={label}
        autoFormat={false}
        disabled={disabled}
        dropdownClass={classes.dropdown}
        inputClass={classes.inputBase}
        containerStyle={{
          margin: '13px 0 0'
        }}
      />
    </FormPhoneStyled>
  )
}
export default FormPhone
