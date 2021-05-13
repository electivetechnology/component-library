import React, { 
  FunctionComponent
} from 'react'
import { renderIcon, IconsConst } from 'icons/base'

type Props = {
  icon: IconsConst
  iconStyle?: {}
  iconAltText: string
}

const Icon: FunctionComponent<Props> = ({
  icon,
  iconStyle,
  iconAltText
}) => {
  return (
    <img
      src={renderIcon(icon)}
      style={iconStyle}
      alt={iconAltText}
    />
  )
}

export default Icon
