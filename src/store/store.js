
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';  
const middleware=[thunk]
const store =createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware,logger))
)

export default store