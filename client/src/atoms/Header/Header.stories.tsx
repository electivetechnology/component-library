import React from 'react'
import Header from './Header'
import Font from '../Font/Font'

const content = () => (
  <div>
    <Font variant='caption'>Content example</Font>
  </div>
)

const HearderTemplate = (args: any) => <Header {...args} />

const HearderRowTemplate = (args: any) => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'column',
      width: '320px',
      height: '40vh',
      justifyContent: 'flex-start'
    }}
  >
    <Header title='Header 1' noScroll>
      {content()}
      {content()}
      {content()}
      {content()}
    </Header>
    <Header {...args} />
  </div>
)

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

// Row
export const Row: any = HearderRowTemplate.bind({})

Row.args = {
  title: 'DASHBOARD',
  children: (
    <div>
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
      {content()}
    </div>
  ),
  headerTheme: 'secondary'
}

export default {
  title: 'atoms/SubsectionHeader',
  component: Header
}
