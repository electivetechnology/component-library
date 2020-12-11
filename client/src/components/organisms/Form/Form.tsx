import React, { FunctionComponent } from 'react'
import { useInputsReducer } from './hooks'

// TODO: PERMISSIONS!!!

// Default values used for FormContext
const defaultForm: any = {
  onBlur: undefined,
  dispatch: undefined,
  inputs: {}
}
export const FormContext = React.createContext(defaultForm)

type Props = {
  handleUpdate?: Function
}

const Form: FunctionComponent<Props> = ({ children, handleUpdate }) => {
  const { inputs, dispatch } = useInputsReducer()

  console.group('newInputs')
  console.log(inputs)
  console.groupEnd()

  const onBlur = (label: string) => {
    const updateValue = inputs[label]
    handleUpdate && handleUpdate(updateValue)
  }

  return (
    <FormContext.Provider
      value={{
        onBlur,
        dispatch,
        inputs
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Form
