import useNotes from '../../hooks/useNotes'
import NoteItem from './NoteItem'

export default function Notes() {
  const { notes } = useNotes()

  return (
    <ul>
      {notes?.map(({ id, body }) => (
        <NoteItem key={id} content={body} />
      ))}
    </ul>
  )
}
