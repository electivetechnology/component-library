import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'
import Save from '@material-ui/icons/Save'

export default {
  title: 'atoms/Button',
  component: Button
}

export const Default = () => <Button text='' theme='' />

export const Primary = () => (
  <Button text='Primary' theme='primary' onClick={action('clicked')} />
)

export const Secondary = () => (
  <Button text='Secondary' theme='secondary' onClick={action('clicked')} />
)

export const Beta = () => (
  <Button text='Beta' theme='beta' onClick={action('clicked')} />
)

export const Disabled = () => (
  <Button
    disabled
    text='Disabled'
    theme='primary'
    onClick={action('clicked')}
  />
)

export const FullWidth = () => (
  <Button
    fullWidth
    text='FullWidth'
    theme='primary'
    onClick={action('clicked')}
  />
)

export const Icon = () => (
  <Button
    icon={<Save />}
    text='Icon'
    theme='primary'
    onClick={action('clicked')}
  />
)
