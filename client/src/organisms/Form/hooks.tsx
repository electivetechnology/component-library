import { useContext, useReducer, useState } from 'react'
import { produce } from 'immer'
import { useEffectAfterMount } from 'utils/base'
import { FormContext, StatusType } from 'organisms/Form/base'

export enum InputsConst {
  UPDATE = 'UPDATE'
}

export const useInputs = () => {
  const [inputs, dispatch] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case InputsConst.UPDATE:
            draftState[action.name] = action.value
            break
          default:
            return state
        }
      }),
    {} as any
  )

  const updateInput = (name: string, value: string) => {
    dispatch({ type: InputsConst.UPDATE, name, value })
  }

  return {
    inputs: inputs as any,
    updateInput
  }
}

export const useFormInput = (name: string, initialValue: string) => {
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

export enum StatusConst {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

export const useInputStatus = () => {
  const [statuses, dispatch] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case StatusConst.ADD:
            draftState[action.name] = {
              statusType: action.statusType,
              message: action.message
            }
            break
          case StatusConst.REMOVE:
            Object.entries(draftState).filter((status: any) => {
              return (status[0] = action.name)
            })
            break
          default:
            return state
        }
      }),
    {} as any
  )

  const addStatus = (statusType : StatusType, name: string, message?: string) => {
    dispatch({ type: StatusConst.ADD, statusType, name, message })
  }

  const removeStatus = (name: string) => {
    dispatch({ type: StatusConst.REMOVE, name })
  }

  return {
    statuses,
    addStatus,
    removeStatus
  }
}
