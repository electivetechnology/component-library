import React, { useContext, FC, cloneElement } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'
import { TabStyled } from 'molecules/Tabs/styles'

interface Props {
  label: string
  onClick?: any
  readOnly?: boolean
}

const Tab: FC<Props> = ({ label, onClick, readOnly }) => {
  const { active } = useContext(tabContext)

  return (
    <TabStyled onClick={onClick}>
      {label} - isActive {active}
    </TabStyled>
  )
}

export default Tab
