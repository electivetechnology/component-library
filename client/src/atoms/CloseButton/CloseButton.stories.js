import React from 'react';
import CloseButton from 'atoms/CloseButton/CloseButton';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CloseButton',
  component: CloseButton,
};

export const Close = () => <CloseButton onClose={action('close')} />
