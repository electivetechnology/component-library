import React, { FunctionComponent, memo, Fragment } from 'react'
import FormColourPicker from 'organisms/Form/components/FormColourPicker'
import FormText from 'organisms/Form/components/FormText'
import FormSelectField from 'organisms/Form/components/FormSelectField'
import FormPhone from 'organisms/Form/components/FormPhone'
import FormDate from 'organisms/Form/components/FormDate'
import FormCheckbox from 'organisms/Form/components/FormCheckbox'
import FormToggle from 'organisms/Form/components/FormToggle'
import FormTextEditor from 'organisms/Form/components/FormTextEditor'

type Props = {
  type: string
}

const FormInputs: FunctionComponent<Props> = ({ type }) => {
  return (
    <Fragment>
      {['text', 'number', 'password'].includes(type) && <FormText />}
      {type === 'textEditor' && <FormTextEditor />}
      {type === 'select' && <FormSelectField />}
      {type === 'phone' && <FormPhone />}
      {type === 'date' && <FormDate />}
      {type === 'colourPicker' && <FormColourPicker />}
      {type === 'checkbox' && <FormCheckbox />}
      {type === 'toggle' && <FormToggle />}
    </Fragment>
  )
}

export default memo(FormInputs)
