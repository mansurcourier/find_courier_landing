import axios from 'axios'

export const API_URL = 'https://findcourier.ru/'

export const $api = axios.create({
  baseURL: API_URL
})
