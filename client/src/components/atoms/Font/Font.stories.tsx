import React from 'react'
import Font from './Font'

export default {
  title: 'atoms/Font',
  component: Font
}

export const Default = () => <Font variant={''}>Font Text</Font>

export const Body = () => <Font variant={'body1'}>Font Text</Font>

export const Component = () => (
  <Font variant={'body1'} component={'h2'}>
    Font Text
  </Font>
)

export const GutterBottom = () => (
  <Font variant={'body1'} gutterBottom={true}>
    Font Text
  </Font>
)

export const Align = () => (
  <Font variant={'body1'} align={'right'}>
    Font Text
  </Font>
)

export const Inline = () => (
  <Font variant={'body1'} inline={true}>
    Font Text
  </Font>
)

export const Colour = () => (
  <Font variant={'body1'} color={'red'}>
    Font Text
  </Font>
)

export const Overflow = () => (
  <Font variant={'body1'} overflow={true}>
    Font Text
  </Font>
)

export const FontWeight = () => (
  <Font variant={'body1'} fontWeight={400}>
    Font Text
  </Font>
)

export const UpperCase = () => (
  <Font variant={'body1'} uppercase={true}>
    Font Text
  </Font>
)

export const MultilineOverflow = () => (
  <Font variant={'body1'} multilineOverflow={true}>
    Font Text
  </Font>
)
