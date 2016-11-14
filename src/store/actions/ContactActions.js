import * as actionTypes from '../constants/actionTypes'



export function sendMessage() {
  return (dispatch, getState) => {
    const form = getState().form
    console.log(form, form.contact.values.name)
    const person = {
      name: form.contact.values.name,
      email: form.contact.values.email,
      message: form.contact.values.message
    };
    dispatch({
      type: actionTypes.SEND_MESSAGE,
      payload: person
    })
  }

}
