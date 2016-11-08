export function updateProdAmount(value, key) {
  return {
    type: 'UPDATE_PRODUCT_AMOUNT',
    payload: {value, key}
  }
}

export function removeProduct(key){
  return {
      type: 'REMOVE_PRODUCT',
      payload: {key}
  }
}
