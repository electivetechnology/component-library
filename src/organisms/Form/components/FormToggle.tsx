import React, { FunctionComponent, memo, useContext, useState, Fragment } from 'react'
import { Toggle } from 'electivegroup-component-library-v2'
import { FormContext, InputContext } from 'organisms/Form/base'
import { useEffectAfterMount } from 'utils/base'
import FormStatus from 'organisms/Form/components/FormStatus'

const FormToggle: FunctionComponent = () => {
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
    <Fragment>
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
      <FormStatus />
    </Fragment>

  )
}

export default memo(FormToggle)
