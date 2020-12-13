import React, { FunctionComponent, memo, ReactElement, useContext } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { FormAction } from 'organisms/Form'
import { FormContext } from 'organisms/Form/base'

interface Props {
  label: string
  handleSave: any
  icon?: ReactElement<SvgIconProps>
}
const FormSave: FunctionComponent<Props> = ({ label, handleSave, icon }) => {
  const { inputs } = useContext(FormContext)

  const handleAction = () => {
    handleSave(inputs)
  }

  return <FormAction label={label} handleAction={handleAction} icon={icon} />
}

export default memo(FormSave)
