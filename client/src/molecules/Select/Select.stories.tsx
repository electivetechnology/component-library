import React, { Fragment, FC, useState } from 'react'
import { Select, Option } from 'molecules/Select'
import { Button } from 'atoms'
import OptionHeader from 'molecules/Select/OptionHeader'

const selectConst = {
  OPTION_1 : {label: 'Option 1', value: '1'},
  OPTION_2 : {label: 'Option 2', value: '2'},
  OPTION_3 : {label: 'Option 3', value: '3'}
}

const Template = (args: any) => {
  const blankValue = { label: '', value: '' }
  const [value, setValue] = useState(blankValue)

  const handleChange = (value: string) => {
    console.group('handleChange')
    console.log(value)
    console.groupEnd()
  }

  const handleReset = () => {
    setValue({ label: 'reset', value: '0' })
  }

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
      <Option option={selectConst.OPTION_1} />
      <Option option={selectConst.OPTION_2} />
    </Fragment>
  )
}

export default {
  title: 'molecules/Select',
  component: Select
}
