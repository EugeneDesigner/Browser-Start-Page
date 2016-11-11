import * as actionTypes from '../constants/actionTypes';
import { stock } from '../stock';


function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}




export function uploadIcons(category) {
  let icons = []
  if (category === 'all') {

    for (let index in stock) {
      icons = icons.concat(stock[index]);
      console.log(icons, stock[index]);
    }
  } else {
      icons = stock[category]

    }
   shuffle(icons)

  return({
    type: actionTypes.GET_ICONS,
    payload: icons
  })
}


export function getIcons(category) {
  return ({
      type: actionTypes.ICONS_REQUEST,
      payload: category
    })

}
