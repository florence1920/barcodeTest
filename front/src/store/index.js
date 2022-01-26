import Vue from 'vue'
import Vuex from 'vuex'
import { getTest, getCheck } from '@/api/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    axios_try : '',
    check :{
      auth : false,
      goodsNumber:''
    },
    user:{
      userName:'이승헌',
      phone : '01097647537',
      goods: '2022012612345678'
    }
  },
  mutations: {
    SET_AXIOS(state, response){
      if(response.res !== ''){
       state.axios_try = response.res;
      }
    },
    SET_CHECK(state, check){
      state.check = check;
    }
  },
  actions: {
    async GET_AXIOS(context){
      //console.log('store');
      const response =  await getTest();
      context.commit('SET_AXIOS' , response.data[0]);
    },
    async GET_CHECK(context, user){
      const response = await getCheck(user);
      console.log(response);
      context.commit('SET_CHECK',response.data);
    },
    
  },
  modules: {
  }
})
