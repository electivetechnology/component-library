import React, { FC, useState } from 'react'
import NavSection, { sectionContext } from 'components/molecules/NavIcons/NavSection'
import { produce } from 'immer'
import { DividerType } from 'components/molecules/NavIcons/base'

const { Provider } = sectionContext

type Props = {
  initial: Array<string>
  divider: DividerType
}

const NavMulti: FC<Props> = ({ children, initial, divider }) => {
  const [activeNames, setActiveNames] = useState(initial)

  const handleClick = (name: any) => () => {
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
      <NavSection divider={divider}>{children}</NavSection>
    </Provider>
  )
}

export default NavMulti
