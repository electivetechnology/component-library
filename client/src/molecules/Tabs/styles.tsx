import styled from 'styled-components'

export const TabScroll = styled.div`
  overflow-x: scroll;
  display: flex;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const TabBarContainer = styled.div`
  overflow: hidden;
`

type TabContainerProps = {
  active: boolean
}

export const TabContainer = styled.div<TabContainerProps>`
  ${props =>
  props.active &&
  `
        height: 48px;
        border-bottom: 2px solid red;
    `}
`
