import { useReducer, useState } from 'react'
import { produce } from 'immer'
import { FormTextType } from './types'
// import { useCheckPermissions } from 'components/utils'
import isArray from 'lodash/isArray'
import { useEffectAfterMount } from 'utils/base'

// export const filterInputs = (inputs: any, onlyRequired = false) => {
//   const filteredInputs = Object.entries(inputs).reduce(
//     (obj: any, inputObj: any) => {
//       const inputName = inputObj[0]
//       const input = inputObj[1]
//       let { required, permission, value, commaSeparated } = input
//
//       // if onlyRequired set for form, remove any input not set as required
//       if (
//         !(onlyRequired && !required) &&
//         !(permission && !useCheckPermissions(permission))
//       ) {
//         // set inputs to the return object
//         obj[inputName] = produce(input, (draftState: any) => {
//           // if commaSeparated join input with comma
//           if (commaSeparated) {
//             draftState['value'] = isArray(value) ? value.join(',') : ''
//           }
//         })
//       }
//       return obj
//     },
//     {}
//   )
//
//   return {
//     filteredInputs,
//   }
// }
//
// export const useInputsReducer = (inputs: any) => {
//   const [newInputs, dispatcher] = useReducer(
//     (state: any, action: any) =>
//       produce(state, (draftState: any) => {
//         switch (action.type) {
//           case 'update':
//             draftState[action.name]['value'] = action.value
//             break
//           case 'updateSelect':
//             // if select input use selected value
//             draftState[action.name]['selected'] = action.value
//             break
//           case 'set':
//             return action.inputs
//           default:
//             return state
//         }
//       }),
//     inputs
//   )
//
//   return {
//     newInputs,
//     dispatcher,
//   }
// }
//
// export const formatSaveData = (inputs: any) => {
//   let error = false
//   const formattedData = Object.entries(inputs).reduce(
//     (obj: any, input: any, index) => {
//       let {
//         value,
//         selected,
//         type,
//         commaSeparated,
//         required,
//         isMulti,
//       } = input[1]
//
//       if (type === 'select') {
//         value = !isMulti ? selected.value : selected
//       }
//
//       if (commaSeparated) {
//         value = value.split(',')
//       }
//
//       const checkString = ['text', 'select']
//       if (required && checkString.includes(type) && value === '') {
//         error = true
//       }
//
//       // add form values to object
//       const hideType = ['title', 'delete']
//       if (!hideType.includes(type)) {
//         obj[input[0]] = value
//       }
//       return obj
//     },
//     {}
//   )
//
//   if (!error) {
//     return formattedData
//   }
// }
//
export const useFormInput = (
  name: string,
  dispatch: Function,
  input: FormTextType
) => {
  const [value, setValue] = useState(input.value || '')

  const handleChange = (event: any) => {
    // retrieve value from event and dispatch
    const value = event.target ? event.target.value : event
    setValue(value)
    dispatch({ type: 'update', name, value })
  }

  useEffectAfterMount(() => {
    dispatch({ type: 'text', name, value })
    setValue(input.value)
  }, [input.value])

  return {
    value,
    onChange: handleChange
  }
}
