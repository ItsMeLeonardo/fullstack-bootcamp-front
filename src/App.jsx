import Header from './components/Header'
import Notes from './components/Notes'
import AddNote from './components/AddNote'

import './App.css'
import { NoteContextProvider } from './context/NoteContext'

function App() {
  return (
    <div className="App">
      <Header />
      <NoteContextProvider>
        <AddNote />
        <Notes />
      </NoteContextProvider>
    </div>
  )
}

export default App
