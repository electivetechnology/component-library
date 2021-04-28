import React, {
  FC,
  memo,
  useState,
  Fragment,
  useContext,
  useEffect
} from 'react'
import { BlockPicker } from 'react-color'
import { PickerStyled, ColorStyled, PickerLabelStyled, RequiredStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import { InputContext, FormContext } from 'organisms/Form/base'
import { theme } from 'styles/theme'

const FormColourPicker: FC = () => {
  const { inputValue, name, label, disabled, required = false} = useContext(InputContext)

  const { updateInput, onBlur, darkMode } = useContext(FormContext)

  const [chosenColor, setChosenColor] = useState('')
  const [showPicker, setShowPicker] = useState(false)

  useEffect(() => {
    chosenColor && onBlur()
  }, [chosenColor, onBlur])

  const handleOnChange = (color: any) => {
    updateInput(name, color.hex)
    setChosenColor(color.hex)
  }

  const handleOnClick = () => {
    if (!disabled) {
      setShowPicker(!showPicker)
    }
  }

  const defaultColours = [
    '#D63948',
    '#311B92',
    '#6746C3',
    '#F9A825',
    '#FFD95A',
    '#00ACC1',
    '#00C18D',
    '#DCE1E8',
    '#5B637A',
    '#0D1221'
  ]

  const colorValue = inputValue ? inputValue : chosenColor

  return (
    <Fragment>
      <PickerStyled>
        <ColorStyled
          style={{ backgroundColor: colorValue }}
          onClick={disabled ? undefined : handleOnClick}
        />
        <PickerLabelStyled>
          <Font variant='h5' color={darkMode ? theme.white : theme.grayComment}>{label}</Font>
          {required && <RequiredStyled fontSize="24">*</RequiredStyled>}
        </PickerLabelStyled>
      </PickerStyled>
      {showPicker && (
        <BlockPicker
          colors={defaultColours}
          color={colorValue}
          onChange={handleOnChange}
        />
      )}
    </Fragment>
  )
}

export default memo(FormColourPicker)
