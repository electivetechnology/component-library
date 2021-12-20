import React from 'react'
import { action } from '@storybook/addon-actions'
import Checkbox from 'atoms/Checkbox/Checkbox'

export default {
  title: 'atoms/Checkbox',
  component: Checkbox
}

export const Default = () => <Checkbox onChange={action('changed')} />

export const Label = () => (
  <Checkbox onChange={action('changed')} label={'Some Label'} />
)

export const LabelVariant = () => (
  <Checkbox onChange={action('changed')} fontSize={'20px'} />
)

export const Blur = () => (
  <Checkbox onChange={action('changed')} onBlur={action('blurred')} />
)

export const Checked = () => (
  <Checkbox onChange={action('changed')} value={true} />
)

export const Disabled = () => (
  <Checkbox onChange={action('changed')} disabled={true} />
)

export const All = () => (
  <Checkbox
    onChange={action('changed')}
    label={'Some Label'}
    fontSize={'20px'}
    onBlur={action('blurred')}
    value={true}
  />
)

export const AllDisabled = () => (
  <Checkbox
    onChange={action('changed')}
    label={'Some Label'}
    fontSize={'20px'}
    onBlur={action('blurred')}
    value={true}
    disabled={true}
  />
)

export const AllDisabledUnchecked = () => (
  <Checkbox
    onChange={action('changed')}
    label={'Some Label'}
    fontSize={'20px'}
    onBlur={action('blurred')}
    value={false}
    disabled={true}
  />
)
