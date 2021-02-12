import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'

const FormStatus: FunctionComponent = () => {
  const { statuses } = useContext(FormContext)
  const { name } = useContext(InputContext)
  const status = statuses && statuses[name] ? statuses[name] : null

  {
    /*TODO: timeout for success and pending? */
  }
  return (
    <Fragment>
      {status && status.statusType === 'error' && (
        <section>Input is error : {status.message}</section>
      )}
      {status && status.statusType === 'pending' && (
        <section>Input is pending</section>
      )}
      {status && status.statusType === 'success' && (
        <section>Input is success</section>
      )}
    </Fragment>
  )
}

export default memo(FormStatus)
