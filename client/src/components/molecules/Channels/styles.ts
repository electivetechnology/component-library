import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'styles/theme'
import styled from 'styled-components'

export const iconStyles = makeStyles({
  messageIcon: (props: any) => ({
    fill: props.sms ? theme.white : theme.secondaryGray,
  }),
  phoneIcon: (props: any) => ({
    fill: props.phone ? theme.white : theme.secondaryGray,
  }),
  webIcon: (props: any) => ({
    fill: props.webchat ? theme.white : theme.secondaryGray,
  }),
})

type IconProps = {
  isActive?: boolean
}

export const IconOutlineStyled = styled.div<IconProps>`
  border: 1px solid ${theme.secondaryGray};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 8px;
  ${props =>
  props.isActive &&
  `
        background-color: ${theme.primaryColorValencia};
        border: 1px solid ${theme.primaryColorValencia};
    `};
`

export const InlineStyle = styled.div`
  display: inline-flex;
  margin-left: auto;
`

