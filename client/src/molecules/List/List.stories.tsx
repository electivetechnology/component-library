import React from 'react'
import List from './ListComponent'
import AddIcon from '@material-ui/icons/Add'

const Template = (args: any) => <List {...args} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  additionalInformation: "Additional information",
  additionalInformationAlign: "right",
  endIcon: false,
  overline: "This is the header",
  title: "This is the paragraph",
  startIcon: false,
  selected: false,
}

// StartIcon
export const StartIcon: any = Template.bind({})

StartIcon.args = {
  additionalInformation: "Additional information",
  additionalInformationAlign: "left",
  endIcon: false,
  overline: "List with start icon",
  title: "This is the paragraph",
  startIcon: <AddIcon />,
  startIconCentreAlign: false,
  selected: false,
}

// EndIcon
export const EndIcon: any = Template.bind({})

EndIcon.args = {
  additionalInformation: "Additional information",
  additionalInformationAlign: "left",
  endIcon: <AddIcon />,
  endIconCentreAlign: false,
  overline: "List with start and end icon",
  title: "This is the title",
  startIcon: false,
  startIconCentreAlign: false,
  selected: false,
}

export default {
  title: 'molecules/List',
  component: List
}

