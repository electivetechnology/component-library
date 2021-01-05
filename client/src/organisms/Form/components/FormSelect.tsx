import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { useSelectStyles, AutoCompleteContainerStyled } from 'organisms/Form/styles'
import { selectedOption } from 'organisms/Form/mock'

const FormText: FunctionComponent = () => {
  const { name, label, options, disabled } = useContext(InputContext)
  const { onBlur, inputs, updateInput, darkMode } = useContext(FormContext)
  const valueRef = useRef()

  const classes = useSelectStyles({ darkMode })

  const inputValue = inputs[name] ? inputs[name] : null

  const handleBlur = () => {
    onBlur(name)
  }

  const selectOptions =
    options && options.selectOptions ? options.selectOptions : []

  const selected = options ? selectedOption(selectOptions, inputValue) : null

  const handleChange = (newValue: any) => {
    valueRef.current = newValue
    updateInput(name, newValue ? newValue.value : null)
  }

  useEffect(() => {
    valueRef.current && handleBlur()
  }, [valueRef.current])

  return (
    <Autocomplete
      value={selected}
      options={selectOptions}
      classes={classes}
      disabled={disabled}
      noOptionsText={
        options && options.noOptionsMessage
          ? options.noOptionsMessage
          : 'No Options'
      }
      onChange={(event, newValue) => handleChange(newValue)}
      getOptionLabel={(option: any) => option.label}
      renderInput={(params: any) => (
        <TextField {...params} variant='standard' label={label} fullWidth />
      )}
      disableClearable={true}
    />
  )
}
// TODO: InputLabelProps && class.label
export default memo(FormText)
