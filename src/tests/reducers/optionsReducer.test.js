import reducer from '../../reducers/optionsReducer';

describe('optionsReducer', () => {

  it('should handle updating to selected delivery option', () => {
    expect(
      reducer([], {
        type: 'UPDATE_OPTION_DELIVERY',
        payload: {text:'Hem till dörren', price:1}
      })
    ).toEqual(
      {
        delivery: {
          text: 'Hem till dörren',
          price: 1
        }
      }
    )
  })

  it('should handle updating to selected payment option', () => {
    expect(
      reducer([], {
        type: 'UPDATE_OPTION_PAYMENT',
        payload: {text:'Klarna', price:1}
      })
    ).toEqual(
      {
        payment: {
          text: 'Klarna',
          price: 1
        }
      }
    )
  })

})
