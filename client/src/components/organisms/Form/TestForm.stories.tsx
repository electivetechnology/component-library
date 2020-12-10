import React  from 'react'
import { Form} from 'components/organisms/Form'
import TestFormComponent from 'components/organisms/Form/TestForm'

const Template = (args: any) => <TestFormComponent {...args} />

export const TestForm: any = Template.bind({})

export default {
  title: 'organisms/TestForm',
  component: Form
}
