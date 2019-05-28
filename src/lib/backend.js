import axios from 'axios'
import ENV from './ENV'

export const backend = axios.create({
  baseURL: ENV.backend,
  headers: {
    'Authorization': window.localStorage.getItem('Authorization') || null,
    'Content-Type': 'application/json'
  }
})
