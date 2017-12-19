import axios from 'axios'

// 发送ajax请求

export function getClassifyName() {
  console.log ( 'getClassifyName 已执行' )
  return axios.get('/api/classify')  // 返回一个promise对象
}
export function getHome() {
  console.log ( 'getHome 已执行' )
  return axios.get('/api/home')  // 返回一个promise对象
}
