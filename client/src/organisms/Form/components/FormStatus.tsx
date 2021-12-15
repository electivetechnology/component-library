import React, { Fragment, FunctionComponent, useState, useEffect } from 'react'
import { AnimatedStatusBorder } from 'organisms/Form/styles'

const FormStatus: FunctionComponent = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [])

  return <AnimatedStatusBorder status='success' visible={visible} />
}

export default FormStatus
