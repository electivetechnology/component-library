import React from 'react'
import TextField from 'atoms/TextField/TextField'
import Tooltip from './Tooltip'

const TooltipTemplate = (args: any) => {
  return (
    <div style={{ margin: '24px 0 0 80px' }}>
      <Tooltip {...args} />
    </div>
  )
}

// Bottom
export const Bottom: any = TooltipTemplate.bind({})

Bottom.args = {
  label: 'Label',
  tooltipText: 'Tooltip bottom',
  placement: 'bottom'
}

// Top
export const Top: any = TooltipTemplate.bind({})

Top.args = {
  label: 'Label',
  tooltipText: 'Tooltip top',
  placement: 'top'
}

// Left
export const Left: any = TooltipTemplate.bind({})

Left.args = {
  label: 'Label',
  tooltipText: 'Tooltip left',
  placement: 'left'
}

// Right
export const Right: any = TooltipTemplate.bind({})

Right.args = {
  label: 'Label',
  tooltipText: 'Tooltip right',
  placement: 'right'
}

export default {
  title: 'atoms/Tooltip',
  component: TextField
}
