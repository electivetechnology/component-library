import React, { useContext, FC, useState, useEffect } from 'react'
import { OptionType, SelectContext } from './base'
import { SelectContainerStyled, SelectStyled } from 'molecules/Select/styles'
import OptionsSingle from 'molecules/Select/OptionsSingle'
import OptionsMulti from 'molecules/Select/OptionsMulti'

type Props = {
  initialValue: OptionType
  onChange: Function
  required?: boolean
  multi?: boolean
}

const Select: FC<Props> = ({
  initialValue,
  onChange,
  children,
  required = false,
  multi = false
}) => {
  const defaultSelected = initialValue ? initialValue : { label: '', value: '' }
  const defaultSelectedMulti = initialValue ? initialValue : []

  const [selected, setSelected] = useState(defaultSelected)
  const [selectedMulti, setSelectedMulti] = useState(defaultSelectedMulti)

  const [showOptions, setShowOptions] = useState(false)

  const handleActive = () => {
    setShowOptions(!showOptions)
  }

  const { label: selectedLabel } = selected

  const renderOptions = () => (!multi ? <OptionsSingle /> : <OptionsMulti />)

  return (
    <SelectContext.Provider
      value={{
        initialValue,
        onChange,
        required,
        children,
        selected,
        setSelected
      }}
    >
      <SelectContainerStyled onClick={handleActive}>
        <SelectStyled>{selectedLabel ? selectedLabel : 'None'}</SelectStyled>
        {showOptions && renderOptions()}
      </SelectContainerStyled>
    </SelectContext.Provider>
  )
}

export default Select
