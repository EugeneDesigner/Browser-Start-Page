import * as actionTypes from '../constants/actionTypes'




const initialState = {
  person: []
}


export default function contact(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return Object.assign({}, state, {
        person: [
          ...state.person,
          action.payload
        ]
      })
  default:
    return state
 }

}
