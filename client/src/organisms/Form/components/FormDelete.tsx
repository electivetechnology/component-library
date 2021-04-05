import React, { FunctionComponent, memo, useContext } from 'react'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import { FormContext } from '../base'
import { ActionButtonStyled } from '../styles'


interface Props {
  id?: string
}
const FormDelete: FunctionComponent<Props> = ({ id }) => {
  const { handleDelete, darkMode } = useContext(FormContext)
  return (
    <ActionButtonStyled data-testid="FormDelete" isDelete={true}>
      <DeleteOutlineOutlinedIcon
        onClick={id ? handleDelete(id) : handleDelete}
        style={{fill: darkMode ? 'white' : 'black'}}
      />
    </ActionButtonStyled>
  )
}

export default memo(FormDelete)
