<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </template>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">人员信息</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-date"></i>
          <span slot="title">日程表</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">系统监控</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">系统日志</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-message"></i>
          <span slot="title">站内信箱</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-message-solid"></i>
          <span slot="title">通知公告</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>

</template>
  <script>
export default {
  name: 'leftmenu'

}
  </script>
<style scoped>
</style>
