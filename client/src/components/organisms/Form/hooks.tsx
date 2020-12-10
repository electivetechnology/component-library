import { useReducer, useState } from 'react'
import { produce, original } from 'immer'

export const useInputsReducer = () => {
  const initialInputs: any = {}
  const [newInputs, dispatch] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case 'update':
            draftState[action.label] = action.value
            break
          case 'add':
            draftState[action.label] = action.value
            break
          default:
            return state
        }
      }),
    initialInputs
  )

  const inputs: any = newInputs

  return {
    newInputs : inputs,
    dispatch
  }
}

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
  label: string,
  dispatch: Function,
  initialValue: string
) => {
  const [value, setValue] = useState(initialValue || '')

  const handleChange = (event: any) => {
    // retrieve value from event and dispatch
    const value = event.target ? event.target.value : event
    setValue(value)
    dispatch({ type: 'update', label, value })
  }

  return {
    value,
    onChange: handleChange,
  }
}
