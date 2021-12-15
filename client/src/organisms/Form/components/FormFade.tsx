import React, { Fragment, FunctionComponent, useState, useEffect } from 'react'
import { FadeStyled
} from 'organisms/Form/styles'
import { useEffectAfterMount } from 'utils/base'

const FormFade: FunctionComponent = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }, [])

  return (
    <FadeStyled out={!visible}>
      Fade this
    </FadeStyled>
  )
}

export default FormFade
