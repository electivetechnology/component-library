import React, { FC, useContext, useEffect, useState } from 'react'
import { Form, FormSave, FormInput, FormRow } from 'organisms/Form'
import AddIcon from '@mui/icons-material/Add'
import { useFormStatus, useFormHidden } from 'organisms/Form/hooks'
import FormHidden from 'organisms/Form/components/FormHidden'
import { selectOptions } from './base'
import { FormContext } from '../base'

const TestForm: FC = () => {
  const [text, setText] = useState('initial text')
  const { statuses, addStatus } = useFormStatus()

  useEffect(() => {
    setText('after load text')
    addStatus('select', 'error', 'select error')
    addStatus('textEditor', 'error', 'textEditor error')
    addStatus('text', 'error', 'text error')
    addStatus('textInput', 'error', 'textInput error')
    addStatus('newInput', 'error', 'newInput error')
    addStatus('checkbox', 'error', 'checkbox error')
    addStatus('toggle', 'error', 'toggle error')
    addStatus('phoneInput', 'error', 'phoneInput error')
    addStatus('dateInput', 'error', 'dateInput error')
  }, [])

  // TODO: don't delete, create a more permanent example
  const { hiddenRef, handleHidden } = useFormHidden()
  const { inputs } = useContext(FormContext)

  const handleUpdate = (name: string, value: string) => {
    console.group('handleUpdate')
    console.log(name)
    console.log(value)
    console.groupEnd()
    // addStatus(name, 'error', 'some error single update')
  }

  const handleSave = (inputs2: object) => {
    addStatus('formSelect', 'success')
    addStatus('colourPicker', 'success')
    addStatus('textEditor', 'success')
    addStatus('text', 'success')
    addStatus('textInput', 'success')
    addStatus('newInput', 'success')
    addStatus('formCheckbox', 'success')
    addStatus('toggle', 'success')
    addStatus('phoneInput', 'success')
    addStatus('dateInput', 'success')
    console.group('handleSave')
    console.log('inputs', inputs)
    console.log('inputs2', inputs2)
    console.groupEnd()
  }

  const handleDelete = () => {
    console.log('handleDelete')
  }

  return (
    <Form statuses={statuses} handleUpdate={handleUpdate}>
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
      <FormRow handleDelete={handleDelete}>
        <FormInput
          label='Form Select'
          name='formSelect'
          value='available'
          required={false}
          type='select'
          options={{
            selectOptions
          }}
        />
        <FormInput
          label='Text Input'
          name='textInput'
          value=''
          type='text'
          required
        />
      </FormRow>
      <FormInput
        label='Colour Picker'
        name='colourPicker'
        value=''
        type='colourPicker'
      />
      <FormInput
        label='Text Editor'
        name='textEditor'
        value={text}
        type='textEditor'
        options={{ tools: 'none' }}
      />
      <FormInput
        label='Text Comma Separated'
        name='textInput'
        value=''
        type='text'
        required
        options={{ commaSeparated: true }}
      />
      <FormInput
        label='Text multi'
        name='newInput'
        value='new input'
        type='text'
        options={{ multiline: true }}
      />
      <FormInput
        label='CheckBox'
        name='formCheckbox'
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
        label='Phone Input'
        name='phoneInput'
        value='some input'
        type='phone'
      />
      <FormInput label='Date' name='dateInput' value='some input' type='date' />
      <button onClick={handleHidden}>Trigger Ref</button>
      <FormHidden ref={hiddenRef} handleSave={handleSave} />
      <FormSave
        label={'This is a very long button'}
        handleSave={handleSave}
        icon={<AddIcon />}
      />
      <FormRow handleDelete={handleDelete}>
        <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
        <FormInput
          label='Form Select'
          name='select'
          value='available'
          required={false}
          type='select'
          options={{
            selectOptions
          }}
        />
        <FormInput
          label='Text Input'
          name='textInput'
          value=''
          type='text'
          required
        />
      </FormRow>
    </Form>
  )
}

export default TestForm
