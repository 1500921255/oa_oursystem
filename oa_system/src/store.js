import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        employeeUserinfo:[]
    },
    mutations:{
        employeeUserinfoChange(state,NewemployeeUserinfo){
            state.employeeUserinfo = NewemployeeUserinfo
        }
    },
    modules:{

    },
    actions:{

    }
})