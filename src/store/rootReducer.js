import {combineReducers} from 'redux';

import Reducer from './reducer';
import  {ProductReducer}  from './products';
 const rootReducer=combineReducers({
    user:Reducer,
    Productss:ProductReducer
})

export default rootReducer

