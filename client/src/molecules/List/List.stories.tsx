import React, { Fragment } from 'react'
import List from './ListComponent'
import AddIcon from '@mui/icons-material/Add'
import { Button } from 'atoms'

const Template = (args: any) => <List {...args} />

// Default
export const Default: any = Template.bind({})

const handleOnClick = () => console.log('click')

const paragraph = (
  <Fragment>
    <div>Paragraph 1</div>
    <div>Paragraph 2</div>
  </Fragment>
)

Default.args = {
  additionalInformation: paragraph,
  additionalInformationAlign: "right",
  endIcon: false,
  overline: "This is the header",
  title: "This is the paragraph",
  startIcon: false,
  selected: false,
  onClick: handleOnClick,
  nonClickable: false
}

// StartIcon
export const StartIcon: any = Template.bind({})

StartIcon.args = {
  additionalInformation: "Additional information",
  additionalInformationAlign: "left",
  endIcon: false,
  overline: "List with start icon",
  title: "This is the paragraph",
  startIcon: <Button label="title" theme='primary' onClick={() => {}} />,
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

// NoClick
export const NoClick: any = Template.bind({})

NoClick.args = {
  additionalInformation: "Additional information",
  additionalInformationAlign: "left",
  endIcon: <AddIcon />,
  endIconCentreAlign: false,
  overline: "List with start and end icon",
  title: "This is the title",
  startIcon: false,
  startIconCentreAlign: false,
  selected: false,
  nonClickable: true
}

export default {
  title: 'molecules/List',
  component: List
}

