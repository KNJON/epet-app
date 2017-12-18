import {getClassifyName} from '../api'

import {
  RECEIVE_CLASSIFYNAME
} from './types'

const RESULT_OK = 0
export default {

  reqClassifyName ({commit}){
    // console.log(getClassifyName)
    getClassifyName().then(response =>{
      const result = response.data
      // console.log ("ssss:"+ result )
      // if(result.code===RESULT_OK) {
        const classifyName = result.data

        commit(RECEIVE_CLASSIFYNAME, {classifyName})
      // }
    })
  },


}
