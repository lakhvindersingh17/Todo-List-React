import {createStore} from 'redux'
import {formReducer} from './reducers/TaskFormReducer'

let store = createStore(formReducer)

export default store;