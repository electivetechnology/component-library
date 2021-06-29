import React, {
  useContext,
  FC,
  useEffect,
  Fragment,
  useState,
  Children
} from 'react'
import { OptionContext, SelectContext } from './base'
import {
  OptionSingleStyled,
  SearchInputStyled,
} from 'molecules/Select/styles'
import Option from 'molecules/Select/Option'

const OptionsSingle: FC = () => {
  const {
    label,
    initialValue,
    onChange,
    required,
    showOptions,
    children,
    darkMode,
    disabled
  } = useContext(SelectContext)

  const [selected, setSelected] = useState('')
  const [search, setSearch] = useState('')

  const handleSelect = (value: string) => {
    setSelected(value)
  }

  useEffect(() => {
    onChange(selected)
    handleSearchLabel(selected)
  }, [selected])

  useEffect(() => {
    handleSelect(initialValue)
    handleSearchLabel(initialValue)
  }, [initialValue])

  const handleSearchLabel = (currentValue: string) => {
    Children.map(children, (child: any) => {
      const { label, value } = child?.props || {}
      if (value === currentValue) {
        setSearch(label)
      }
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const renderChildren = () => {
    const matchingChildren: Array<any> = []
    Children.map(children, (child: any) => {
      const { label } = child?.props || {}
      if (label.toLowerCase().includes(search.toLowerCase())) {
        matchingChildren.push(child)
      }
    })
    return matchingChildren
  }

  return (
    <OptionContext.Provider
      value={{
        selected,
        handleSelect
      }}
    >
      <Fragment>
        <SearchInputStyled
          darkMode={darkMode}
          id='search'
          placeholder={label}
          disabled={disabled}
          error={false}
          value={search}
          onChange={handleChange}
        />
        <OptionSingleStyled isActive={showOptions}>
          {!required && <Option option={{ label: 'None', value: '' }} />}
          {children}
          {/*{renderChildren()}*/}
        </OptionSingleStyled>
      </Fragment>
    </OptionContext.Provider>
  )
}

export default OptionsSingle
