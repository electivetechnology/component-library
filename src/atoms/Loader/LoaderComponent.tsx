import React, { FunctionComponent, Fragment } from 'react'
import Spinner from 'atoms/Loader/Spinner'
import Loader from 'atoms/Loader/Loader'

type Props = {
  type: string
}

const LoaderComponent: FunctionComponent<Props> = ({ type }) => {
  return (
    <Fragment>
      {type === 'default' && <Loader />}
      {type === 'spinner' && <Spinner />}
    </Fragment>
  )
}

export default LoaderComponent
