
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
      <Footers />
    </div>
  )
}

export default App
