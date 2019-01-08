import * as types from './mutation-type'

export default {
  nameAsyc({commit},{name,age}){
    commit(types.SET_NAME,name);
    commit(types.SET_AGE,age);
  }
}
