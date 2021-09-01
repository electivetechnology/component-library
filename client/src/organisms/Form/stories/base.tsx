import React, { Fragment } from 'react'
import { Form, FormOption } from 'organisms/Form/index'
import { theme } from 'styles/theme'

export const selectOptions = [
  <FormOption type='option' label='Available' value='available' />,
  <FormOption type='option' label='Not looking' value='notLooking' />,
  <FormOption type='option' label='Archive' value='archive' />,
  <FormOption type='option' label='Removed' value='removed' />,
]


export const darkModeForm: any = (args: any, handleUpdate: any) => {
  return (
    <div style={{
      backgroundImage: `linear-gradient(
        ${theme.accent1Secondary},
        ${theme.accent3Secondary}
      )`,
      height: '500px'
    }}>
      <Form {...args} handleUpdate={handleUpdate} />
    </div>
  )
}
