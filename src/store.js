import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

export default createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);