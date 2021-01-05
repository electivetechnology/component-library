import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef
} from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import { FormContext, InputContext } from 'organisms/Form/base'
import { SelectField } from 'atoms'
import { AutoCompleteContainerStyled } from 'atoms/SelectField/style'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { useSelectStyles } from 'organisms/Form/styles'
import { selectedOption } from 'organisms/Form/mock'

const FormText: FunctionComponent = () => {
  const theme = 'dark'
  const classes = useSelectStyles({ theme })
  const valueRef = useRef()



  const { name, label, options, disabled } = useContext(InputContext)

  const { onBlur, inputs, updateInput } = useContext(FormContext)

  const inputValue = inputs[name] ? inputs[name] : null

  const handleBlur = () => {
    onBlur(name)
  }

  const selectOptions =
    options && options.selectOptions ? options.selectOptions : []

  const selected = options ? selectedOption(selectOptions, inputValue) : null

  console.group('debug')
  console.log(inputs)
  console.log(name)
  console.log(inputValue)
  console.log(selected)
  console.groupEnd()

  const handleChange = (newValue: any) => {
    valueRef.current = newValue
    updateInput(name, newValue.value)
  }

  useEffect(() => {
    valueRef.current && handleBlur()
  }, [valueRef.current])

  return (
    <AutoCompleteContainerStyled theme={theme}>
      <Autocomplete
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
          <TextField
            {...params}
            variant='standard'
            label={label}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.label,
                popupIndicator: classes.popupIndicator
              }
            }}
          />
        )}
        value={selected}
      />
    </AutoCompleteContainerStyled>
  )
}

export default memo(FormText)
