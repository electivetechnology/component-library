import React, { useContext, useReducer, useState } from 'react'
import { produce } from 'immer'
import { useEffectAfterMount } from 'utils/base'
import { FormContext, StatusTypeType } from 'organisms/Form/base'
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'

export enum ItemsConst {
  UPDATE = 'UPDATE'
}

export const useFormItems = () => {
  const [items, dispatch] = useReducer(
    (state: any, action: any) =>
      produce(state, (draftState: any) => {
        switch (action.type) {
          case ItemsConst.UPDATE:
            draftState[action.name] = action.value
            break
          default:
            return state
        }
      }),
    {} as any
  )

  const updateItem = (name: string, value: string | boolean) => {
    dispatch({ type: ItemsConst.UPDATE, name, value })
  }

  return {
    items: items as any,
    updateItem
  }
}

export const useFormInput = (
  name: string,
  valueInitial: string | Array<string>,
  commaSeparated = false
) => {
  const { updateInput } = useContext(FormContext)

  // handle commaSeparated values
  const valueString = typeof valueInitial === 'object' ? valueInitial.join(',') : valueInitial

  const [value, setValue] = useState(valueString)

  const handleChange = (event: any) => {
    // retrieve value from event and dispatch
    let value = event.target ? event.target.value : event

    if (commaSeparated) {
      value = value.split(',')
    }

    setValue(value)
    updateInput(name, value)
  }

  useEffectAfterMount(() => {
    setValue(valueString)
  }, [valueString])

  return {
    value,
    onChange: handleChange
  }
}

export enum StatusConst {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  CLEAR = 'CLEAR'
}

export const useFormStatus = () => {
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
            delete draftState[action.name];
            break
          case StatusConst.CLEAR:
            return {}
          default:
            return state
        }
      }),
    {} as any
  )

  const addStatus = (
    name: string,
    statusType: StatusTypeType,
    message?: string
  ) => {
    dispatch({ type: StatusConst.ADD, name, statusType, message })
  }

  const removeStatus = (name: string) => {
    dispatch({ type: StatusConst.REMOVE, name })
  }

  const clearStatus = () => {
    dispatch({ type: StatusConst.CLEAR })
  }

  return {
    statuses,
    addStatus,
    removeStatus,
    clearStatus
  }
}

export const useFormHidden = () => {
  const ref: any = React.useRef(null)
  const handleHidden = () => {
    if (ref && ref.current) {
      ref.current.click()
    }
  }

  return {
    hiddenRef: ref,
    handleHidden
  }
}

export const useFormSave = (handleSave: Function) => {
  const { inputs, requiredErrors, updateRequired } = useContext(FormContext)

  const handleAction = () => {
    const hasErrors = Object.keys(requiredErrors).filter((inputName: any) => {
      const inputValue = inputs[inputName]
      const error = isEmpty(inputValue) || isNull(inputValue)

      updateRequired(inputName, error)

      return error
    })

    isEmpty(hasErrors) && handleSave(inputs)
  }

  return {
    handleAction
  }
}
