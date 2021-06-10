import React, { FC, useState } from 'react'
import { OptionType, SelectContext } from './base'
import { SelectContainerStyled } from 'molecules/Select/styles'
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
  const [selected, setSelected] = useState({ label: '', value: '' })
  const [selectedMulti, setSelectedMulti] = useState(
    [] as Array<{ label: ''; value: '' }>
  )

  const [showOptions, setShowOptions] = useState(false)

  const handleActive = () => {
    setShowOptions(!showOptions)
  }

  const handleSelect = (options: OptionType) => {
    if (multi) {
      const newSelected: any = options
      selectedMulti.push(newSelected)
      setSelectedMulti(selectedMulti)
    } else {
      setSelected(options)
    }
  }

  const { label: selectedLabel } = selected

  const renderOptions = () => (multi ? <OptionsMulti /> : <OptionsSingle />)

  return (
    <SelectContext.Provider
      value={{
        initialValue,
        onChange,
        required,
        showOptions,
        children,
        selected,
        selectedMulti,
        handleSelect
      }}
    >
      <SelectContainerStyled onClick={handleActive}>
        {renderOptions()}
      </SelectContainerStyled>
    </SelectContext.Provider>
  )
}

export default Select
