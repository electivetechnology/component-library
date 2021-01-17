import React, { useState } from 'react'
import TextField from 'atoms/TextField/TextField'
import Toggle from './Toggle'

const TooltipDefaultTemplate = (args: any) => {
  const [isToggle, setIsToggled] = useState(false)
  return (
    <div style={{ marginTop: '30px' }}>
      <Toggle isActive={isToggle} setIsActive={setIsToggled} {...args} />
    </div>
  )
}

// Default
export const Default: any = TooltipDefaultTemplate.bind({})

Default.args = {
  label: 'Label',
  activeLabel: 'Yes',
  deactiveLabel: 'No'
}

// NoText
export const NoText: any = TooltipDefaultTemplate.bind({})

NoText.args = {
  label: 'Label'
}

export default {
  title: 'atoms/Toogle',
  component: TextField
}
