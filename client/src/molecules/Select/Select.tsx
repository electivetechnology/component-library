import React, { useContext, FC, useState, useEffect } from 'react'
import { OptionType, SelectContext } from './base'
import { SelectContainerStyled, SelectStyled } from 'molecules/Select/styles'
import Option from 'molecules/Select/Option'

type Props = {
  initialValue: OptionType
  onChange: Function
  required: boolean
}

const Select: FC<Props> = ({
  initialValue,
  onChange,
  children,
  required = false
}) => {
  const defaultSelected = initialValue ? initialValue : { label: '', value: '' }
  const [selected, setSelected] = useState(defaultSelected)
  const [showOptions, setShowOptions] = useState(false)
  const { label, value } = selected

  const handleActive = () => {
    setShowOptions(!showOptions)
  }

  useEffect(() => {
    onChange(value)
  }, [selected])

  useEffect(() => {
    console.group('initialValues')
    console.log(initialValue)
    console.groupEnd()
    setSelected(initialValue)
  }, [initialValue])

  return (
    <SelectContext.Provider
      value={{
        selected,
        setSelected
      }}
    >
      <SelectContainerStyled onClick={handleActive}>
        <SelectStyled>{label ? label : 'None'}</SelectStyled>
        {showOptions && required && <Option label='' value='' />}
        {showOptions && children}
      </SelectContainerStyled>
    </SelectContext.Provider>
  )
}

export default Select
