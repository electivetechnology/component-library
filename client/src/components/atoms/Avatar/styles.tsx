import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  component: (props: any) => ({
    backgroundColor: props.color,
    textTransform: 'uppercase',
    fontWeight: props.fontWeight,
    height: props.height,
    width: props.width,
  }),
})
