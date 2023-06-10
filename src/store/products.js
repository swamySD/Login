
import {PRODUCTS_REQUEST,PRODUCTS_SUCCESS,PRODUCTS_FAILURE} from './actions'

const initialState={
    products:[],
    loading:false,

}

export const ProductReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch (type) {
        case PRODUCTS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case  PRODUCTS_SUCCESS:
            return{
                ...state,
                products:payload,
                loading:false
            }
            case PRODUCTS_FAILURE:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }   
        default:
            return state
        }
}