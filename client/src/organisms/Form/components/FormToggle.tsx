import React, { FC, memo, useContext, useState } from 'react'
import { Toggle } from 'atoms'
import { FormContext, InputContext } from 'organisms/Form/base'
import { useEffectAfterMount } from 'utils/base'

const FormToggle: FC = () => {
  const { inputValue, name, label, disabled, options, required } = useContext(InputContext)

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
      darkMode={darkMode}
      required={required}
    />
  )
}

export default memo(FormToggle)
