import * as actionTypes from '../constants/actionTypes';

const initialState = {

  category: '',
  icons: []
}


export default function page(state = initialState, action) {


  switch (action.type) {
      case actionTypes.ICONS_REQUEST:
        return {...state, category: action.payload}
      case actionTypes.GET_ICONS:
        return {...state, icons: action.payload}


      default:
        return state;

  }


}
