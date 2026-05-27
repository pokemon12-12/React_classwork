import {useState}from 'react'
import Navbar from './components/navbar'
import Enterbutton from './Components/Enterbutton'
import Todoname1 from './Components/Todoname1'
import Todoname2 from './Components/Todoname2'
import "./App.css";

function App() {
  return (
    <div className='whole-system'>
      <Navbar/>
      <Enterbutton/>
      <div className='list-items'>
          <Todoname1></Todoname1>
          <Todoname2></Todoname2>
      </div>
    </div>

  )
}

export default App
