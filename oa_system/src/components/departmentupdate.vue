<template>
  <el-form :model="ruleForm" status-icon :ruleForm="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="ID">
      <el-input type="primary" v-model.number="ruleForm.departId"></el-input>
    </el-form-item>
    <el-form-item label="部门名称">
      <el-input type="primary" v-model="ruleForm.departName"></el-input>
    </el-form-item>
    <el-form-item label="创建时间">
      <el-input v-model="ruleForm.insertTime"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
      <el-button @click="resetForm(ruleForm)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: this.$store.state.departmentinfo
    };
  },
  methods: {
    submitForm (formName) {
      console.log(formName)
      this.axios.put("http://localhost:8080/depart-dict/departOne", formName)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //     console.log(this.ruleForm)
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
  },
}
</script>