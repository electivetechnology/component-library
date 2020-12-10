import React, { FunctionComponent, memo, Fragment } from 'react'

type Props = {
  children: any
}

const FormRow: FunctionComponent<Props> = ({ children }) => {
  return <Fragment>
    {children}
  </Fragment>
}

export default memo(FormRow)
