import React, { useContext, FC, useState, useEffect, Fragment } from 'react'
import { OptionType, SelectContext, SelectMultiContext } from './base'
import { SelectContainerStyled, SelectStyled } from 'molecules/Select/styles'
import Option from 'molecules/Select/Option'

const OptionsMulti: FC = () => {
  const {
    initialValue,
    selected: { value: selectedValue, label: selectedLabel },
    setSelected,
    onChange,
    required,
    children
  } = useContext(SelectContext)

  useEffect(() => {
    onChange(selectedValue)
  }, [selectedValue])

  useEffect(() => {
    console.group('initialValues')
    console.log(initialValue)
    console.groupEnd()
    setSelected(initialValue)
  }, [initialValue])

  return (
    <Fragment>
      <SelectStyled>{selectedLabel ? selectedLabel : 'None'}</SelectStyled>
      {children}
    </Fragment>
  )
}

export default OptionsMulti
