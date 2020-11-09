import { ReactElement, MouseEventHandler } from 'react'
import {
  primaryStyles,
  secondaryStyles,
  tertiaryStyles,
  mobileStyles,
  actionStyles,
  togglePrimaryStyles,
  toggleSecondaryStyles
} from './styles'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

export type ThemeType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'mobile'
  | 'action'
  | 'togglePrimary'
  | 'toggleSecondary'

export type Props = {
  label: string
  theme: ThemeType
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  icon?: ReactElement<SvgIconProps>
  href?: string
  width?: number
  fullWidth?: boolean
}

export const getVariant = (theme: ThemeType) => {
  const outlined = ['secondary', 'toggleSecondary']
  return outlined.includes(theme) ? 'outlined' : 'contained'
}

export const getThemeStyles = (theme: ThemeType) => {
  switch (theme) {
    case 'primary':
      return primaryStyles
    case 'secondary':
      return secondaryStyles
    case 'tertiary':
      return tertiaryStyles
    case 'mobile':
      return mobileStyles
    case 'action':
      return actionStyles
    case 'togglePrimary':
      return togglePrimaryStyles
    case 'toggleSecondary':
      return toggleSecondaryStyles
  }
}
