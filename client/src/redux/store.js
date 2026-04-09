import {  createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductDetailsReducer, getProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

/*const store = configureStore({
  reducer: rootReducer,
  devTools: true   // automatically enables DevTools
})*/

export default store

export default store;