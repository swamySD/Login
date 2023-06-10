import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { getProducts } from '../store/actions';
const Products = () => {
    const Productss=useSelector(state=>state.Productss.products)
     let token=localStorage.getItem('token')
    const dispatch=useDispatch()
    useEffect(()=>{
      if(token){
        dispatch(getProducts())
      }
    },[])

  return (
    <div style={{height:'90vh'}}>{
        Productss.map((each,index)=>{
            return(
                <li key={index}>{each.title}</li>)
        })
        }</div>
  )
}

export default Products