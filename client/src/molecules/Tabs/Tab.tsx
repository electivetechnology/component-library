import React, { useContext, FC, cloneElement } from 'react'
import { tabContext } from 'molecules/Tabs/Tabs'

interface Props {
  label: string
  to: string
  readOnly?: boolean
}

const Tab: FC<Props> = ({ label, to, readOnly }) => {
  const { active } = useContext(tabContext)

  return null
}

export default Tab
