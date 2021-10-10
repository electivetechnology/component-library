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
  header: "This is the header",
  paragraph: "This is the paragraph",
  startIcon: false,
}

// StartIcon
export const StartIcon: any = Template.bind({})

StartIcon.args = {
  additionalInformation: "Additional information",
  additionalInformationAlign: "right",
  endIcon: false,
  header: "List with start icon",
  paragraph: "This is the paragraph",
  startIcon: <AddIcon />,
  startIconCentreAlign: false
}

// EndIcon
export const EndIcon: any = Template.bind({})

EndIcon.args = {
  additionalInformation: "Additional information",
  additionalInformationAlign: "right",
  endIcon: <AddIcon />,
  endIconCentreAlign: false,
  header: "List with start and end icon",
  paragraph: "This is the paragraph",
  startIcon: <AddIcon />,
  startIconCentreAlign: false
}

// NoAdditionalInformation
export const NoAdditionalInformation: any = Template.bind({})

NoAdditionalInformation.args = {
  additionalInformation: "",
  additionalInformationAlign: "right",
  endIcon: <AddIcon />,
  endIconCentreAlign: false,
  header: "List with start and end icon",
  paragraph: "This is the paragraph",
  startIcon: <AddIcon />,
  startIconCentreAlign: false
}

export default {
  title: 'molecules/List',
  component: List
}

