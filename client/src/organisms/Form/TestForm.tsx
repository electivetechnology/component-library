import React, { FC, useState } from 'react'
import { Form, FormInput } from 'organisms/Form/index'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')

  const handleUpdate = (name: string, value: string, addError: Function, removeError: Function) => {
    addError(name, 'there\' been a terrible mistake')
    removeError(name)
    setName(`${value} with error`)
  }

  return (
    <Form handleUpdate={handleUpdate}>
      <FormInput
        label='Name'
        name='name'
        value={name}
        type='text'
        options={{ affix: 'affix me' }}
      />
    </Form>
  )
}

export default TestForm
