import axios from 'axios'
import { useNavigate,Navigate} from 'react-router-dom';
import  Cookies  from 'js-cookie';
export const LOGIN_REQUEST="LOGIN_REQUEST";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_FAILURE="LOGIN_FAILURE";
export const PRODUCTS_REQUEST="PRODUCTS_REQUEST";
export const PRODUCTS_SUCCESS='PRODUCTS_SUCCESS';
export const PRODUCTS_FAILURE='PRODUCTS_FAILURE';


const productsRequestPending=()=>{
    return{
        type:PRODUCTS_REQUEST,
    }
}
const productRequestSuceess=(data)=>{
    return{
        type:PRODUCTS_SUCCESS,
        payload:data
    }
}
const productsRequestFailure=(error)=>{
    return{
        type:PRODUCTS_FAILURE,
        payload:error
    }
}
const loginRequest=()=>{
    return{
      type:LOGIN_REQUEST
    }
}
const loginSuccess=()=>{
    return{
        type:LOGIN_SUCCESS,
        
    }
}
const loginFailure=(error)=>{
    return{
        type:LOGIN_FAILURE,
        payload:error
    }
}

export const userLogin=(username,password)=>{
    return async (dispatch)=>{
        dispatch(loginRequest())
        try {
           const response=await axios.post('https://fakestoreapi.com/auth/login',{
                username: username,
                password: password
            })
            
            if(response.ok){
                dispatch(loginSuccess())
                Cookies.set('token',response.data.token,{expires:30})
                }
           console.log(response.data)
        } catch (error) {
            dispatch(loginFailure(error))
        }
    }
}


export const getProducts=()=>{
    return async (dispatch)=>{
        dispatch(productsRequestPending())
        try{
            const response=await axios.get('https://fakestoreapi.com/products')
            const products=response.data
            
            dispatch(productRequestSuceess(products))
            console.log(products)
        }
        catch(error){
            dispatch(productsRequestFailure(error))
        }
    }
}