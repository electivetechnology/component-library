import React from 'react'
import { Form } from 'organisms/Form/index'
import TestFormComponent from 'organisms/Form/stories/TestForm'

const Template = (args: any) => <TestFormComponent {...args} />

export const TestForm: any = Template.bind({})

export default {
  title: 'organisms/Form',
  component: Form
}
