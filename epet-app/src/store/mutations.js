import {
  RECEIVE_CLASSIFYNAME,
  RECEIVE_HOME
} from './types'

export default {
  // [RECEIVE_CLASSIFYNAME] (state, {classifyName}){
  //   state.classifyName= classifyName
  // },
  [RECEIVE_CLASSIFYNAME] (state, {classifyName}){
    state.data= classifyName
  },

  [RECEIVE_HOME] (state, {homeData}){
    state.homeData = homeData
  }

}
