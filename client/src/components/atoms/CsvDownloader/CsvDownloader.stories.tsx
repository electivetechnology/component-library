import React from 'react'
import CsvDownloader from './CsvDownloader'
import { Button } from 'components/atoms'
import { columnsMock, datasMock } from './mocks'

export default {
  title: 'atoms/CsvDownloader',
  component: CsvDownloader
}

export const Default = () => (
  <CsvDownloader
    datas={datasMock}
    fileName={'file_name'}
    columns={columnsMock}
  />
)

export const WithChildButton = () => (
  <CsvDownloader datas={datasMock} fileName={'file_name'} columns={columnsMock}>
    <Button theme='primary' label='Download' onClick={() => {}} />
  </CsvDownloader>
)
