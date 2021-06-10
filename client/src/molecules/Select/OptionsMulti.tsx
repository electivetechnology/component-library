import React, { useContext, FC, useEffect, Fragment } from 'react'
import { SelectContext } from './base'

const OptionsMulti: FC = () => {
  const {
    initialValue,
    selectedMulti,
    handleSelect,
    onChange,
    required,
    children
  } = useContext(SelectContext)

  useEffect(() => {
    onChange(selectedMulti)
  }, [selectedMulti])

  useEffect(() => {
    console.group('initialValues')
    console.log(initialValue)
    console.groupEnd()
    handleSelect(initialValue)
  }, [initialValue])

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default OptionsMulti
