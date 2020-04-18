import React from 'react';
import SnackbarContent from './SnackbarContent';
import { action } from '@storybook/addon-actions'
import { AlertTypeConst } from 'atoms/Alert/alertType'

export default {
  title: 'SnackbarContent',
  component: SnackbarContent,
};

export const Success = () => <SnackbarContent variant={AlertTypeConst.SUCCESS} message={'Success Message'} onClose={action('close')} />
export const Warning = () => <SnackbarContent variant={AlertTypeConst.WARNING} message={'Warning Message'} onClose={action('close')} />
export const Info = () => <SnackbarContent variant={AlertTypeConst.INFO} message={'Info Message'} onClose={action('close')} />
export const Error = () => <SnackbarContent variant={AlertTypeConst.ERROR} message={'Error Message'} onClose={action('close')} />

