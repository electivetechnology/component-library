import { withDesign } from 'storybook-addon-designs'
import Button from 'atoms/Button/Button'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'

export default {
  title: 'atoms/Fig',
  component: Button,
  decorators: [withDesign],
}

const Template = (args: any) => <Button {...args} />

// FAB desktop
export const Fig: any = Template.bind({})

Fig.args = {
  theme: 'primary',
  label: 'New',
  icon: <AddIcon />
}

Fig.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}
