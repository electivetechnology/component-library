import React, { Fragment, FC, useState } from 'react'
import Banner from 'molecules/Banner/Banner'

const Version: FC = () => {
  return (
    <Fragment>
      Hello pop up
    </Fragment>
  )
}

const Template = (args: any) => <Banner {...args} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  open: true,
  children: (
    <Version/>
  )
}

export default {
  title: 'molecules/Banner',
  component: Banner
}
