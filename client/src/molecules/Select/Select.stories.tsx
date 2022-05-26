import React, { useState } from 'react'
import { Select, Option } from 'molecules/Select'
import { Button } from 'atoms'
import OptionHeader from 'molecules/Select/OptionHeader'
import { theme } from 'styles/theme'

const OPTION_1 = { label: 'Option 1', value: '1' }
const OPTION_2 = { label: 'Option 2', value: '2' }
const OPTION_3 = { label: 'Option 3', value: '3' }

const Template = (args: any) => {
  const { initialValue, darkMode } = args
  const [value, setValue] = useState(initialValue)

  const handleChange = (value: string) => {
    console.group('handleChange')
    console.log(value)
    console.groupEnd()
  }

  const handleReset = () => {
    setValue({ label: '', value: '' })
  }

  const darkModeStyle = {
    backgroundImage: `linear-gradient(
      ${theme.accent1Secondary},
      ${theme.accent3Secondary}
    )`,
    height: '500px'
  }

  return (
    <div style={darkMode ? darkModeStyle : {}}>
      <div
        style={{
          display: 'inline-flex',
          width: '100%',
          gridGap: '8px',
          height: '44px'
        }}
      >
        <div style={{ width: '100%' }}>
          <Select {...args} onChange={handleChange} initialValue={value}>
            <OptionHeader label='Option Header' />
            <Option label={OPTION_1.label} value={OPTION_1.label} />
            <Option label={OPTION_2.label} value={OPTION_2.label} />
          </Select>
        </div>
        {/* <Button theme='primary' label={'reset'} onClick={handleReset} /> */}
      </div>
    </div>
  )
}

// Single
export const Single: any = Template.bind({})

Single.args = {
  initialValue: { label: '', value: '' },
  open: true,
  label: 'Label'
}

// Multi
export const Multi: any = Template.bind({})

Multi.args = {
  multi: true,
  initialValue: [],
  open: true
}

// DarkMode
export const DarkMode: any = Template.bind({})

DarkMode.args = {
  multi: true,
  initialValue: [],
  open: true,
  darkMode: true,
  label: 'Label'
}

export default {
  title: 'molecules/Select',
  component: Select
}
