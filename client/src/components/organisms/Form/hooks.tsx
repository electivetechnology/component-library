import { useReducer, useState } from 'react'
import { produce } from 'immer'
import { useEffectAfterMount } from 'utils/base'

export const useInputsReducer = () => {
  const initialInputs: any = {}
  const [newInputs, dispatch] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case 'update':
            draftState[action.name] = action.value
            break
          case 'add':
            draftState[action.name] = action.value
            break
          default:
            return state
        }
      }),
    initialInputs
  )

  const inputs: any = newInputs

  return {
    inputs,
    dispatch
  }
}

export const useFormInput = (
  name: string,
  dispatch: Function,
  initialValue: string
) => {
  const [value, setValue] = useState(initialValue || '')

  const handleChange = (event: any) => {
    // retrieve value from event and dispatch
    const value = event.target ? event.target.value : event
    setValue(value)
    dispatch({ type: 'update', name, value })
  }

  useEffectAfterMount(() => {
    setValue(initialValue)
  }, [initialValue])

  return {
    value,
    onChange: handleChange
  }
}
