export enum StatuConst {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  FAILURE = 'failure'
}

export const renderStatus = (status: StatuConst) => {
  switch (status) {
    case StatuConst.PRIMARY:
      return '#22D422'
    case StatuConst.SECONDARY:
      return '#F9A725'
    case StatuConst.TERTIARY:
      return '#EBEBEB'
    case StatuConst.FAILURE:
      return '#D53947'
    default:
      return ''
  }
}
