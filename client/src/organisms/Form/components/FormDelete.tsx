import React, { FunctionComponent, memo, useContext, MouseEventHandler } from 'react'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import { FormContext } from '../base'
import { ActionButtonStyled } from '../styles'
import { theme } from 'styles/theme'

interface Props {
  isHovered?: boolean
  handleDelete: MouseEventHandler<SVGSVGElement>
}
const FormDelete: FunctionComponent<Props> = ({ isHovered, handleDelete }) => {
  const { darkMode } = useContext(FormContext)

  return (
    <ActionButtonStyled data-testid='FormDelete' isActive={isHovered}>
      <DeleteOutlineOutlinedIcon
        onClick={handleDelete}
        style={{ fill: darkMode ? theme.white : theme.grey }}
      />
    </ActionButtonStyled>
  )
}

export default memo(FormDelete)
