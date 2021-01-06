import React, { FunctionComponent, ReactElement, useContext } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import FormAction from './FormAction'
import { FormContext } from 'organisms/Form/base'
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'
import isEmpty from 'lodash/isEmpty'

interface Props {
  label: string
  handleSave: any
  icon?: ReactElement<SvgIconProps>
}
const FormSave: FunctionComponent<Props> = ({ label, handleSave, icon }) => {
  const { inputs } = useContext(FormContext)

  const handleAction = () => {
    const hasEmpty = Object.values(inputs).find((input: any) => {
      return isEmpty(input) || isNull(input)
    })

    handleSave(isUndefined(hasEmpty) ? inputs : false)
  }

  return <FormAction label={label} handleAction={handleAction} icon={icon} />
}

export default FormSave
