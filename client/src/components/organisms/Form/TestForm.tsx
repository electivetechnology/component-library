import React, { FC, useState } from 'react'
import { Form, FormInput } from 'components/organisms/Form'
import { useFormError } from 'components/organisms/Form/hooks'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')
  const { addError, errors } = useFormError()

  const handleUpdate = (name: string, value: string) => {
    addError(name)
    setName(`${value} with error`)
  }

  return (
    <Form handleUpdate={handleUpdate} errors={errors}>
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
