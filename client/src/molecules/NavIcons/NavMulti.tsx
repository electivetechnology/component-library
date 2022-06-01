import React, { FC, useState, useEffect } from 'react'
import NavSection, { sectionContext } from 'molecules/NavIcons/NavSection'
import { produce } from 'immer'
import { DividerType } from 'molecules/NavIcons/base'
import { PositionType } from 'utils/types'

const { Provider } = sectionContext

type Props = {
  children: any
  initial: Array<string>
  divider?: DividerType
  position?: PositionType
  title?: string
}

const NavMulti: FC<Props> = ({
  children,
  initial,
  divider,
  position,
  title
}) => {
  const [activeNames, setActiveNames] = useState(initial)

  useEffect(() => {
    setActiveNames(initial)
  }, [initial])

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
      <NavSection title={title} divider={divider} position={position}>
        {children}
      </NavSection>
    </Provider>
  )
}

export default NavMulti
