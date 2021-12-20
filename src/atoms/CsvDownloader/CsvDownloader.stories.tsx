import React from 'react'
import CsvDownloader from 'atoms/CsvDownloader/CsvDownloader'
import { Button } from 'electivegroup-component-library-v2'
import { columnsMock, datasMock } from 'atoms/CsvDownloader/mocks'

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
