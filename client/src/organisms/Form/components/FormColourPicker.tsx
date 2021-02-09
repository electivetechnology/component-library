import React, {
  FunctionComponent,
  memo,
  useState,
  Fragment,
  useContext,
  useEffect
} from 'react'
import { BlockPicker } from 'react-color'
import { PickerStyled, ColorStyled, PickerLabelStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import { InputContext, FormContext } from 'organisms/Form/base'

const FormColourPicker: FunctionComponent = () => {
  const { inputValue, name, label, disabled } = useContext(InputContext)

  const { updateInput, onBlur, inputs } = useContext(FormContext)

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
          onClick={handleOnClick}
        />
        <PickerLabelStyled>
          <Font variant='h5'>{label}</Font>
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
