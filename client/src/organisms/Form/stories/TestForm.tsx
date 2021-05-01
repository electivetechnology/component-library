import React, { FC, useContext, useState } from 'react'
import { Form, FormSave, FormInput } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { candidateStatusOptions } from 'organisms/Form/mock'
import { useFormStatus } from 'organisms/Form/hooks'
import { FormContext } from 'organisms/Form/base'
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import { ButtonWrapperStyled } from 'organisms/Form/styles'
import { Button } from 'atoms'
import TextField from '@material-ui/core/TextField'
import { FormHidden } from 'organisms/Form/components/FormHidden'

const TestForm: FC = () => {
  const { statuses, addStatus } = useFormStatus()

  const handleUpdate = (name: string, value: string) => {
    console.group('handleUpdate')
    console.log(name)
    console.log(value)
    console.groupEnd()
    // addStatus(name, 'error', 'some error single update')
  }

  const handleSave = (inputs: object) => {
    // addStatus('textInput', 'error', 'some error with text')
    // addStatus('newInput', 'error', 'some error with text area')
    console.group('handleSave')
    console.log(inputs)
    console.groupEnd()
  }

  const txtField: any = React.useRef(null)
  const handleRef = (ref: any) => {
    if (txtField && txtField.current) {
      txtField.current.click()
    }
  }

  return (
    <Form statuses={statuses}>
      <button onClick={handleRef}>Trigger Ref</button>
      <FormHidden ref={txtField}/>
      {/*<FormRef inputRef={txtField} label={'Save'} />*/}
      <FormInput
        label='Text Input'
        name='textInput'
        value=''
        type='text'
        required
      />

      <FormInput
        label='Text Input2'
        name='textInput2'
        value=''
        type='text'
        required
      />
      <FormInput
        label='New Input'
        name='newInput'
        value='new input'
        type='text'
        options={{ multiline: true }}
      />
      <FormInput
        label='Select Input'
        name='select'
        value={''}
        type='select'
        options={{ selectOptions: candidateStatusOptions }}
      />
      <FormInput
        label='CheckBox'
        name='checkbox'
        value={false}
        type='checkbox'
      />
      <FormInput
        label='Toggle'
        name='toggle'
        value={false}
        type='toggle'
        options={{ inactiveLabel: 'no', activeLabel: 'yes' }}
      />
      <FormInput
        label='Text Input'
        name='Text Input'
        value='some input'
        type='phone'
      />
      <FormInput
        label='Date'
        name='Text Input'
        value='some input'
        type='date'
      />
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
