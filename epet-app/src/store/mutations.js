

import {
  RECEIVE_CLASSIFYNAME,
} from './types'

export default {
  [RECEIVE_CLASSIFYNAME] (state, {classifyName}){
    state.classifyName = classifyName
  }
}
