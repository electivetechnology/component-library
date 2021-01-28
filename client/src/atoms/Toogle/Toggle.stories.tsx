import React, { useState } from 'react'
import Toggle from './Toggle'

const TooltipTemplate = (args: any) => {
  const [isToggle, setIsToggled] = useState(false)
  return <Toggle isActive={isToggle} setIsActive={setIsToggled} {...args} />
}

// Default
export const Default: any = TooltipTemplate.bind({})

Default.args = {
  label: 'Label',
  activeLabel: 'Yes',
  deactiveLabel: 'No'
}

// NoText
export const NoText: any = TooltipTemplate.bind({})

NoText.args = {
  label: 'Label'
}

export default {
  title: 'atoms/Toggle',
  component: Toggle
}
