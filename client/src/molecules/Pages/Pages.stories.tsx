import React from 'react'
import Pages from 'molecules/Pages/Pages'
import { PageContext } from './base'

const PagesTemplate = (args: any) => {
  return (
    <PageContext.Provider value={{ ...args }}>
      <Pages />
    </PageContext.Provider>
  )
}
// Primary
export const Primary: any = PagesTemplate.bind({})

const mockFunction = () => {}

Primary.args = {
  currentStep: 1,
  finalStep: 3,
  handleClose: mockFunction,
  next: mockFunction,
  setNext: mockFunction,
  back: () => mockFunction,
  setBack: mockFunction,
  progress: 2,
  helperText: "some helper text"
}

// NoSteps
export const NoSteps: any = PagesTemplate.bind({})

NoSteps.args = {
  handleClose: mockFunction,
  next: mockFunction,
  back: mockFunction,
}


export default {
  title: 'molecules/Pages',
  component: Pages
}
