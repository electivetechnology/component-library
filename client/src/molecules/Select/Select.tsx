import React, { useContext, FC, useState } from 'react'
import { SelectContext } from './base'
import { SelectContainerStyled, SelectStyled } from 'molecules/Select/styles'

const Select: FC = ({ children }) => {
  const [selected, setSelected] = useState({ label: '', value: '' })
  const [showOptions, setShowOptions] = useState(false)
  const { label } = selected

  const handleActive = () => {
    setShowOptions(!showOptions)
  }

  return (
    <SelectContext.Provider
      value={{
        selected,
        setSelected
      }}
    >
      <SelectContainerStyled onClick={handleActive}>
      <SelectStyled>{label ? label : 'None'}</SelectStyled>
      {showOptions && children}
      </SelectContainerStyled>
    </SelectContext.Provider>
  )
}

export default Select
