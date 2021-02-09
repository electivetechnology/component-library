import React, { Fragment } from 'react'
import Tabs from 'molecules/Tabs/Tabs'
import TabBar from 'molecules/Tabs/TabBar'
import Tab from 'molecules/Tabs/Tab'
import TabContent from 'molecules/Tabs/TabContent'
import TabPanel from 'molecules/Tabs/TabPanel'
import { theme } from 'styles/theme'

const onClick = () => console.log('onClick')

enum TabConst {
  ROLES = 'Roles',
  USERS = 'Users'
}

const renderTabs = (darkMode: boolean) => (
  <div
    style={{
      backgroundImage: darkMode
        ? `linear-gradient(
      ${theme.gradientBlue},
      ${theme.gradientRed}
    )`
        : 'unset'
    }}
  >
    <TabBar>
      <Tab
        name={TabConst.ROLES}
        isActive={false}
        onClick={onClick}
        darkMode={darkMode}
      />
      <Tab name={TabConst.USERS} isActive={true} darkMode={darkMode} />
    </TabBar>
    <TabContent>
      <TabPanel name={TabConst.ROLES}>{TabConst.ROLES}</TabPanel>
      <TabPanel name={TabConst.USERS}>{TabConst.USERS}</TabPanel>
    </TabContent>
  </div>
)

const Template = (args: any) => <Tabs {...args} active={TabConst.ROLES} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  children: renderTabs(false)
}

// DarkMode
export const DarkMode: any = Template.bind({})

DarkMode.args = {
  children: renderTabs(true)
}

export default {
  title: 'molecules/Tabs',
  component: Tabs
}
