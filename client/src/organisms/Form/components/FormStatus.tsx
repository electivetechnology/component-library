import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'

const FormStatus: FunctionComponent = () => {
  const { status } = useContext(InputContext)

  if (!status) {
    return null
  }

  const { statusType, message } = status

  {
    /*TODO: timeout for success and pending? */
  }
  return (
    <span>
      {statusType === 'error' && (
        <section>{message ? message : 'Input is pending'}</section>
      )}
      {statusType === 'pending' && (
        <section>{message ? message : 'Input is pending'}</section>
      )}
      {statusType === 'success' && (
        <section>{message ? message : 'Input is success'}</section>
      )}
    </span>
  )
}

export default memo(FormStatus)
