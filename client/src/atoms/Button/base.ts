import { ReactElement, MouseEventHandler } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { PositionType, ThemeType } from 'utils/types'

export type Props = {
  label: string
  theme: ThemeType
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  icon?: ReactElement<SvgIconProps>
  href?: string
  fullWidth?: boolean
  formRow?: boolean
  togglePosition?: PositionType
  selected?: boolean
}
