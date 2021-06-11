import React, { FC, useContext } from 'react'
import { SelectContext } from './base'
import { OptionStyled } from 'molecules/Select/styles'

type Props = {
  label: string
  value: string
}
const Option: FC<Props> = ({ label, value }) => {
  const {
    selected: { value: selectedValue },
    setSelected
  } = useContext(SelectContext)

  const handleSelect = () => {
    setSelected({ label, value })
  }

  return (
    <OptionStyled onClick={handleSelect} active={selectedValue === value}>
      {label} - {value}
    </OptionStyled>
  )
}

export default Option
