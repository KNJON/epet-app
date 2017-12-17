import axios from 'axios'

// 发送ajax请求

export function getClassifyName() {
  return axios.get('/api/classify')  // 返回一个promise对象
}
