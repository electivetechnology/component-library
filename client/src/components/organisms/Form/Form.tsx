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
  const { newInputs, dispatch } = useInputsReducer()

  console.group('newInputs')
  console.log(newInputs)
  console.groupEnd()

  const onBlur = (label: string) => {
    const updateValue = newInputs[label]
    handleUpdate && handleUpdate(updateValue)
  }

  return (
    <FormContext.Provider
      value={{
        onBlur,
        dispatch,
      }}>
      {children}
    </FormContext.Provider>
  )
}

export default Form
