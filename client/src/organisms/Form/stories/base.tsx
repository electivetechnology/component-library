import React, { Fragment } from 'react'
import { Form, FormOption } from 'organisms/Form/index'
import { theme } from 'styles/theme'

export const selectOptions: any = () => {
  return (
    <Fragment>
      <FormOption type='option' label='Option One' value={status} />
      <FormOption type='option' label='Option Two' value={status} />
    </Fragment>
  )
}


export const darkModeForm: any = (args: any, handleUpdate: any) => {
  return (
    <div style={{
      backgroundImage: `linear-gradient(
        ${theme.gradientBlue},
        ${theme.gradientRed}
      )`,
      height: '500px'
    }}>
      <Form {...args} handleUpdate={handleUpdate} />
    </div>
  )
}
