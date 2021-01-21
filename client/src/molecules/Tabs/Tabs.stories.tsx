import React, { Fragment } from 'react'
import Tabs from 'molecules/Tabs/Tabs'
import Tab from 'molecules/Tabs/Tab'

const renderTabs = () => (
  <Fragment>
    <Tab label='Roles' to={`admin/roles`} />
  </Fragment>
)

const Template = (args: any) => <Tabs {...args} />

// Nav
export const Toggle: any = Template.bind({})

Toggle.args = {
  children: renderTabs()
}

export default {
  title: 'molecules/Tabs/Tabs',
  component: Tabs
}
