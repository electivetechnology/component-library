import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import CsvDownloader from './CsvDownloader'
import { columnsMock, datasMock } from './mocks'

afterEach(cleanup)

const { getByText } = render(<CsvDownloader datas={datasMock} fileName={'file_name'} columns={columnsMock} />)

test('renders CsvDownloader', () => {
  expect(getByText('Download')).toBeDefined
})
