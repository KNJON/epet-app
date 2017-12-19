import Mock from 'mockjs'

import data from './classifydata.json'
import homeData from './homedata.json'
// Mock.mock('/api/home', {code: 0, data: homeData.categorys})
Mock.mock('/api/home', {code: 0, data: homeData})
Mock.mock('/api/classify', {code: 0, data: data.classifyName})
// Mock.mock('/api/classify', {code: 0, data: data})


console.log('执行mockServer...')
