<template>
  <div class="login-from">
    <div class="logo-lable">
      <img class="logo" src="../../src/assets/logo.png">
    </div>
    <router-link :to="{ path: '/home'}">
      213123
    </router-link>
    <div class="from-lable">
      <el-form>
        <el-form-item>
          <el-input type="text" class="login-input" placeholder="用户名" v-model="username" /><br>
        </el-form-item>
        <el-form-item>
          <el-input type="text" class="login-input" placeholder="密码" v-model="password" /><br>
        </el-form-item>
        <el-form-item>
          <!-- <el-button round class="login-btn" type="primary" @click="login"> -->
          <!-- 登录
          </el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  // methods: {
  //   login () {
  //     this.axios.get('/', {
  //       params: {
  //         username: "0000",
  //         password: "oa0000"
  //       }
  //     })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style>
.login-from {
  width: 500px;
  height: 450px;
  background: white;
  margin: auto;
  margin-top: 100px;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.14);
}
.title {
  background: white;
  font-size: 50px;
  text-align: center;
  padding-left: 180px;
}
.logo {
  width: 150px;
  height: 150px;
  padding-left: 170px;
  padding-top: 20px;
}
.from-lable {
  /* border: 1px solid red; */
  padding-top: 4d0px;
  padding-left: 50px;
}
.login-input {
  width: 400px;
  padding: 10px;
}
.login-btn {
  width: 400px;
  margin-left: 10px;
  margin-top: 30px;
}
</style>