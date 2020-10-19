<template>
  <el-form
    :model="employeeUsers"
    status-icon
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="账户">
      <el-input
        type="primary"
        v-model="employeeUsers.employeeUser"
        class="i-input"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        type="password"
        v-model="employeeUsers.employeePwd"
        class="i-input"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input
        type="password"
        v-model="employeeUsers.employeeCheckPwd"
        class="i-input"
      ></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input
        type="primary"
        v-model="employeeUsers.employeeName"
        class="i-input"
      ></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="employeeUsers.employeeSex">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.value"
          :value="item.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出生日期">
      <el-date-picker
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        v-model="employeeUsers.employeeBirth"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input
        type="primary"
        v-model="employeeUsers.employeeTel"
        class="i-input"
      ></el-input>
    </el-form-item>
    <el-form-item label="是否启用">
      <el-select v-model="employeeUsers.employeeStatus">
        <el-option
          v-for="item in status"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属部门">
      <el-select v-model="employeeUsers.employeeDepartId">
        <el-option
          v-for="item in departs"
          :key="item.departId"
          :label="item.departName"
          :value="item.departId"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(employeeUsers)"
        >提交</el-button
      >
      <el-button @click="resetForm(employeeUsers)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      employeeUsers: {
        employeeUser: "",
        employeePwd: "",
        employeeCheckPwd: "",
        employeeName: "",
        employeeSex: "",
        employeeBirth: "",
        employeeTel: "",
        employeeDepartId: "",
        employeeStatus: "",
      },
      options: this.$store.state.sex,
      status: this.$store.state.status,
      departs: [],
    };
  },
  methods: {
    submitForm(employeeUsers) {
      let that = this
      if (employeeUsers.employeePwd == employeeUsers.employeeCheckPwd) {
        this.axios
          .post(
            "http://localhost:8080/employee-user/InsertUser",
            employeeUsers,
            {
              headers: {
                authorization: that.$store.state.userToken,
              },
            }
          )
          .then(function (response) {
             if(response.data.msg =="您暂无此权限该操作"){
              alert("您暂无此权限该操作")
            }else{
               console.log(response);
            alert("添加成功");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert("两次输入的密码不一致");
      }
    },
    resetForm(employeeUsers) {
      console.log(employeeUsers);
    },
  },
  created() {
    let that = this;
    this.axios
      .get("http://localhost:8080/depart-dict/departs", {
        headers: {
                authorization: that.$store.state.userToken,
              },
      })
      .then(function (response) {
               console.log(response.data);
               that.departs = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
.i-input {
  width: 400px;
}
</style>