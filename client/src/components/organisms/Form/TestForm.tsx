import React, { FC, useState } from 'react'
import { Form, FormInput } from 'components/organisms/Form'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')

  const handleUpdate = (value: any) => {
    setName('false name')
  }

  return (
    <Form handleUpdate={handleUpdate}>
      <FormInput label='Name' name='name' value={name} type='text' />
    </Form>
  )
}

export default TestForm
