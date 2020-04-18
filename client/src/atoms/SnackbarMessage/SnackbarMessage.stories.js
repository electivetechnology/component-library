import React from 'react';
import SnackbarMessage from './SnackbarMessage';
import { action } from '@storybook/addon-actions'
import { AlertTypeConst } from 'atoms/Alert/alertType'

export default {
  title: 'SnackbarMessage',
  component: SnackbarMessage,
};

export const Success = () => <SnackbarMessage variant={AlertTypeConst.SUCCESS} message={'Success Message'} onClose={action('close')} />
export const Warning = () => <SnackbarMessage variant={AlertTypeConst.WARNING} message={'Warning Message'} onClose={action('close')} />
export const Info = () => <SnackbarMessage variant={AlertTypeConst.INFO} message={'Info Message'} onClose={action('close')} />
export const Error = () => <SnackbarMessage variant={AlertTypeConst.ERROR} message={'Error Message'} onClose={action('close')} />
