
import { useState } from 'react'
import Cards from './components/cards/cards'
import Headers from './components/headers/header'
import Footers from './components/footer/footer'
import {users} from './data/users'
import './App.css'

function App() {
 

  return (
    <div>
      <Headers />
      <div className="card_container">
        {
          users.map((user) => (
            <Cards key={user.id} {...user}/>
          ))
          
        }
        
      </div>
      <Footers />
    </div>
  )
}

export default App
