import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormDownload } from 'components/common/Form'

const { container } = screen

const onDownload = jest.fn()

render(<FormDownload label={'download'} value={'download'} />)

test('renders FormDownload', () => {
  expect(container).toBeDefined
})

// test('handles onDownload', () => {
//   fireEvent.click(container)
//   expect(onDownload).toBeCalled()
// })
