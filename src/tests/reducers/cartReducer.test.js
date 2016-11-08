import reducer from '../../reducers/cartReducer';

describe('cartReducer', () => {

  it('should handle updating amount of product', () => {
    expect(
      reducer([], {
        type: 'UPDATE_PRODUCT_AMOUNT',
        payload: {amount:5, key:'key1'}
      })
    ).toEqual(
      {
        text: 'Hem till dörren',
        price: 1
      }
    )
  })

})
