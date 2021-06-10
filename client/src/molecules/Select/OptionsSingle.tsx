import React, { useContext, FC, useEffect, Fragment } from 'react'
import { SelectContext } from './base'
import { SelectStyled } from 'molecules/Select/styles'
import Option from 'molecules/Select/Option'

const OptionsSingle: FC = () => {
  const {
    initialValue,
    selected: { value: selectedValue, label: selectedLabel },
    handleSelect,
    onChange,
    required,
    children,
    showOptions
  } = useContext(SelectContext)

  useEffect(() => {
    onChange(selectedValue)
  }, [selectedValue])

  useEffect(() => {
    handleSelect(initialValue)
  }, [initialValue])

  return (
    <Fragment>
      <SelectStyled>{selectedLabel ? selectedLabel : 'None'}</SelectStyled>
      {showOptions && (
        <Fragment>
          {!required && <Option option={{ label: '', value: '' }} />}
          {children}
        </Fragment>
      )}
    </Fragment>
  )
}

export default OptionsSingle
