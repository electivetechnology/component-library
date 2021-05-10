import React, { FunctionComponent, memo, useContext } from 'react'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import { FormContext, InputContext } from '../base'
import { ActionButtonStyled } from '../styles'
import { theme } from 'styles/theme'

interface Props {
  isHovered?: boolean
}
const FormDelete: FunctionComponent<Props> = ({ isHovered }) => {
  const { darkMode } = useContext(FormContext)
  const { handleDelete } = useContext(InputContext)

  if (!handleDelete) {
    return null
  }
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
