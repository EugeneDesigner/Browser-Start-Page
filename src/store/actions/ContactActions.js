import * as actionTypes from '../constants/actionTypes'



export function sendMessage() {
  return (dispatch, getState) => {
    const form = getState().form
    const person = {
      name: form.person.name.value,
      email: form.person.email.value,
      message: form.person.message.value
    };
    dispatch({
      type: actionTypes.SEND_MESSAGE,
      payload: person
    })
  }

}
