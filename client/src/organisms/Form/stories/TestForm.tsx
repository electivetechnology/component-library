import React, { FC, useEffect, useState } from 'react'
import { Form, FormSave, FormInput, FormRow } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { useFormStatus, useFormHidden } from 'organisms/Form/hooks'
import { FormHidden } from 'organisms/Form/components/FormHidden'
import { selectOptions } from './base'

const TestForm: FC = () => {
  const [text, setText] = useState('initial text')
  const { statuses, addStatus } = useFormStatus()

  useEffect(() => {
    setText('after load text')
  }, [])

  // TODO: don't delete, create a more permanent example
  const { hiddenRef, handleHidden } = useFormHidden()

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

  const handleDelete = () => {
    console.log('handleDelete')
  }

  return (
    <Form statuses={statuses} handleUpdate={handleUpdate}>
        <FormRow handleDelete={handleDelete}>
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
        <FormInput
          label='Text Editor'
          name='Text Input'
          value={text}
          type='textEditor'
        />
        <FormInput
          label='Text Comma Separated'
          name='textInput'
          value=''
          type='text'
          required
          options={{commaSeparated: true}}
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
        <button onClick={handleHidden}>Trigger Ref</button>
        <FormHidden ref={hiddenRef} handleSave={handleSave} />
        <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
        <FormSave label={'This is a very long button'} handleSave={handleSave} icon={<AddIcon />} />
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
