import React, { FC, useState } from 'react'
import { Form, FormSave, FormInput } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { HandleStatusType } from 'organisms/Form/base'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')

  const handleUpdate = (
    candidate: {[key: string]: string},
    addStatus: HandleStatusType,
  ) => {
    // setName('updated by test')
    addStatus('pending')
    addStatus('error', "there' been a terrible mistake")
    addStatus('success')
  }

  const handleSave = (
    inputs: object,
  ) => {
    console.group('handleSave')
    console.log(inputs)
    console.groupEnd()
  }

  return (
    <Form
      handleUpdate={handleUpdate}
    >
      <FormInput
        label='Name'
        name='name'
        value={name}
        type='text'
        options={{ affix: 'affix me' }}
      />
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
