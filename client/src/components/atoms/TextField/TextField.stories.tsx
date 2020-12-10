import React from 'react'
import TextField from './TextField'

export default {
  title: 'atoms/TextField',
  component: TextField
}

export const Default = () => (
  <TextField
    onChange={null}
    label={'label'}
    variant={'standard'}
    id={'1'}
    margin={'none'}
  />
)
