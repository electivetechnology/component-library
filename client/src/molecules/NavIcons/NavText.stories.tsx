import React, { Fragment } from 'react'
import NavToggle from 'molecules/NavIcons/NavToggle'
import NavIcons from 'molecules/NavIcons/NavIcons'
import NavText from 'molecules/NavIcons/NavText'

const Template = (args: any) => <NavIcons {...args} />

const handleUpdate = () => {}

const renderActions = () => (
  <NavToggle initial='' title='Actions' position='end'>
    <NavText name='Hello' handleUpdate={handleUpdate} position={'start'}>
      Hello long text
    </NavText>
    <NavText name='World' handleUpdate={handleUpdate} position={'end'}>
      World
    </NavText>
  </NavToggle>
)
// Nav
export const Actions: any = Template.bind({})

Actions.args = {
  layout: 'horizontal',
  children: <Fragment>{renderActions()}</Fragment>
}

export default {
  title: 'molecules/NavIcons/Text',
  component: NavIcons
}
