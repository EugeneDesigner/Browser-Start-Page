import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';


import page from './page'
import contact from './contact'

export default combineReducers({
    page,
    contact,
    form: formReducer

})
