export default function reducer(state = {}, action) {
    switch (action.type) {
        case "UPDATE_OPTION_DELIVERY":
        {
            state = {...state, delivery: {...action.payload}}
            return state;
        }
        case "UPDATE_OPTION_PAYMENT":
        {
            state = {...state, payment: {...action.payload}}
            return state;
        }
        default:
            return state;
    }
};
