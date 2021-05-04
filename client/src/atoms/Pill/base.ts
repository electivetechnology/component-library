export type StatusType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'failure'

export const renderStatus = (status: StatusType) => {
  switch (status) {
    case 'primary':
      return '#22D422'
    case 'secondary':
      return '#F9A725'
    case 'tertiary':
      return '#EBEBEB'
    case 'failure':
      return '#D53947'
    default:
      return ''
  }
}
