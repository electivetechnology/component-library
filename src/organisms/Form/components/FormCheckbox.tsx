import React, { Fragment, FunctionComponent, memo, useContext, useState } from 'react'
import { Checkbox } from 'atoms'
import { FormContext, InputContext } from 'organisms/Form/base'
import { useEffectAfterMount } from 'utils/base'
import FormStatus from 'organisms/Form/components/FormStatus'

const FormCheckbox: FunctionComponent = () => {
  const { inputValue, name, label, disabled, required } = useContext(InputContext)

  const { onBlur, updateInput, darkMode } = useContext(FormContext)

  const [isActive, setActive] = useState(inputValue)

  const handleChange = (active: any) => {
    setActive(active)
    updateInput(name, active)
  }

  useEffectAfterMount(() => {
    onBlur(name)
  }, [isActive])

  return (
    <Fragment>
      <Checkbox
        value={inputValue ? inputValue : false}
        label={label}
        disabled={disabled}
        onBlur={undefined}
        fontSize='12px'
        darkMode={darkMode}
        onChange={handleChange}
        required={required}
      />
      <FormStatus />
    </Fragment>

  )
}

export default memo(FormCheckbox)
