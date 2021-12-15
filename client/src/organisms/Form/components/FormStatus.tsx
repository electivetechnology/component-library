import React, {
  Fragment,
  FunctionComponent,
  useState,
  useEffect,
  useContext
} from 'react'
import { AnimatedStatusBorder } from 'organisms/Form/styles'
import { InputContext } from 'organisms/Form/base'

const FormStatus: FunctionComponent = () => {
  const { status, name } = useContext(InputContext)
  const { statusType } = status || {}
  const success = statusType === 'success'

  const [visible, setVisible] = useState(true)

  console.group('FormStatus')
  console.log(name)
  console.log(success)
  console.groupEnd()

  useEffect(() => {
    success && setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [])

  if (!success) {
    return null
  }

  return <AnimatedStatusBorder status='success' visible={visible} />
}

export default FormStatus
