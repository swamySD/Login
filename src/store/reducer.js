import { LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS } from "./actions"
const initialState={
    login:false,
    loading:false,
    error:null
}

const Reducer=(state=initialState,action)=>{
switch(action.type){
    case LOGIN_REQUEST:
        return{
            ...state,
            loading:true,
            error:null,
        }
    case LOGIN_SUCCESS:
        return{
            ...state,
            loading:false,
            login:true
        }
        
    case LOGIN_FAILURE:
        return{
            ...state,
            loading:false,
            error:action.payload
        } 
       default:
        return state
        
}
}

export default Reducer
