import { ReactElement, MouseEventHandler } from 'react'
import { SvgIconProps } from '@mui/material/SvgIcon'

export type ThemeType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'mobile'
  | 'action'
  | 'togglePrimary'
  | 'toggleSecondary'
  | 'quaternary'

export type Props = {
  label: string
  theme: ThemeType
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  icon?: ReactElement<SvgIconProps>
  href?: string
  fullWidth?: boolean
  formRow?: boolean
}
