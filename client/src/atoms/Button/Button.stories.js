import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button text={'Button Name'} theme={'primary'} onClick={action('clicked')}/>;
