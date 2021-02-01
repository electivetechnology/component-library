import React from 'react'
import CardContainer from 'atoms/Card/CardContainer'
import ComponentCard from 'atoms/Card/ComponentCard'

const setSeleted = () => {}

const CardTemplate = (args: any) => {
  return <ComponentCard {...args} />
}

// Primary
export const Primary: any = CardTemplate.bind({})

Primary.args = {
  text: 'Primary',
  theme: 'primary',
  hover: false,
  footer: 'Footer',
  header: 'Label'
}

export const Secondary: any = CardTemplate.bind({})

Secondary.args = {
  text: 'Secondary',
  theme: 'secondary',
  hover: false,
  footer: 'Footer',
  header: 'Label'
}

export const Selected: any = CardTemplate.bind({})

Selected.args = {
  text: 'Secondary',
  theme: 'secondary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  selected: true,
  setSelected: setSeleted
}

export const Hover: any = CardTemplate.bind({})

Hover.args = {
  text: 'Secondary',
  theme: 'secondary',
  footer: 'Footer',
  header: 'Label',
  hover: true
}

export const Card: any = CardTemplate.bind({})

Card.args = {
  text: 'Card',
  theme: 'primary',
  hover: true
}

// CardWithPadding
export const CardWithPadding: any = CardTemplate.bind({})

CardWithPadding.args = {
  text: 'Card with padding',
  theme: 'primary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  padding: true
}

// CardNoBorder
export const CardNoBorder: any = CardTemplate.bind({})

CardNoBorder.args = {
  text: 'Card with no border',
  theme: 'primary',
  hover: false,
  footer: 'Footer',
  header: 'Label',
  noBorder: true
}

// CardWithFullWidth
export const CardWithFullWidth: any = CardTemplate.bind({})

CardWithFullWidth.args = {
  text: 'Card fullwidth',
  theme: 'primary',
  hover: false,
  fullWidth: true
}

export default {
  title: 'atoms/Card',
  component: CardContainer
}
