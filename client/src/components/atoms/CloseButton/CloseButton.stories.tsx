import React from 'react';
import CloseButton from './CloseButton';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CloseButton',
  component: CloseButton,
};

export const Close = () => <CloseButton onClose={action('close')} />
