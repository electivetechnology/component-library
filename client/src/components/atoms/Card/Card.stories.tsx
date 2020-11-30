import React from 'react'
import CardContainer from './CardContainer'
import ComponentCard from './ComponentCard'

const CardTemplate = (args: any) => <ComponentCard {...args} />

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

export const Card: any = CardTemplate.bind({})

Card.args = {
  text: 'Card',
  theme: 'primary',
  hover: true
}

export default {
  title: 'atoms/Card',
  component: CardContainer
}
