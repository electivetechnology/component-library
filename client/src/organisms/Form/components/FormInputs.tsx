import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import { InputProps } from 'organisms/Form/base'
import FormColourPicker from 'organisms/Form/components/FormColourPicker'
import FormText from 'organisms/Form/components/FormText'
import FormSelect from 'organisms/Form/components/FormSelect'
import FormPhone from 'organisms/Form/components/FormPhone'
import FormDate from 'organisms/Form/components/FormDate'
import FormCheckbox from 'organisms/Form/components/FormCheckbox'
import FormToggle from 'organisms/Form/components/FormToggle'
import FormTextEditor from 'organisms/Form/components/FormTextEditor'

const FormInputs: FunctionComponent<InputProps> = ({
  type,
}) => {
  return (
    <Fragment>
      {['text', 'number', 'password'].includes(type) && <FormText />}
      {type === 'textEditor' && <FormTextEditor />}
      {type === 'select' && <FormSelect />}
      {type === 'phone' && <FormPhone />}
      {type === 'date' && <FormDate />}
      {type === 'colourPicker' && <FormColourPicker />}
      {type === 'checkbox' && <FormCheckbox />}
      {type === 'toggle' && <FormToggle />}
    </Fragment>
  )
}

export default memo(FormInputs)
