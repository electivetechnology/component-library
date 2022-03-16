import React, { FunctionComponent, memo, useContext } from 'react'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import { ActionButtonStyled } from 'organisms/Form/styles'
import { FormContext, handleFormComponentColor, InputContext } from '../base'
import { theme } from 'styles/theme'

type Props = {
  label: string
  value: string
}

const FormDownload: FunctionComponent<Props> = ({ label, value }) => {
  const { darkMode } = useContext(FormContext)
  const { disabled = false } = useContext(InputContext)

  const onDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([value], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `${label}.txt`
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }
  return (
    <ActionButtonStyled data-testid="FormDownload" isActive>
      <CloudDownloadOutlinedIcon onClick={onDownload} style={{
        fill: handleFormComponentColor(theme.grey, darkMode, disabled) }} />
    </ActionButtonStyled>
  )
}

export default memo(FormDownload)
