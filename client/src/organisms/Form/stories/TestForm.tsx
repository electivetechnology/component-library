import React, { FC } from 'react'
import { Form, FormSave, FormInput, FormOption } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { useFormStatus, useFormHidden } from 'organisms/Form/hooks'
import { FormHidden } from 'organisms/Form/components/FormHidden'
import { selectOptions } from './base'

const TestForm: FC = () => {
  const { statuses, addStatus } = useFormStatus()

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

  return (
    <Form statuses={statuses} handleUpdate={handleUpdate}>
      <div style={{ display: 'inline-flex', width: '100%' }}>
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
        <FormInput
          label='Text Editor'
          name='Text Input'
          value='some input'
          type='textEditor'
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
      </div>
    </Form>
  )
}

export default TestForm
