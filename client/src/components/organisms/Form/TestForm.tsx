import React, { FC, useState } from 'react'
import { Form, FormInput } from 'components/organisms/Form'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')

  const handleUpdate = (value: any) => {
    setName(value)
    console.group('handleUpdate')
    console.log(value)
    console.groupEnd()
  }

  return (
    <Form handleUpdate={handleUpdate}>
      <FormInput
        input={{
          label: 'Name',
          value: name,
          type: 'text',
          required: true
        }}
      />
    </Form>
  )
}

export default TestForm
