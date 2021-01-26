import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Form,
  FormAction,
  FormInfo,
  FormInput,
  FormTitle
} from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'

const { getAllByTestId, getByLabelText, getByText, getByTestId } = screen

const handleUpdate = jest.fn()
const handleAction = jest.fn()

const renderForm = () => {
  return render(
    <Form handleUpdate={handleUpdate}>
      <FormTitle label='FormTitle' />
      <FormInput label='Form Text' name='text' value='' type='text' />
      <FormInput
        label='Form TextArea'
        name='textarea'
        value=''
        type='text'
        options={{ multiline: true }}
      />
      <FormInput
        label='Form Select'
        name='select'
        value={status}
        type='select'
        options={{ selectOptions: [{ value: '', label: '' }] }}
      />
      <FormInput
        label='Form Colour'
        name='name'
        value='#DCE1E8'
        type='colourPicker'
      />
      <FormInfo info='Form Info' />
      <FormAction
        label='Set Primary'
        handleAction={handleAction}
        icon={<AddIcon />}
      />
    </Form>
  )
}

test('renders basic form', () => {
  renderForm()
  expect(getAllByTestId('FormTitle')).toBeDefined
  expect(getAllByTestId('FormText')).toBeDefined
  expect(getAllByTestId('FormTextarea')).toBeDefined
  expect(getByLabelText('Form Select')).toBeDefined
  expect(getByText('Form Colour')).toBeDefined
  expect(getByText('Form Info')).toBeDefined
  expect(getByTestId('FormAction')).toBeDefined
})

test('handles handleAction', () => {
  renderForm()
  fireEvent.click(getByTestId(`FormAction`))
  expect(handleAction).toBeCalled()
})
