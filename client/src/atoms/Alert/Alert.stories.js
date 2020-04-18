import React from 'react';
import Alert from './Alert';
import ProviderWrapper from 'utils/ProviderWrapper'
import { SchemaConst } from 'utils/baseSchema'
import { AlertTypeConst } from 'atoms/Alert/alertType'

export default {
  title: 'Alert',
  component: Alert,
};

const successStore = [
  { key: SchemaConst.ALERT, value: {alertType: AlertTypeConst.SUCCESS, message: 'Success Message'} },
]

const warningStore = [
  { key: SchemaConst.ALERT, value: {alertType: AlertTypeConst.WARNING, message: 'Warning Message'} },
]

export const Success = () => <ProviderWrapper store={successStore}><Alert/></ProviderWrapper>
export const Warning = () => <ProviderWrapper store={warningStore}><Alert/></ProviderWrapper>
