export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_PRODUCT_AMOUNT": {
            const prodAmount = Object.assign(state[action.payload.key], { amount: action.payload.value });
            const newState = Object.assign({}, state, {
                [action.payload.key]: prodAmount
            });
            return newState;
        }
        case "REMOVE_PRODUCT": {
          const newState = {...state};
          delete newState[action.payload.key];
          return newState;
        }
        default:
            return state;
    }
};
