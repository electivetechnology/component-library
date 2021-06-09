import React, { Fragment, FC, useState } from 'react'
import { Select, Option } from 'molecules/Select'
import { Button } from 'atoms'
import OptionHeader from 'molecules/Select/OptionHeader'

const Template = (args: any) => {
  const blankValue = { label: '', value: '' }
  const [value, setValue] = useState(blankValue)

  const handleChange = (value: string) => {
    console.group('handleChange')
    console.log(value)
    console.groupEnd()
  }

  const handleReset = () => {
    console.group('handleReset')
    console.log(blankValue)
    console.groupEnd()
    setValue(blankValue)
  }

  console.group('value')
  console.log(value)
  console.groupEnd()
  return (
    <Fragment>
      <Button theme='primary' label={'reset'} onClick={handleReset} />
      <Select {...args} onChange={handleChange} initialValue={value} />
    </Fragment>
  )
}

// Default
export const Default: any = Template.bind({})

Default.args = {
  open: true,
  children: (
    <Fragment>
      <OptionHeader label='Initial set'/>
      <Option label='Option 1' value='1' />
      <Option label='Option 2' value='2' />
    </Fragment>
  )
}

export default {
  title: 'molecules/Select',
  component: Select
}
