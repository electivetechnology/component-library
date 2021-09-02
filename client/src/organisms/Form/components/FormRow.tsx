import React, {
  FunctionComponent,
  memo,
  MouseEventHandler,
  useState
} from 'react'
import { FormRowStyled } from '../styles'
import FormDelete from 'organisms/Form/components/FormDelete'
import isUndefined from 'lodash/isUndefined'

type Props = {
  children: any
  handleDelete?: MouseEventHandler<SVGSVGElement>
  disabled?: boolean
}

const FormRow: FunctionComponent<Props> = ({
  children,
  disabled,
  handleDelete
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseHover = () => {
    !disabled && setIsHovered(true)
  }

  const handleMouseLeave = () => {
    !disabled && setIsHovered(false)
  }

  return (
    <FormRowStyled
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      hasDelete={!isUndefined(handleDelete) && !disabled}
    >
      {children}
      {!isUndefined(handleDelete) && !disabled && (
        <FormDelete isHovered={isHovered} handleDelete={handleDelete} />
      )}
    </FormRowStyled>
  )
}

export default memo(FormRow)
