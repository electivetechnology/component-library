import React from 'react'
import Header from './Header'
import Font from '../Font/Font'

const content = () => (
  <div>
    <Font variant='caption'>Content example</Font>
  </div>
)

const HearderTemplate = (args: any) => <Header {...args} />

// Primary
export const Primary: any = HearderTemplate.bind({})

Primary.args = {
  title: 'DASHBOARD',
  children: content()
}

// Secondary
export const Secondary: any = HearderTemplate.bind({})

Secondary.args = {
  title: 'DASHBOARD',
  children: content(),
  headerTheme: 'secondary'
}

// Simple
export const Simple: any = HearderTemplate.bind({})

Simple.args = {}

export default {
  title: 'atoms/SubsectionHeader',
  component: Header
}
