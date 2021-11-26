import { useRef } from 'react'
import PropTypes from 'prop-types'

import useNotes from '../../hooks/useNotes'

export default function AddNote({ token }) {
  const formRef = useRef(null)
  const { saveNote, getToken } = useNotes()

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(formRef.current)
    const note = {
      content: formData.get('note'),
      important: true,
    }

    formRef.current.firstChild.value = ''
    getToken(token)
    saveNote(note)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="note" placeholder="Write your note here" />
      <input type="submit" value="add note" />
    </form>
  )
}

AddNote.propTypes = {
  token: PropTypes.string.isRequired,
}
