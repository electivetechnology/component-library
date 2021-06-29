import React, {
  useContext,
  FC,
  useEffect,
  Fragment,
  useState,
  Children
} from 'react'
import { SelectContext } from './base'
import {
  SelectStyled,
  OptionSingleStyled,
  SearchInputStyled,
  SelectContainerStyled
} from 'molecules/Select/styles'
import Option from 'molecules/Select/Option'

const OptionsSingle: FC = () => {
  const {
    label,
    initialValue,
    selected: { value: selectedValue },
    handleSelect,
    onChange,
    required,
    showOptions,
    children,
    darkMode,
    disabled
  } = useContext(SelectContext)

  const [search, setSearch] = useState('')

  useEffect(() => {
    onChange(selectedValue)
    handleSearchLabel(selectedValue)
  }, [selectedValue])

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
        {renderChildren()}
      </OptionSingleStyled>
    </Fragment>
  )
}

export default OptionsSingle
