import React, { useContext, FC } from 'react'
import { sectionContext } from 'molecules/NavIcons/NavSection'
import { Button } from 'atoms'
import { PositionType } from 'utils/types'

type Props = {
  children: any
  name: string
  handleUpdate: Function
  position?: PositionType
}

const NavText: FC<Props> = ({ children, name, handleUpdate, position }) => {
  const { activeName, activeNames, handleClick } = useContext(sectionContext)

  const selected = activeName === name || activeNames.includes(name)

  const onClick = () => {
    handleUpdate()
    handleClick(name)
  }

  return (
    <Button
      label={children}
      onClick={onClick}
      theme={'toggle'}
      selected={selected}
      togglePosition={position}
    />
  )
}

export default NavText
