import React, { useContext, FC, useEffect, Fragment } from 'react'
import { SelectContext } from './base'
import { SelectStyled, TagStyled } from 'molecules/Select/styles'
import isEmpty from 'lodash/isEmpty'

const OptionsMulti: FC = () => {
  const {
    initialValue,
    selectedMulti,
    handleSelect,
    onChange,
    required,
    children,
    showOptions
  } = useContext(SelectContext)

  useEffect(() => {
    onChange(selectedMulti)
  }, [selectedMulti])

  useEffect(() => {
    handleSelect(initialValue)
  }, [initialValue])

  return (
    <Fragment>
      <SelectStyled>
        {!isEmpty(selectedMulti)
          ? selectedMulti.map((selected) => (
              <TagStyled>{selected.label}</TagStyled>
            ))
          : 'None'}
      </SelectStyled>
      {showOptions && children}
    </Fragment>
  )
}

export default OptionsMulti
