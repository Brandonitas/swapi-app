import axios from 'axios'

export default axios.create({baseURL: 'https://swapi-app-service.herokuapp.com/api/starship'})