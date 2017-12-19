import {getClassifyName,getHome} from '../api'
import axios from 'axios'
import {
  RECEIVE_CLASSIFYNAME,
  RECEIVE_HOME
} from './types'

const RESULT_OK = 0
export default {

  reqClassifyName ({commit}){
    // console.log(getClassifyName)
    axios.get('/api/classify').then(response =>{
      const result = response.data
      console.log ("ssss:"+ result )
       if(result.code===RESULT_OK) {
        const classifyName = result.data
        commit(RECEIVE_CLASSIFYNAME, {classifyName})
       }
    })
  },
  reqHomeName ({commit}){
    // console.log(getClassifyName)
    getHome().then(response =>{
      const result = response.data
      console.log ("personal:"+ result )
       if(result.code===RESULT_OK) {
        const homeData = result.data
        commit(RECEIVE_HOME, {homeData})
       }
    })
  },

  // reqHome ({commit}){
  //   console.log ( 'result= ' + result  )
  //   axios.get('/api/home').then(response => {
  //     const result = response.data
  //     console.log ( 'result= ' + result  )
  //     if (result.code===RESULT_OK){
  //       const homeData = result.data
  //       commit(RECEIVE_HOME, {homeData})
  //     }
  //   })
  // }


}
