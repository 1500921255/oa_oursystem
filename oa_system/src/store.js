import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employeeUserinfo: [],
    departmentinfo: []
  },
  mutations: {
    employeeUserinfoChange (state, NewemployeeUserinfo) {
      state.employeeUserinfo = NewemployeeUserinfo
    },
    departmentinfoChange (state, Newdepartmentinfo) {
      state.departmentinfo = Newdepartmentinfo
    }
  },
  modules: {

  },
  actions: {

  }
})