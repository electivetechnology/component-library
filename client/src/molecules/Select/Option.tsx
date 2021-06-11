import React, { FC, useContext } from 'react'
import { SelectContext } from './base'
import { OptionStyled } from 'molecules/Select/styles'

type Props = {
  option: {
    label: string
    value: string
  }
}
const Option: FC<Props> = ({ option: { label, value } }) => {
  const {
    selected: { value: selectedValue },
    handleSelect
  } = useContext(SelectContext)

  const onSelect = () => {
    handleSelect({ label, value })
  }

  return (
    <OptionStyled onClick={onSelect} active={selectedValue === value}>
      {label} - {value}
    </OptionStyled>
  )
}

export default Option
