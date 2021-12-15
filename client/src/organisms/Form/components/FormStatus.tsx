import React, { Fragment, FunctionComponent, useState, useEffect } from 'react'
import {
  AnimatedStatusBorder, FadeStyled
} from 'organisms/Form/styles'

const FormStatus: FunctionComponent = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }, [])

  // if(!visible){
  //   return null
  // }

  // return <AnimatedStatusBorder status='success' />

  return (
    <FadeStyled out={!visible}>
      <AnimatedStatusBorder status='success' />
    </FadeStyled>
  )
}

export default FormStatus
