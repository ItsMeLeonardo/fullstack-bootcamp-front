import { useRef } from 'react'

import useNotes from '../../hooks/useNotes'

export default function AddNote() {
  const formRef = useRef(null)
  const { saveNote } = useNotes()

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(formRef.current)
    const note = {
      // content: formData.get('note'),
      body: formData.get('note'),
      id: formData.get('note'),
    }

    formRef.current.firstChild.value = ''

    saveNote(note)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="note" placeholder="Write your note here" />
      <input type="submit" value="add note" />
    </form>
  )
}
