/*
 * @Author: xiongziting
 * @Date: 2020-03-20 10:35:07
 * @LastEditors: xiongziting
 * @LastEditTime: 2020-03-20 12:27:39
 * @Description:
 * @FilePath: \vue-h5-pro\src\config\request.js
 */
import axios from 'axios'
import { BASE_URL } from './env'

export const request = (
  url = '',
  data = {},
  type = 'get',
  ContentType = 'application/json;charset=UTF-8'
) => {
  const fetch = axios.create({
    headers: {
      'access-token': window.localStorage.getItem('accessToken'),
      'Content-Type': ContentType
    },
    baseURL: BASE_URL,
    timeout: 15000
  })
  if (type.toLowerCase() === 'get') {
    return new Promise((resolve, reject) => {
      fetch
        .get(url, { params: data })
        .then(resp => {
          if (resp.data.errorCode === 102) {
            window.localStorage.removeItem('accessToken')
          }
          if (resp.data.success) {
            if (resp.data.data) {
              resolve(resp.data.data)
            } else {
              resolve(resp.data)
            }
          } else {
            this.$vux.loading.hide()
            reject(resp.data)
          }
        })
        .catch(e => {
          console.log(e)
        })
    })
  }
  if (type.toLowerCase() === 'post' || type.toLowerCase() === 'put') {
    return new Promise((resolve, reject) => {
      fetch({
        url,
        data,
        method: type
      })
        .then(resp => {
          if (resp.data.errorCode === 102) {
            window.localStorage.removeItem('accessToken')
          }
          if (resp.data.success) {
            if (resp.data.data) {
              resolve(resp.data.data)
            } else {
              resolve(resp.data)
            }
          } else {
            this.$vux.loading.hide()
            reject(resp.data)
          }
        })
        .catch(e => {
          console.log(e)
        })
    })
  }
}
