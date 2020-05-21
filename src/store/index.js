import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import {CHANGESHAOGUAN} from './type'
Vue.use(Vuex)

export default new Vuex.Store({
      state: {
        changeShaoguan : true
        },
      
        getters:{
          changeShaoguan: state => {
            let changeShaoguan = state.changeShaoguan
            changeShaoguan = window.sessionStorage.getItem('shaoguan') || true
            return changeShaoguan
          },
        },
        mutations: {
         [CHANGESHAOGUAN](state,amount){
            state.changeShaoguan = amount;
          }
      
        }
})
