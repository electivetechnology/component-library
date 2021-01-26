import React, { FunctionComponent, memo } from 'react'
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined'
import { ActionButtonStyled } from 'organisms/Form/styles'

type Props = {
  label: string
  value: string
}

const FormDownload: FunctionComponent<Props> = ({ label, value }) => {
  const onDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([value], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `${label}.txt`
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }
  return (
    <ActionButtonStyled data-testid="FormDownload">
      <CloudDownloadOutlinedIcon onClick={onDownload} />
    </ActionButtonStyled>
  )
}

export default memo(FormDownload)
