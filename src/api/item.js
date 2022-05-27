import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexItems = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/items',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const createItem = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/items',
    data: {
      item: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const showItem = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/items/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const deleteItem = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/items/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateItem = (data, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/items/' + id,
    data: {
      item: {
        brand: data.brand,
        style: data.style,
        gender: data.gender,
        size: data.size,
        category: data.category,
        pricePaid: data.pricePaid,
        priceValued: data.priceValued

      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
