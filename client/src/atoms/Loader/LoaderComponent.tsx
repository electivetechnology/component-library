import React, { FunctionComponent, Fragment } from 'react'
import Spinner from './Spinner'
import Loader from './Loader'

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
