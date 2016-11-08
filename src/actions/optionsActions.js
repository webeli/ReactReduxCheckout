export function updateOptionDelivery(text, price){
  return {
    type: 'UPDATE_OPTION_DELIVERY',
    payload: {text, price}
  }
}


export function updateOptionPayment(text, price){
  return {
    type: 'UPDATE_OPTION_PAYMENT',
    payload: {text, price}
  }
}
