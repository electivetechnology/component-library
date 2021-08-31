import React, { FunctionComponent, memo, useContext, useState } from 'react'
import { FormContext, InputContext, handleFormColor } from 'organisms/Form/base'
import { EditorLabel } from '../styles'
import { Editor } from '@tinymce/tinymce-react'
import { useFormInput } from 'organisms/Form/hooks'


const FormTextEditor: FunctionComponent = () => {
  const {
    inputValue,
    name,
    type,
    label,
    options,
    outlined,
    disabled = false,
    required,
    status,
    requiredError
  } = useContext(InputContext)

  const { onBlur, darkMode = false, inputs } = useContext(FormContext)

  const handleBlur = () => {
    onBlur(name)
  }

  const { value, onChange } = useFormInput(name, inputValue)

  return (
    <div style={{ paddingBottom: '8px' }}>
      <EditorLabel>{label}</EditorLabel>
      <Editor
        apiKey="bf6mljfgcw8s1y8vjj7gotxmhtr1bs7jdttorpreswqh54lt"
        initialValue={value}
        disabled={disabled}
        init={{
          browser_spellcheck: true,
          height: 200,
          menubar: false,
          plugins: [
            'autolink lists link print preview fullscreen hr',
            'table wordcount autoresize directionality',
          ],
          toolbar:
            'bold italic underline | bullist numlist | formatselect | link |',
          table_toolbar: '',
          table_advtab: false,
          table_row_advtab: false,
          table_cell_advtab: false,
        }}
        onEditorChange={onChange}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default memo(FormTextEditor)
