import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles({
  component: (props: any) => ({
    color: props.color ? props.color : 'rgba(0,0,0,0.87)',
    textTransform: props.uppercase ? 'uppercase' : 'none',
    fontWeight: props.fontWeight ? props.fontWeight : 'initial',
    overflow: props.overflow || props.multilineOverflow ? 'hidden' : 'initial',
    whiteSpace: props.overflow ? 'nowrap' : 'initial',
    textOverflow:
      props.overflow || props.multilineOverflow ? 'ellipsis' : 'initial',
    overflowWrap: props.wrap ? 'break-word' : 'unset',
  })
})
