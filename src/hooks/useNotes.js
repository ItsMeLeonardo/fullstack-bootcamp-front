import { useCallback, useContext, useEffect } from 'react'

import { NoteContext } from '../context/NoteContext'
import getNotes from '../service/getNotes'

const useNotes = () => {
  const { notes, setNotes } = useContext(NoteContext)

  useEffect(() => {
    if (!notes) {
      getNotes().then(setNotes)
    }
  }, [])

  const saveNote = useCallback(
    (note) => {
      setNotes((prevNotes) => [...prevNotes, note])
    },
    [setNotes],
  )

  return { notes, saveNote }
}

export default useNotes
