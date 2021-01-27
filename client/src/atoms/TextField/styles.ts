import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'styles/theme'

export const useStyles = makeStyles({
  component: (props: any) => ({
    color: props.color ? props.color : 'rgba(0,0,0,0.87)',
    textTransform: props.uppercase ? 'uppercase' : 'none',
    fontWeight: props.fontWeight ? props.fontWeight : 'initial',
    overflow: props.overflow || props.multilineOverflow ? 'hidden' : 'initial',
    whiteSpace: props.overflow ? 'nowrap' : 'initial',
    textOverflow:
      props.overflow || props.multilineOverflow ? 'ellipsis' : 'initial'
  })
})

export const DarkModeTemplateStyled = styled.div`
  background-image: linear-gradient(
    ${theme.gradientBlue},
    ${theme.gradientRed}
  );
  height: 200px;
`
