import React, { Fragment, useState } from 'react'
import DatePicker from 'atoms/DatePicker/DatePicker'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import Button from 'atoms/Button/Button'

const Template = (args: any) => <DatePicker {...args} />

// Primary
export const Primary: any = Template.bind({})

Primary.args = {
  label: 'Primary',
  value: '',
  handleChange: () => {
    console.log('change')
  }
}

// const ToggleTemplate = (args: any) => {
//   const [isChecked, setCheckbox] = useState(value)
// }

export default {
  title: 'atoms/DatePicker',
  component: DatePicker
}
