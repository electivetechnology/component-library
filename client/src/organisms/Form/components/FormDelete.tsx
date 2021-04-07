import React, { FunctionComponent, memo, useContext } from 'react'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import { FormContext } from '../base'
import { ActionButtonStyled } from '../styles'
import { theme } from 'styles/theme'


interface Props {
  id?: string
}
const FormDelete: FunctionComponent<Props> = ({ id }) => {
  const { handleDelete, darkMode } = useContext(FormContext)
  return (
    <ActionButtonStyled data-testid="FormDelete">
      <DeleteOutlineOutlinedIcon
        onClick={id ? handleDelete(id) : handleDelete}
        style={{fill: darkMode ? theme.white : theme.grey }}
      />
    </ActionButtonStyled>
  )
}

export default memo(FormDelete)
