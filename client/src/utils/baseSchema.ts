export enum SchemaConst {
  ALERT = 'alert',
}

export function createDefaultState(schema: any) {
  return Object.keys(schema).reduce((sum: any, key) => {
    sum[key] = isCollection(schema[key]) ? {} : schema[key]
    return sum
  }, {})
}

export function isCollection(obj: any) {
  return (
    (obj !== null && obj['[id]'] !== undefined) || obj['[status]'] !== undefined
  )
}
