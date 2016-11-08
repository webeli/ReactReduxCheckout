import { combineReducers } from 'redux';
import cart from './cartReducer';
import options from './optionsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    cart,
    options,
    form: formReducer
});
