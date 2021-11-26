import { useState } from 'react'
import { NoteContextProvider } from './context/NoteContext'
import Header from './components/Header'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import Login from './components/Login'

import './App.css'

function App() {
  const [user, setUser] = useState(() => {
    const sessionUser = sessionStorage.getItem('sessionUser')
    return sessionUser ? JSON.parse(sessionUser) : null
  })

  const handleLogout = () => {
    setUser(null)
    sessionStorage.removeItem('sessionUser')
  }

  return (
    <div className="App">
      <Header />
      <NoteContextProvider>
        {user ? <AddNote token={user.token} /> : <Login saveUser={setUser} />}
        <Notes logout={handleLogout} />
      </NoteContextProvider>
    </div>
  )
}

export default App
