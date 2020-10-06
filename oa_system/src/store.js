import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
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
=======
    state:{
        employeeUserinfo:[],
        sex:[{
            value: '男',
            label: '男'
          }, {
            value: '女',
            label: '女'
          }],
        status:[{
            value: '0',
            label: '禁用'
          }, {
            value: '1',
            label: '启用'
          }],
          MyemployeeUserinfo:[]
    },
    mutations:{
        employeeUserinfoChange(state,NewemployeeUserinfo){
            state.employeeUserinfo = NewemployeeUserinfo
        },
        MyemployeeUserinfoChange(state,NewemployeeUserinfo){
          state.MyemployeeUserinfo = NewemployeeUserinfo
      }
    },
    modules:{
>>>>>>> 0979541f5bf0d3d092141508bd19c4ab2f104b0b

  },
  actions: {

  }
})