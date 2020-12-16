import React, { FunctionComponent } from 'react'
import FormColourPicker from 'organisms/Form/components/FormColourPicker'
import { FormContext, FormProps, InputContext } from 'organisms/Form/base'

const FormTemplate: FunctionComponent<FormProps> = ({ children }) => {
  return (
    <FormContext.Provider
      value={{
        onBlur: () => {},
        updateInput: () => {},
        inputs: {colorPicker : '#D63948'},
        statuses: {}
      }}
    >
      <InputContext.Provider
        value={{
          label: 'Colour Picker',
          name: 'colorPicker',
          type: 'colorPicker',
          options: {},
          readOnly: false
        }}
      >
        {children}
      </InputContext.Provider>
    </FormContext.Provider>
  )
}

const Template = (args: any) => <FormTemplate {...args} ><FormColourPicker /></FormTemplate>

// ColourPicker
export const ColourPicker: any = Template.bind({})

export default {
  title: 'organisms/Form/ColourPicker',
  component: ColourPicker
}