import React, { FunctionComponent, memo, useContext } from 'react'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import { FormContext } from '../base'
import { ActionButtonStyled } from '../styles'
import { theme } from 'styles/theme'


interface Props {
  id?: string
  isHovered?: boolean
}
const FormDelete: FunctionComponent<Props> = ({ id, isHovered}) => {
  const { handleDelete, darkMode } = useContext(FormContext)
  return (
    <ActionButtonStyled data-testid="FormDelete" isActive={isHovered}>
      <DeleteOutlineOutlinedIcon
        onClick={id ? handleDelete(id) : handleDelete}
        style={{fill: darkMode ? theme.white : theme.grey }}
      />
    </ActionButtonStyled>
  )
}

export default memo(FormDelete)
