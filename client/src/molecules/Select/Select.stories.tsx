import React, { Fragment, FC, useState } from 'react'
import { Select, Option } from 'molecules/Select'

const Template = (args: any) => <Select {...args} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  open: true,
  children: (
    <Fragment>
      <Option label='Option 1' value='1' />
      <Option label='Option 2' value='2' />
    </Fragment>
  )
}

export default {
  title: 'molecules/Select',
  component: Select
}
