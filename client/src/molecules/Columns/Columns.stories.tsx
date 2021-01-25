import React from 'react'
import Columns from 'molecules/Columns/Columns'
import Column from 'molecules/Columns/Column'

const Template = (args: any) => <Columns {...args} />

const renderColumns = () => (
  <Columns>
    <Column fixedWidth={500} isClosable={false}>
      <div>column 1</div>
    </Column>
    <Column colspan={2}>
      <div>column 2</div>
    </Column>
  </Columns>
)
// Nav
export const Close: any = Template.bind({})

Close.args = {
  layout: 'horizontal',
  children: renderColumns()
}

export default {
  title: 'molecules/Columns',
  component: Columns
}
