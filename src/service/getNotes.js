import axios from 'axios'

// const baseUrl = 'https://fullstack-bootcamp-note-app.herokuapp.com/api/notes'
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newNote) => {
  const request = await axios.post(baseUrl, newNote)
  const data = await request.data
  return data
}

const update = async (id, newNote) => {
  const request = await axios.put(`${baseUrl}/${id}`, newNote)
  const data = await request.data
  return data
}

export { getAll, create, update }
