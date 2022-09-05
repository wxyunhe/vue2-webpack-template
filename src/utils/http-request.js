import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10000
})

http.interceptors.request.use(config => {

})

http.interceptors.response.use(res => {

})

export default http
