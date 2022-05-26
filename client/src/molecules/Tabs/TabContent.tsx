import React, { Fragment } from 'react'

type Props = { children: any }

const TabContent: React.FC<Props> = ({ children }) => {
  return <Fragment>{children}</Fragment>
}

export default TabContent
