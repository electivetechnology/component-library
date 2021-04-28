import React, { FC, memo, useContext } from 'react'
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined'
import { ActionButtonStyled } from 'organisms/Form/styles'
import { FormContext } from '../base'
import { theme } from 'styles/theme'

type Props = {
  label: string
  value: string
}

const FormDownload: FC<Props> = ({ label, value }) => {
  const { darkMode } = useContext(FormContext)

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
      <CloudDownloadOutlinedIcon onClick={onDownload} style={{fill: darkMode ? theme.white : theme.grey }} />
    </ActionButtonStyled>
  )
}

export default memo(FormDownload)
