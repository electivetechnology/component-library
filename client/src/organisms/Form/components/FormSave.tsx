import React, { FunctionComponent, ReactElement, useContext } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import FormAction from './FormAction'
import { FormContext } from 'organisms/Form/base'
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'
import isEmpty from 'lodash/isEmpty'
import { Button } from 'atoms'

interface Props {
  label: string
  handleSave: any
  icon?: ReactElement<SvgIconProps>
}
const FormSave: FunctionComponent<Props> = ({ label, handleSave, icon }) => {
  const { inputs, addStatus } = useContext(FormContext)

  const handleAction = () => {
    const hasEmpty = Object.values(inputs).find((input: any) => {
      return isEmpty(input) || isNull(input)
    })

    const handleStatus = (name:string, statusType: any, message: any) => {
      addStatus(statusType, name, message)
    }

    handleSave(isUndefined(hasEmpty) ? inputs : false, handleStatus)
  }

  return <Button label={label} onClick={handleAction} icon={icon} theme='primary'/>
}

export default FormSave
