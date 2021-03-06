import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employeeUserinfo: [],
    sex: [{
      value: '男',
      label: '男'
    }, {
      value: '女',
      label: '女'
    }],
    status: [{
      value: '0',
      label: '禁用'
    }, {
      value: '1',
      label: '启用'
    }],
    MyemployeeUserinfo: [],
    departmentinfo: [],
    userToken:'',
    UserRoles:[],
    UserPerms:[],
    UserMenus:[],
    userRoleinfo:[]
 },
  mutations: {
    employeeUserinfoChange (state, NewemployeeUserinfo) {
      state.employeeUserinfo = NewemployeeUserinfo
    },
    departmentinfoChange (state, Newdepartmentinfo) {
      state.departmentinfo = Newdepartmentinfo
    },
    MyemployeeUserinfoChange (state, NewemployeeUserinfo) {
      state.MyemployeeUserinfo = NewemployeeUserinfo
    },
    userTokenChange (state, NewUserToken) {
      state.userToken = NewUserToken
    },
    UserRolesChange (state, NewUserRoles) {
      state.UserRoles = NewUserRoles
    },
    UserPermsChange (state, NewUserPerms) {
      state.UserPerms = NewUserPerms
    },
    UserMenusChange (state, NewUserMenus) {
      state.UserMenus = NewUserMenus
    },
    userRoleinfoChange(state,NewuserRoleinfo){
      state.userRoleinfo = NewuserRoleinfo
    }
  },
  modules: {
  },
  actions: {

  }
})