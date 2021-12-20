import React from 'react'
import Loader from 'atoms/Loader/Loader'
import LoaderComponent from 'atoms/Loader/LoaderComponent'

const Template = (args: any) => <LoaderComponent {...args} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  type: 'default'
}

// Spinner
export const Spinner: any = Template.bind({})

Spinner.args = {
  type: 'spinner'
}

export default {
  title: 'atoms/Loaders',
  component: Loader
}
