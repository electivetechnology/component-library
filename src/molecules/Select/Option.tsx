import React, { FC, useContext } from 'react'
import { OptionContext, SelectContext } from 'molecules/Select/base'
import { OptionStyled } from 'molecules/Select/styles'

type Props = {
  label: string
  value: string
}
const Option: FC<Props> = ({ label, value }) => {
  const { selected, handleSelect } = useContext(OptionContext)

  const hasValue = value != ''

  const onSelect = () => {
    handleSelect(value)
  }

  const isActive = selected === value && hasValue

  return (
    <OptionStyled
      onClick={onSelect}
      isActive={isActive}
      hasValue={hasValue}>
      {label}
    </OptionStyled>
  )
}

export default Option
