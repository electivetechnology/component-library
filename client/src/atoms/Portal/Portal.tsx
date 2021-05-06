import React, { Component } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  root: HTMLElement
}
class Portal extends Component<Props> {
  private el: any
  constructor(props: any) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    this.props.root.appendChild(this.el)
  }

  componentWillUnmount() {
    this.props.root.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

export default Portal
