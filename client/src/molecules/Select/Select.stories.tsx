import React, { Fragment, FC, useState } from 'react'
import { Select, Option } from 'molecules/Select'
import { Button } from 'atoms'
import OptionHeader from 'molecules/Select/OptionHeader'

const selectConst = {
  OPTION_1: { label: 'Option 1', value: '1' },
  OPTION_2: { label: 'Option 2', value: '2' },
  OPTION_3: { label: 'Option 3', value: '3' }
}

const Template = (args: any) => {
  const { initialValue } = args
  const [value, setValue] = useState(initialValue)

  const handleChange = (value: string) => {
    console.group('handleChange')
    console.log(value)
    console.groupEnd()
  }

  const handleReset = () => {
    setValue({ label: '', value: '' })
  }

  return (
    <Fragment>
      <Button theme='primary' label={'reset'} onClick={handleReset} />
      <Select {...args} onChange={handleChange} initialValue={value} />
    </Fragment>
  )
}

const renderOptions = () => {
  return (
    <Fragment>
      <OptionHeader label='Option Header' />
      <Option option={selectConst.OPTION_1} />
      <Option option={selectConst.OPTION_2} />
    </Fragment>
  )
}

// Single
export const Single: any = Template.bind({})

Single.args = {
  initialValue: { label: '', value: '' },
  open: true,
  children: renderOptions()
}

// Multi
export const Multi: any = Template.bind({})

Multi.args = {
  multi: true,
  initialValue: [],
  open: true,
  children: renderOptions()
}

export default {
  title: 'molecules/Select',
  component: Select
}
