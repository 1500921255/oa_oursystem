<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu :default-active="this.$router.path" class="el-menu-vertical-demo">

        <router-link to="/index">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>

        <router-link to="/employee_user">
          <el-menu-item index="2">
            <i class="el-icon-user-solid"></i>
            <span slot="title">人员信息</span>
          </el-menu-item>
        </router-link>

        <router-link to="/user_info">
          <el-menu-item index="3">
            <i class="el-icon-user"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
        </router-link>
        <router-link to="/department">
          <el-menu-item index="4">
            <i class="el-icon-s-custom"></i>
            <span slot="title">部门信息</span>
          </el-menu-item>
        </router-link>
        <router-link to="/calendar">
          <el-menu-item index="5">
            <i class="el-icon-date"></i>
            <span slot="title">日程表</span>
          </el-menu-item>
        </router-link>

        <router-link to="/personage_center">
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">系统监控</span>
          </el-menu-item>
        </router-link>

        <router-link to="/mailbox">
          <el-menu-item index="7">
            <i class="el-icon-message"></i>
            <span slot="title">站内信箱</span>
          </el-menu-item>
        </router-link>

        <router-link to="/notice">
          <el-menu-item index="8">
            <i class="el-icon-message-solid"></i>
            <span slot="title">通知公告</span>
          </el-menu-item>
        </router-link>

      </el-menu>
    </el-col>
  </el-row>

</template>
  <script>
export default {
  name: 'leftmenu',
  method: {
    native (index) {
      console.log(index)
    }
  }
}

  </script>
<style>
a {
  text-decoration: none;
}
</style>
