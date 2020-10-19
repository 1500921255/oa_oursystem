<template>
  <div class="login-from">
    <div class="logo-lable">
      <img class="logo" src="../../src/assets/logo.png">
    </div>
    <div class="from-lable">
      <el-form>
        <el-form-item>
          <el-input type="text" class="login-input" placeholder="用户名" v-model="username" /><br>
        </el-form-item>
        <el-form-item>
          <el-input type="password" class="login-input" placeholder="密码" v-model="password" /><br>
        </el-form-item>
        <el-form-item>
          <el-button round class="login-btn" type="primary" @click="login">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import websocket from '../assets/js/websocket'
export default {
  name: "login",
  methods: {
    login () {
      let that = this
      if (this.username == null) {
        alert("账号或密码不能为空")
      } else if (this.password == null) {
        alert("账号或密码不能为空")
      } else {
        this.axios.get('http://localhost:8080/employee-user/login', {
          params: {
            employee_user: this.username,
            employee_pwd: this.password
          }
        })
          // .then(function (response) {
          //   websocket.created();
          //   // console.log(response.data);
          //   if (response.data.flag == false) {
          //     //  that.$options.methods.Loginfailalert()
          //     alert("登陆失败")
          //   } else {
          //     that.$store.commit("userTokenChange", response.data.data)
          //     console.log(that.$store.state.userToken)
          //     that.$router.push("/home");
          //   }
          // })
          .then(function (response) {
            console.log(response.data.data);
            if (response.data.data == null) {
              //  that.$options.methods.Loginfailalert()
              alert("登陆失败")
            } else {
              that.$store.commit("employeeUserinfoChange", response.config.params)
              that.$store.commit("MyemployeeUserinfoChange", response.data.data)
              console.log(response.data.data)
              websocket.created(that.$store.state.employeeUserinfo.employee_user);
              that.$router.push("/home");
            }
          })

          .catch(function (error) {
            console.log(error);
          });
      }
    },
    /**登陆失败弹窗 */
    Loginfailalert () {
      this.$alert('登陆失败，请检查账号或密码是否正确', '通知', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    }
  },
  data () {
    return {
      username: null,
      password: null
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