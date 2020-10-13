import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://discord-clone-vt.herokuapp.com/'
})

export default instance