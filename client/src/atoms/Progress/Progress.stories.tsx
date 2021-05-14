import React from 'react'
import Progress from './Progress'

const ProgressTemplate = (args: any) => <Progress {...args} />

// Default
export const Default: any = ProgressTemplate.bind({})

Default.args = {
  label: '1'
}

export default {
  title: 'atoms/Progress',
  component: Progress
}
