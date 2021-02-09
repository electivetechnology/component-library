import React from 'react'
import Columns from 'molecules/Columns/Columns'
import Column from 'molecules/Columns/Column'

const Template = (args: any) => <Columns {...args} />

const renderColumns = () => (
  <Columns width={1000}>
    <Column fixedWidth={500} align={'left'}>
      <div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
      </div>
    </Column>
    <Column colspan={2} align={'right'}>
      <div>column 2</div>
    </Column>
    <Column colspan={1} align={'right'}>
      <div>column 3</div>
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
