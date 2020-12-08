import React, { FC, useState } from 'react'
import NavSection, { sectionContext } from './NavSection'
import { produce } from 'immer'
import { DividerType } from 'components/atoms/NavIcons/base'

const { Provider } = sectionContext

type Props = {
  initial: Array<string>
  divider: DividerType
}

const NavMulti: FC<Props> = ({ children, initial, divider }) => {
  const [activeIds, setActiveIds] = useState(initial)

  const handleClick = (id: any) => () => {
    const exists = activeIds.find((activeId) => activeId === id)

    const updated: any = produce(activeIds, (draft: any) => {
      if (exists) {
        return draft.filter((activeId: string) => activeId !== id)
      } else {
        draft.push(id)
      }
    })

    setActiveIds(updated)
  }

  return (
    <Provider value={{ activeId: '', activeIds, handleClick }}>
      <NavSection divider={divider}>{children}</NavSection>
    </Provider>
  )
}

export default NavMulti
