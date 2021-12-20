import React, { useContext, FC, useEffect, Fragment, Children, useState } from 'react'
import { OptionType, SelectContext } from 'molecules/Select/base'
import { SelectStyled, TagStyled } from 'molecules/Select/styles'
import isEmpty from 'lodash/isEmpty'

const OptionsMulti: FC = () => {
  const {
    initialValue,
    onChange,
    required,
    children,
    showOptions
  } = useContext(SelectContext)

  const [selectedMulti, setSelectedMulti] = useState(
    [] as Array<{ label: ''; value: '' }>
  )

  const handleSelect = (options: OptionType) => {
    const newSelected: any = options
    selectedMulti.push(newSelected)
    setSelectedMulti(selectedMulti)
  }

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
      {showOptions &&
        children?.props?.children
          .filter(
            (child: any) =>
              child?.type?.displayName !== 'Option' ||
              !selectedMulti.find(
                (option: any) => option.value === child?.props?.option?.value
              )
          )
          .map((child: any) => child)}
    </Fragment>
  )
}

export default OptionsMulti
