import * as cartActions from '../../actions/cartActions';

describe('cartActions', () => {

  it('should update selected product amount', () => {
    const value = 5;
    const key = 'prod1';
    const expectedAction = {
      type: 'UPDATE_PRODUCT_AMOUNT',
      payload: {value, key}
    };
    expect(cartActions.updateProdAmount(value, key)).toEqual(expectedAction)
  });

  it('should set product amount to 6', () => {
    const key = 'prod1';
    const expectedAction = {
      type: 'UPDATE_PRODUCT_AMOUNT',
      payload: {value:6, key}
    };
    expect(cartActions.updateProdAmount(6, key)).toEqual(expectedAction)
  });

  it('should remove product by key', () => {
    const expectedAction = {
      type: 'REMOVE_PRODUCT',
      payload: {key:123}
    };
    expect(cartActions.removeProduct(123)).toEqual(expectedAction)
  })

});
