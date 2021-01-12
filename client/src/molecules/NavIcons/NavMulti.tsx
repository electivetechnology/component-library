import React, { FC, useState } from 'react'
import NavSection, {
  sectionContext
} from 'molecules/NavIcons/NavSection'
import { produce } from 'immer'
import { DividerType, PositionType } from 'molecules/NavIcons/base'

const { Provider } = sectionContext

type Props = {
  initial: Array<string>
  divider: DividerType
  position?: PositionType
}

const NavMulti: FC<Props> = ({ children, initial, divider, position= 'start' }) => {
  const [activeNames, setActiveNames] = useState(initial)

  const handleClick = (name: any) => {
    const exists = activeNames.find((activeName) => activeName === name)

    const updated: any = produce(activeNames, (draft: any) => {
      if (exists) {
        return draft.filter((activeName: string) => activeName !== name)
      } else {
        draft.push(name)
      }
    })

    setActiveNames(updated)
  }

  return (
    <Provider value={{ activeName: '', activeNames, handleClick }}>
      <NavSection divider={divider} position={position}>{children}</NavSection>
    </Provider>
  )
}

export default NavMulti
