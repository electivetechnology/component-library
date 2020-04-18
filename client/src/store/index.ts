import { combineReducers } from 'redux'
import alert from 'atoms/Alert/alertReducer'

const rootReducer = () =>
  combineReducers({
    alert,
  })

export default rootReducer

