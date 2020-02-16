import axios from 'axios'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

const instance = axios.create({
  baseURL: 'http://localhost:3636',
  timeout: 5000
})

instance.interceptors.response.use((res) => {
  return res.data
})

export default function(config) {
  return instance(config)
}
