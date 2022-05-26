import React, { FC, Fragment, useState } from 'react'
import { OptionType, SelectContext } from './base'
import { SelectContainerStyled } from 'molecules/Select/styles'
import OptionsSingle from 'molecules/Select/OptionsSingle'

type Props = {
  children: JSX.Element
  label: string
  initialValue: OptionType
  onChange: Function
  required?: boolean
  outlined?: boolean
  darkMode?: boolean
  disabled?: boolean
  multi?: boolean
}

const Select: FC<Props> = ({
  label,
  initialValue,
  onChange,
  children,
  required = false,
  outlined = false,
  darkMode = false,
  disabled = false
}) => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <SelectContext.Provider
      value={{
        label,
        initialValue,
        onChange,
        required,
        showOptions,
        setShowOptions,
        children,
        darkMode,
        disabled
      }}
    >
      <SelectContainerStyled
        darkMode={darkMode}
        disabled={disabled}
        error={false}
        data-testid='Select'
      >
        <OptionsSingle />
      </SelectContainerStyled>
    </SelectContext.Provider>
  )
}

export default Select
