import React, {
  useContext,
  FC,
  useEffect,
  Fragment,
  useState,
  Children
} from 'react'
import { OptionContext, SelectContext } from './base'
import { InputIconStyled, InputStyled, LabelStyled, OptionSingleStyled, SearchInputStyled, SelectLabelStyled } from 'molecules/Select/styles'
import Option from 'molecules/Select/Option'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import { theme } from 'styles/theme'

const NONE = { label: '-- None --', value: '' }

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
    value === NONE.value && setSearch(NONE.label)
  }

  const handleHideOptions = () => {
    setShowOptions(!showOptions)
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

  const fieldPlaceholder = required ? `${label}*` : label

  return (
    <OptionContext.Provider
      value={{
        selected,
        handleSelect
      }}
    >
      <InputStyled isActive={showOptions} onClick={handleHideOptions}>
        <SelectLabelStyled>
          {/* <LabelStyled>{fieldPlaceholder}</LabelStyled> */}
          {/* TODO: implement later  */}
          <SearchInputStyled
            disabled={disabled}
            id='search'
            placeholder={fieldPlaceholder}
            value={search}
            onChange={handleChange}
            autoComplete="off"
          />
        </SelectLabelStyled>
        <InputIconStyled>
          {showOptions ?
            <ArrowDropUp style={{fill: theme.grayGeyser }} /> :
            <ArrowDropDown style={{fill: theme.grayGeyser }} />}
        </InputIconStyled>
      </InputStyled>
      <OptionSingleStyled isActive={showOptions}>
        {showOptions && (
          <Fragment>
            {!required && <Option option={NONE} isTitle />}
            {renderChildren()}
          </Fragment>
        )}
      </OptionSingleStyled>
    </OptionContext.Provider>
  )
}

export default OptionsSingle
