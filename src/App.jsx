import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='divApp'>
     <NavBar/>
     <div className='items Container d-flex justify-content-center align-items-center'>
      <ItemListContainer greeting={"!Bienvenidos a Superlative!"}/>
     </div>
     
    </div>
  )
}

export default App
