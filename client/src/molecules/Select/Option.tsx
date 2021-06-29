import React, { FC, useContext } from 'react'
import { OptionContext, SelectContext } from './base'
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

  const isActive  = selectedValue === value && value != ''

  return (
    <OptionStyled onClick={onSelect} isActive={isActive}>
      {label}
    </OptionStyled>
  )
}

export default Option
