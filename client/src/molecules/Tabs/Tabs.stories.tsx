import React, { Fragment } from 'react'
import Tabs from 'molecules/Tabs/Tabs'
import TabBar from 'molecules/Tabs/TabBar'
import Tab from 'molecules/Tabs/Tab'
import TabContent from 'molecules/Tabs/TabContent'
import TabPanel from 'molecules/Tabs/TabPanel'
import TabGroupComponent from 'molecules/Tabs/TabGroup'
import { theme } from 'styles/theme'

const onClick = () => console.log('onClick')

enum TabConst {
  ROLES = 'Roles',
  USERS = 'Users',
  TRACK = 'Track',
  ASSESSMENT = 'Assessment',
  CLIENT = 'Client'
}

const renderContainer = (darkMode: boolean, children: any) => (
  <div
    style={{
      width: '500px',
      backgroundImage: darkMode
        ? `linear-gradient(
      ${theme.accent1Secondary},
      ${theme.accent3Secondary}
    )`
        : 'unset'
    }}
  >
    {children}
  </div>
)

const renderTabs = (darkMode = false) =>
  renderContainer(
    darkMode,
    <Fragment>
      <TabBar>
        <TabGroupComponent colour={'secondaryAccent900'}>
          <Tab
            name={TabConst.ROLES}
            isActive={false}
            onClick={onClick}
            darkMode={darkMode}
          />
          <Tab name={TabConst.USERS} isActive={true} darkMode={darkMode} />
          <Tab name={TabConst.CLIENT} isActive={true} darkMode={darkMode} />
          <Tab name={TabConst.ASSESSMENT} isActive={true} darkMode={darkMode} />
          <Tab name={TabConst.TRACK} isActive={true} darkMode={darkMode} />
        </TabGroupComponent>
      </TabBar>
      <TabContent>
        <TabPanel name={TabConst.ROLES}>{TabConst.ROLES}</TabPanel>
        <TabPanel name={TabConst.USERS}>{TabConst.USERS}</TabPanel>
        <TabPanel name={TabConst.CLIENT}>{TabConst.CLIENT}</TabPanel>
        <TabPanel name={TabConst.ASSESSMENT}>{TabConst.ASSESSMENT}</TabPanel>
        <TabPanel name={TabConst.TRACK}>{TabConst.TRACK}</TabPanel>
      </TabContent>
    </Fragment>
  )

const renderTabGroup = (darkMode = false) =>
  renderContainer(
    darkMode,
    <Fragment>
      <TabBar>
        <TabGroupComponent title={'Settings'} colour={'secondaryAccent900'}>
          <Tab name={TabConst.ROLES} isActive={false} darkMode={darkMode} />
          <Tab name={TabConst.USERS} isActive={true} darkMode={darkMode} />
          <Tab name={TabConst.CLIENT} isActive={true} darkMode={darkMode} />
        </TabGroupComponent>
        <TabGroupComponent title={'Inbox'} colour={'blue'}>
          <Tab name={TabConst.ASSESSMENT} isActive={true} darkMode={darkMode} />
          <Tab name={TabConst.TRACK} isActive={true} darkMode={darkMode} />
        </TabGroupComponent>
      </TabBar>
      <TabContent>
        <TabPanel name={TabConst.ROLES}>{TabConst.ROLES}</TabPanel>
        <TabPanel name={TabConst.USERS}>{TabConst.USERS}</TabPanel>
        <TabPanel name={TabConst.CLIENT}>{TabConst.CLIENT}</TabPanel>
        <TabPanel name={TabConst.ASSESSMENT}>{TabConst.ASSESSMENT}</TabPanel>
        <TabPanel name={TabConst.TRACK}>{TabConst.TRACK}</TabPanel>
      </TabContent>
    </Fragment>
  )

const renderTabGroupPoc = (darkMode = false) =>
  renderContainer(
    darkMode,
    <Fragment>
      <TabBar>
        <TabGroupComponent
          title={'Settings'}
          colour={'secondaryAccent900'}
          activeColour={'accent1'}
        >
          <Tab name={TabConst.ROLES} isActive={false} darkMode={darkMode} />
          <Tab name={TabConst.USERS} isActive={true} darkMode={darkMode} />
          <Tab name={TabConst.CLIENT} isActive={true} darkMode={darkMode} />
        </TabGroupComponent>
        <TabGroupComponent
          title={'Inbox'}
          colour={'blue'}
          activeColour={'accent2'}
        >
          <Tab name={TabConst.ASSESSMENT} isActive={true} darkMode={darkMode} />
          <Tab name={TabConst.TRACK} isActive={true} darkMode={darkMode} />
        </TabGroupComponent>
      </TabBar>
    </Fragment>
  )

const Template = (args: any) => <Tabs {...args} active={TabConst.ROLES} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  children: renderTabs()
}

// DarkMode
export const DarkMode: any = Template.bind({})

DarkMode.args = {
  children: renderTabs(true)
}

// TabGroup
export const TabGroup: any = Template.bind({})

TabGroup.args = {
  children: renderTabGroup()
}

// TabGroupPoc
export const TabGroupPoc: any = Template.bind({})

TabGroupPoc.args = {
  children: renderTabGroupPoc()
}

export default {
  title: 'molecules/Tabs',
  component: Tabs
}
