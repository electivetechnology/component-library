import { useContext, useReducer, useState } from 'react'
import { produce } from 'immer'
import { useEffectAfterMount } from 'utils/base'
import { FormContext } from 'organisms/Form/base'

export enum InputsConst {
  ADD = 'ADD'
}

export const useInputs = () => {
  const initialInputs: any = {}
  const [newInputs, dispatch] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case InputsConst.ADD:
            draftState[action.name] = action.value
            break
          default:
            return state
        }
      }),
    initialInputs
  )

  const inputs: any = newInputs

  const updateInput = (name: string, value: string) => {
    dispatch({ type: InputsConst.ADD, name, value })
  }

  return {
    inputs,
    updateInput,
  }
}

export const useFormInput = (
  name: string,
  initialValue: string
) => {
  const { updateInput } = useContext(FormContext)
  const [value, setValue] = useState(initialValue || '')

  const handleChange = (event: any) => {
    // retrieve value from event and dispatch
    const value = event.target ? event.target.value : event
    setValue(value)
    updateInput(name, value)
  }

  useEffectAfterMount(() => {
    setValue(initialValue)
  }, [initialValue])

  return {
    value,
    onChange: handleChange
  }
}

export enum ErrorConst {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

export const useFormError = () => {
  const [errors, dispatch] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case ErrorConst.ADD:
            draftState[action.name] = action.message
            break
          case ErrorConst.REMOVE:
            Object.entries(draftState).filter((error: any) => {
              return error[0] = action.name
            })
            draftState[action.name] = action.message
            break
          default:
            return state
        }
      }),
    {} as any
  )

  const addError = (name: string, message: string) => {
    dispatch({ type: ErrorConst.ADD, name, message })
  }

  const removeError = (name: string) => {
    dispatch({ type: ErrorConst.REMOVE, name })
  }

  return {
    errors,
    addError,
    removeError
  }
}
