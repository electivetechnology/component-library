import React, { Fragment } from 'react'
import Tabs from 'molecules/Tabs/Tabs'
import Tab from 'molecules/Tabs/Tab'

const onClick = () => {}

const renderTabs = () => (
  <Fragment>
    <Tab label='Roles' onClick={onClick} />
    <Tab label='User' onClick={onClick} />
  </Fragment>
)

const Template = (args: any) => <Tabs {...args} />

// Nav
export const Active: any = Template.bind({})

Active.args = {
  children: renderTabs()
}

export default {
  title: 'molecules/Tabs',
  component: Tabs
}
