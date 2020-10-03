<template>
    <el-form :model="employeeUsers" status-icon :employeeUsers="employeeUsers" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账户" >
    <el-input type="text" v-model="employeeUsers.employeeUser" autocomplete="off" class="i-input" disabled></el-input>
  </el-form-item>
 
  <el-form-item label="密码" >
    <el-input type="password" v-model="employeeUsers.employeePwd" autocomplete="off" class="i-input" ></el-input>
  </el-form-item>
  <el-form-item label="确认密码" >
    <el-input type="password" v-model="employeeUsers.employeePwds" autocomplete="off" class="i-input" ></el-input>
  </el-form-item>
  <el-form-item label="生日" >
    <el-input v-model.number="employeeUsers.employeeBirth" class="i-input" ></el-input>
  </el-form-item>
   <el-form-item label="性别">
    <el-select v-model.number="employeeUsers.employeeSex">
      <el-option v-for="item in options"
      :key="item.value"
      :label="item.value"
      :value="item.label"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(employeeUsers)">提交</el-button>
    <el-button @click="a()">退出</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        employeeUsers:this.$store.state.employeeUserinfo,
        msg:'',
        options:[{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }]
      };
    },
    methods: {
      submitForm(employeeUsers) {
        console.log(employeeUsers)
       this.axios.put("http://localhost:8080/employee-user/UpdateUser", employeeUsers)
      .then(function (response) {
        console.log(response.data);
      
      })
      .catch(function (error) {
        console.log(error);
      })
      },
      a(){

      }
    }
  }
</script>
<style>
.i-input{
  width: 400px;
}
</style>