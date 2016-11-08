import * as optionsActions from '../../actions/optionsActions';

describe('optionsActions', () => {

  it('should update to selected delivery option', () => {
    const text = 'Text';
    const price = 1;
    const expectedAction = {
      type: 'UPDATE_OPTION_DELIVERY',
      payload: {text, price}
    };
    expect(optionsActions.updateOptionDelivery(text, price)).toEqual(expectedAction)
  });

  it('should be able to set delivery option text to: Hem till dörren', () => {
    const expectedAction = {
      type: 'UPDATE_OPTION_DELIVERY',
      payload: {text:'Hem till dörren', price:1}
    };
    expect(optionsActions.updateOptionDelivery('Hem till dörren', 1)).toEqual(expectedAction)
  });

  it('should be able to set delivery option price to: 10', () => {
    const text = 'Text';
    const expectedAction = {
      type: 'UPDATE_OPTION_DELIVERY',
      payload: {text, price:10}
    };
    expect(optionsActions.updateOptionDelivery(text, 10)).toEqual(expectedAction)
  });

  it('should update to selected payment option', () => {
    const text = 'Text';
    const price = 1;
    const expectedAction = {
      type: 'UPDATE_OPTION_PAYMENT',
      payload: {text, price}
    };
    expect(optionsActions.updateOptionPayment(text, price)).toEqual(expectedAction)
  });

  it('should be able to set payment option text to: Faktura', () => {
    const price = 1;
    const expectedAction = {
      type: 'UPDATE_OPTION_PAYMENT',
      payload: {text:'Faktura', price}
    };
    expect(optionsActions.updateOptionPayment('Faktura', price)).toEqual(expectedAction)
  });

  it('should be able to set payment option price to: 10', () => {
    const text = 'Text';
    const expectedAction = {
      type: 'UPDATE_OPTION_PAYMENT',
      payload: {text, price:10}
    };
    expect(optionsActions.updateOptionPayment(text, 10)).toEqual(expectedAction)
  })

});
