import React, { Fragment, FC, useState } from 'react'
import PopUp from 'molecules/PopUp/PopUp'

const Version: FC = () => {
  return (
    <Fragment>
      Hello pop up
    </Fragment>
  )
}

const Template = (args: any) => <PopUp {...args} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  open: true,
  children: (
    <Version/>
  )
}

export default {
  title: 'molecules/PopUp',
  component: PopUp
}
