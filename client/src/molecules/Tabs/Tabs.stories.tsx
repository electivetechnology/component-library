import React, { Fragment } from 'react'
import Tabs from 'molecules/Tabs/Tabs'
import Tab from 'molecules/Tabs/Tab'

const onClick = () => console.log('onClick')
const onHover = () => console.log('onHover')

const renderTabs = () => (
  <Fragment>
    <Tab name='Roles' onHover={onHover} isActive={false} readOnly={true} />
    <Tab name='User' onClick={onClick} isActive={true} />
  </Fragment>
)

const Template = (args: any) => (
  <Tabs {...args} active={'Roles'} readOnly={true} />
)

// Nav
export const Active: any = Template.bind({})

Active.args = {
  children: renderTabs()
}

export default {
  title: 'molecules/Tabs',
  component: Tabs
}
