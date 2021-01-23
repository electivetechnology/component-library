import React from 'react'
import Tooltip from './Tooltip'
import { Font } from 'atoms'

const TooltipTemplate = (args: any) => <Tooltip {...args} />

const TooltipTopTemplate = (args: any) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Tooltip {...args} />
    </div>
  )
}

const TooltipRightTemplate = (args: any) => {
  return (
    <div style={{ marginLeft: '60px' }}>
      <Tooltip {...args} />
    </div>
  )
}

const text = () => {
  return <Font variant='body1'>TooltipTooltip</Font>
}

// Bottom
export const Bottom: any = TooltipTemplate.bind({})

Bottom.args = {
  label: 'Label',
  placement: 'bottom',
  children: text()
}

// Top
export const Top: any = TooltipTopTemplate.bind({})

Top.args = {
  label: 'Label',
  placement: 'top',
  children: text()
}

// Left
export const Left: any = TooltipRightTemplate.bind({})

Left.args = {
  label: 'Label',
  placement: 'left',
  children: text()
}

// Right
export const Right: any = TooltipTemplate.bind({})

Right.args = {
  label: 'Label',
  placement: 'right',
  children: text()
}

export default {
  title: 'atoms/Tooltip',
  component: Tooltip
}
