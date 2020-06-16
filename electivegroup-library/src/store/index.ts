import { combineReducers } from 'redux'
import alert from 'components/molecules/Alert/alertReducer'

const rootReducer = () =>
  combineReducers({
    alert,
  })

export default rootReducer

