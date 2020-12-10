import React, { FunctionComponent } from 'react'

// TODO: PERMISSIONS!!!

// Default values used for FormContext
const defaultForm: any = {
  onBlur: undefined,
  dispatch: undefined
}
export const FormContext = React.createContext(defaultForm)

type Props = {
  handleUpdate?: Function
}

const Form: FunctionComponent<Props> = ({ children, handleUpdate }) => {
  // const onBlur = () => {
  //   console.log('onBlur')
  // }
  // const dispatch = () => {
  //   console.log('dispatch')
  // }

  return <section>{children}</section>

  // return (
  //   <FormContext.Provider
  //     value={{
  //       onBlur,
  //       dispatch,
  //     }}>
  //     {children}
  //   </FormContext.Provider>
  // )
}

export default Form
