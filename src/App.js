import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Home from './components/Home';


const App = () => {
  let token=localStorage.getItem('token')
  return (
    <div className='App'>
      <h1>Hello</h1>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        
        {token?
        <Route path="/products" element={ <Products/>}/>:<Route  path="/login" element={ <Login/>}/>}
    <Route  path="/" element={ <Home/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}


export default App;
