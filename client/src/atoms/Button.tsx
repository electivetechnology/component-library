import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { theme } from 'styles/theme'

type Props = {
  text: any
  theme: string
  disabled?: boolean
  onClick?: any
  fullWidth?: boolean
  width?: number
  icon?: any
  href?: string
  target?: string
  hasChildren?: boolean
  btnWidth?: string
  borderRadius?: string
  textTransform?: any
}

const primaryStyles = {
  backgroundColor: `${theme.primaryColorValencia} !important`,
  color: `${theme.white} !important`,
  '&:hover': {
    backgroundColor: `${theme.primaryColorValenciaDark} !important`,
  },
}

const secondaryStyles = {
  backgroundColor: `${theme.white} !important`,
  color: `${theme.primaryColorValencia} !important`,
}

const betaStyles = {
  backgroundColor: `${theme.grayComment} !important`,
  color: `${theme.white} !important`,
  boxShadow:
    '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  '&:hover': {
    backgroundColor: `${theme.grayCommentDark} !important`,
    color: `${theme.white} !important`,
  },
}

const useStyles = makeStyles({
  component: (props: any) => ({
    ...props.themeStyle,
    width: `${props.width}px`,
  }),
})

type WrapperProps = {
  icon?: any
  hasChildren?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  color: ${theme.white}
    ${props =>
      props.icon &&
      `
    align-content: center;
    padding-right: 8px;
        grid-template-columns: 30px 1fr;
    `};
  ${props =>
    props.hasChildren &&
    `
    align-content: center;
    padding-right: 8px;
        grid-template-columns: 30px 1fr;
    `};
`

const Icon = styled.div`
  padding-right: 8px;
  display: grid;
  align-items: center;
`

const ButtonComponent: FunctionComponent<Props> = ({
  text,
  theme = 'primary',
  disabled = false,
  onClick = null,
  fullWidth = false,
  width,
  icon,
  href,
  target,
  children,
  hasChildren,
  btnWidth,
  borderRadius,
  textTransform,
}) => {
  const variant = theme === 'primary' ? 'contained' : 'outlined'
  const themeStyle =
    theme === 'primary'
      ? primaryStyles
      : theme === 'secondary'
      ? secondaryStyles
      : theme === 'beta'
      ? betaStyles
      : {}
  const classes = useStyles({ themeStyle, width })

  return (
    <Button
      data-qa={'ButtonComponent'}
      data-testid="ButtonComponent"
      variant={variant}
      disabled={disabled}
      className={classes.component}
      onClick={onClick}
      fullWidth={fullWidth}
      href={href}
      style={{
        width: btnWidth,
        borderRadius: borderRadius,
        textTransform: textTransform,
      }}>
      <Wrapper icon={icon} hasChildren={hasChildren}>
        {icon ? <Icon>{icon}</Icon> : ''}
        {children}
        {text}
      </Wrapper>
    </Button>
  )
}

export default ButtonComponent
