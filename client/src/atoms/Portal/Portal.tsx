import React, { FunctionComponent, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal: FunctionComponent = ({ children }) => {
  const modalRoot = document.getElementById('pop-up')
  const el = document.createElement('div')

  useEffect(() => {
    modalRoot && modalRoot.appendChild(el)
  }, [])

  useEffect(() => {
    const remove = () => () => {
      if (modalRoot && modalRoot.hasChildNodes()) {
        modalRoot.removeChild(el)
      }
    }
    return remove()
  })

  return createPortal(children, el)
}

export default Portal
