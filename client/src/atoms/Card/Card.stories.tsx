import React, { Fragment } from 'react'
import CardComponent from 'atoms/Card/Card'
import { Pill, Font } from 'atoms'
import { renderStatus } from 'atoms/Pill/base'

const CardTemplate = (args: any) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <CardComponent {...args} />
    </div>
  )
}

// Primary
export const Primary: any = CardTemplate.bind({})

Primary.args = {
  text: 'Primary',
  theme: 'primary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  fullWidth: true,
  fullHeight: true
}

export const Secondary: any = CardTemplate.bind({})

Secondary.args = {
  text: 'Secondary',
  theme: 'secondary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  fullWidth: true,
  fullHeight: true
}

export const Selected: any = CardTemplate.bind({})

Selected.args = {
  text: 'Secondary',
  theme: 'secondary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  selected: true,
  fullWidth: true,
  fullHeight: true
}

// Status
export const Status: any = CardTemplate.bind({})

Status.args = {
  text: 'Primary',
  theme: 'primary',
  hover: false,
  footer: 'Footer',
  headerContent: (
    <div style={{ width: '100%', display: 'inline-flex' }}>
      <Font variant='h4'>Label</Font>
      <Pill color={renderStatus('primary')} />
    </div>
  ),
  fullWidth: true,
  fullHeight: true
}

export const Hover: any = CardTemplate.bind({})

Hover.args = {
  text: 'Secondary',
  theme: 'secondary',
  footer: 'Footer',
  header: 'Label',
  hover: true,
  fullWidth: true,
  fullHeight: true
}

export const Card: any = CardTemplate.bind({})

Card.args = {
  text: 'Card',
  theme: 'primary',
  hover: true,
  fullWidth: true,
  fullHeight: true
}

// CardWithPadding
export const CardWithPadding: any = CardTemplate.bind({})

CardWithPadding.args = {
  text: 'Card with padding',
  theme: 'primary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  padding: true,
  fullWidth: true,
  fullHeight: true
}

// CardNoBorder
export const CardNoBorder: any = CardTemplate.bind({})

CardNoBorder.args = {
  text: 'Card with no border',
  theme: 'primary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  noBorder: true,
  fullWidth: true,
  fullHeight: true
}

// CardWithFullWidth
export const CardWithFullWidth: any = CardTemplate.bind({})

CardWithFullWidth.args = {
  text: 'Card fullwidth',
  theme: 'primary',
  hover: false,
  fullWidth: true,
  fullHeight: true
}

export default {
  title: 'atoms/Card',
  component: CardComponent
}
