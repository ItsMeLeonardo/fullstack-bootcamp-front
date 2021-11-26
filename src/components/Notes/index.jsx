import { useState } from 'react'
import PropTypes from 'prop-types'
import useNotes from '../../hooks/useNotes'
import NoteItem from './NoteItem'

export default function Notes({ logout }) {
  const { notes } = useNotes()
  const [showAll, setShowAll] = useState(true)

  const noteToShow = showAll ? notes : notes.filter((note) => note.important)

  const handleShowImportant = () => setShowAll((prevProps) => !prevProps)

  return (
    <>
      <button type="button" onClick={handleShowImportant}>
        {showAll ? 'Show Important' : 'Show All'}
      </button>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <ul>
        {noteToShow?.map(({ id, content }) => (
          <NoteItem key={id} content={content} />
        ))}
      </ul>
    </>
  )
}

Notes.propTypes = {
  logout: PropTypes.func.isRequired,
}
