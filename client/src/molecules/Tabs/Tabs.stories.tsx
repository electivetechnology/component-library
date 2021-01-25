import React, { Fragment } from 'react'
import Tabs from 'molecules/Tabs/Tabs'
import TabBar from 'molecules/Tabs/TabBar'
import Tab from 'molecules/Tabs/Tab'
import TabContent from 'molecules/Tabs/TabContent'
import TabPanel from 'molecules/Tabs/TabPanel'

const onClick = () => console.log('onClick')
const onHover = () => console.log('onHover')

enum TabConst {
  ROLES = 'Roles',
  USERS = 'Users'
}

const renderTabs = () => (
  <Fragment>
    <TabBar>
      <Tab name={TabConst.ROLES} isActive={false} onClick={onClick} />
      <Tab name={TabConst.USERS} isActive={true} />
    </TabBar>
    <TabContent>
      <TabPanel name={TabConst.ROLES}></TabPanel>
      <TabPanel name={TabConst.USERS}></TabPanel>
    </TabContent>
  </Fragment>
)

const Template = (args: any) => (
  <Tabs {...args} active={TabConst.ROLES} readOnly={true} />
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
