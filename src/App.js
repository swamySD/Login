import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState}from 'react'
import './App.css'
import Login from './components/Login';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cookies from 'js-cookie';
const data = [
  { id: 1, name: "User 1", favoriteGame: "Game D" },
  { id: 2, name: "User 2", favoriteGame: "Game D" },
  { id: 3, name: "User 3", favoriteGame: "Game E" },
  { id: 4, name: "User 4", favoriteGame: "Game E" },
  { id: 5, name: "User 5", favoriteGame: "Game C" },
  { id: 6, name: "User 6", favoriteGame: "Game D" },
  { id: 7, name: "User 7", favoriteGame: "Game E" },
  { id: 8, name: "User 8", favoriteGame: "Game C" },
  { id: 9, name: "User 9", favoriteGame: "Game A" },
  { id: 10, name: "User 10", favoriteGame: "Game C" },
  { id: 11, name: "User 11", favoriteGame: "Game A" },
  { id: 12, name: "User 12", favoriteGame: "Game D" },
  { id: 13, name: "User 13", favoriteGame: "Game A" },
  { id: 14, name: "User 14", favoriteGame: "Game C" },
  { id: 15, name: "User 15", favoriteGame: "Game E" },
  { id: 16, name: "User 16", favoriteGame: "Game C" },
  { id: 17, name: "User 17", favoriteGame: "Game A" },
  { id: 18, name: "User 18", favoriteGame: "Game E" },
  { id: 19, name: "User 19", favoriteGame: "Game D" },
  { id: 20, name: "User 20", favoriteGame: "Game D" },
  { id: 21, name: "User 21", favoriteGame: "Game A" },
  { id: 22, name: "User 22", favoriteGame: "Game D" },
  { id: 23, name: "User 23", favoriteGame: "Game A" },
  { id: 24, name: "User 24", favoriteGame: "Game C" },
  { id: 25, name: "User 25", favoriteGame: "Game A" },
  { id: 26, name: "User 26", favoriteGame: "Game E" },
  { id: 27, name: "User 27", favoriteGame: "Game B" },
  { id: 28, name: "User 28", favoriteGame: "Game B" },
  { id: 29, name: "User 29", favoriteGame: "Game D" },
  { id: 30, name: "User 30", favoriteGame: "Game C" },
  { id: 31, name: "User 31", favoriteGame: "Game C" },
  { id: 32, name: "User 32", favoriteGame: "Game C" },
  { id: 33, name: "User 33", favoriteGame: "Game E" },
  { id: 34, name: "User 34", favoriteGame: "Game C" },
  { id: 35, name: "User 35", favoriteGame: "Game B" },
  { id: 36, name: "User 36", favoriteGame: "Game B" },
  { id: 37, name: "User 37", favoriteGame: "Game D" },
  { id: 38, name: "User 38", favoriteGame: "Game B" },
  { id: 39, name: "User 39", favoriteGame: "Game A" },
  { id: 40, name: "User 40", favoriteGame: "Game D" },
];
const App = () => {
  const [fruit,setFruit]=useState('')
  let token=Cookies.get('token')
console.log(fruit)
  return (
    <div className='App'>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        {token?
      <Route path="/products" element={<Products/>}/>:<Route  path="/login" element={ <Login/>}/>}
      <Route  path="/" element={ <Home/>}/>
      </Routes>
      </BrowserRouter>
     <select onChange={(e)=>setFruit(e.target.value)}>
        <option >apple</option>
        <option>banana</option>
        <option>orange</option>
        <option>watermelon</option>
        <option>grapes</option>
      </select>
    <div>
    </div>
    </div>
  )
}


export default App;
