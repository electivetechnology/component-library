import React, { FC, useContext } from 'react'
import { OptionContext, SelectContext } from './base'
import { OptionStyled } from 'molecules/Select/styles'

type Props = {
  option: {
    label: string
    value: string
  },
  isTitle?: boolean
}
const Option: FC<Props> = ({ isTitle = false, option: { label, value } }) => {
  const { selected, handleSelect } = useContext(OptionContext)

  const onSelect = () => {
    handleSelect(value)
  }

  const isActive = selected === value && value != ''

  return (
    <OptionStyled
      onClick={onSelect}
      isActive={isActive}
      isTitle={isTitle}>
      {label}
    </OptionStyled>
  )
}

export default Option
