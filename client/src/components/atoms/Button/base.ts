import { ReactElement, MouseEventHandler } from 'react'
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
