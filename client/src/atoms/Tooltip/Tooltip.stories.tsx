import React from 'react'
import Tooltip from './Tooltip'
import { Button } from 'atoms'
import Save from '@material-ui/icons/Save'

const TooltipTemplate = (args: any) => {
  return (
    <div style={{ margin: '24px 0 0 80px', display: 'inline-flex' }}>
      <Tooltip {...args} />
      <Tooltip {...args} />
      <Tooltip {...args} />
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

// Children
export const Children: any = TooltipTemplate.bind({})

Children.args = {
  tooltipText: 'Tooltip right',
  placement: 'bottom',
  children: (
    <Button label='' theme='quaternary' onClick={() => {}} icon={<Save />} />
  )
}

// Highlighted
export const Highlighted: any = TooltipTemplate.bind({})

Highlighted.args = {
  label: 'Label',
  tooltipText: 'Tooltip bottom',
  placement: 'bottom',
  labelStyle: {
    color: '#311b91',
    border: 'solid 1px #311b91',
    borderRadius: '8px',
    padding: ' 0 4px'
  }
}

export default {
  title: 'atoms/Tooltip',
  component: Tooltip
}
