import React, {
  useContext,
  FC,
  useEffect,
  Fragment,
  useState,
  Children
} from 'react'
import { OptionContext, SelectContext } from './base'
import { OptionSingleStyled, SearchInputStyled } from 'molecules/Select/styles'
import Option from 'molecules/Select/Option'

const OptionsSingle: FC = () => {
  const {
    label,
    initialValue,
    onChange,
    required,
    showOptions,
    setShowOptions,
    children,
    darkMode,
    disabled
  } = useContext(SelectContext)

  const [selected, setSelected] = useState('')
  const [search, setSearch] = useState('')
  const [filterOptions, setFilterOptions] = useState(false)

  const handleSelect = (value: string, hideOptions = true) => {
    setSelected(value)
    setFilterOptions(false)
    hideOptions && setShowOptions(false)
  }

  const handleHideOptions = () => {
    setShowOptions(true)
  }

  useEffect(() => {
    onChange(selected)
    handleSearchLabel(selected)
  }, [selected])

  useEffect(() => {
    handleSelect(initialValue, false)
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
    setFilterOptions(true)
  }

  const renderChildren = () => {
    if (!filterOptions) {
      return children
    }

    const filteredChildren: Array<any> = []
    Children.map(children, (child: any) => {
      const { label } = child?.props || {}
      if (label.toLowerCase().includes(search.toLowerCase())) {
        filteredChildren.push(child)
      }
    })
    return filteredChildren
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
          onClick={handleHideOptions}
        />
        <OptionSingleStyled isActive={showOptions}>
          {!required && <Option option={{ label: 'None', value: '' }} />}
          {showOptions && renderChildren()}
        </OptionSingleStyled>
      </Fragment>
    </OptionContext.Provider>
  )
}

export default OptionsSingle
