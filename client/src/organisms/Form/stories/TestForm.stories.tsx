import React from 'react'
import { Form } from 'organisms/Form'
import TestFormComponent from 'organisms/Form/stories/TestForm'

const Template = (args: any) => <TestFormComponent {...args} />

export const TestForm: any = Template.bind({})

export default {
  title: 'organisms/Form/Standard',
  component: Form
}
