import Mock from 'mockjs'

import data from './data.json'

Mock.mock('/api/classify', {code: 0, data: data.classifyName})

console.log('执行mockServer...')
