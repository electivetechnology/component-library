import React, { FC } from 'react'
import CsvDownloader from 'react-csv-downloader'

type Props = {
  datas: Array<any>
  fileName: string
  columns: Array<any>
}

const CsvDownloaderComponent: FC<Props> = ({
  datas,
  fileName,
  columns,
  children
}) => (
  <CsvDownloader
    data-testid='CsvDownloader'
    datas={datas}
    filename={fileName}
    columns={columns}
    prefix={false}
    suffix={false}
  >
    {children}
  </CsvDownloader>
)

export default CsvDownloaderComponent
