import React, { FC } from 'react'
import { Form, FormSave, FormInput, FormOption } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { useFormStatus, useFormHidden } from 'organisms/Form/hooks'
import { FormHidden } from 'organisms/Form/components/FormHidden'

const selectOptions = [
  <FormOption type='option' label='Available' value='available' />,
  <FormOption type='option' label='Not looking' value='notLooking' />,
  <FormOption type='option' label='Archive' value='archive' />,
  <FormOption type='option' label='Removed' value='removed' />,
]

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
      <FormHidden ref={hiddenRef} handleSave={handleSave}/>
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
