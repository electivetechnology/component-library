import React, { FunctionComponent, memo, useContext, useState } from 'react'
import { Toggle } from 'atoms'
import { FormContext, InputContext } from 'organisms/Form/base'
import { useEffectAfterMount } from 'utils/base'

const FormToggle: FunctionComponent = () => {
  const { inputValue, name, label, disabled, options } = useContext(InputContext)

  const { onBlur, updateInput, darkMode } = useContext(FormContext)

  const [isActive, setActive] = useState(inputValue)

  const handleChange = () => {
    setActive(!inputValue)
    updateInput(name, !inputValue)
  }

  useEffectAfterMount(() => {
    onBlur(name)
  }, [isActive])

  return (
    <Toggle
      isActive={inputValue ? inputValue : false}
      label={label}
      disabled={disabled}
      onChange={handleChange}
      activeLabel={options?.activeLabel}
      inactiveLabel={options?.inactiveLabel}
    />
  )
}

export default memo(FormToggle)
