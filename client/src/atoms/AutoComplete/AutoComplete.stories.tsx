import React from 'react'
import AutoComplete from 'atoms/AutoComplete/AutoComplete'

export default {
  title: 'atoms/AutoComplete',
  component: AutoComplete
}

export const Default = () => (
  <AutoComplete
    options={[{ label: 'Label', value: 'Value' }]}
    placeholder={'PlaceHolder Text'}
  />
)
