import { useState } from 'react'
import './App.css'
import FormEmployees from './components/FormEmployees'
import ListEmployees from './components/ListEmployees'

function App() {
  const [saveData, setSaveData] = useState([])

  const sendData = (userData) => {
    setSaveData([...saveData, userData])
  }
  return (
    <div>
      <FormEmployees sendData={sendData}/>
      <ListEmployees saveData={saveData}/>
    </div>
  )
}

export default App
