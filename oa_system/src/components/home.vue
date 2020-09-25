<template>
  <el-row class="panel m-w-1280">
    <el-col :span="24" class="panel-top">
      <el-col :span="3">
        <img :src="img" class="logo" height="50px">
        <!-- <template v-if="logo_type == '1'">
          <img :src="img" class="logo">
        </template>
        <template v-else>
          <span class="p-l-20">{{title}}</span>
        </template> -->
      </el-col>
      <el-col :span="1" class="menu-hidden">
        <i class="el-icon-menu"></i>
      </el-col>
      <el-col :span="18" class="ofv-hd">
        <el-row>
          <el-col :span="2">
            乐山
          </el-col>
          <el-col :span="2">
            今天(周五):
          </el-col>
          <el-col :span="14">
            18-25小雨
          </el-col>
          <el-col :span="6">
            欢迎你,管理员
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2" class="pos-rel">
        退出
      </el-col>
    </el-col>
    <el-col :span="24" class="panel-center">
      <!--<el-col :span="4">-->
      <section class="panel-c-c" :class="{'hide-leftMenu': hasChildMenu}">
        <div class="grid-content bg-purple-light">
          <el-col :span="24">

          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<style>
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.panel {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.panel-top {
  height: 50px;
  line-height: 50px;
  background: white;
  color: #c0ccda;
  border-bottom: 1px solid #cccccc;
}

.panel-center {
  background: white;
  position: absolute;
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}

.panel-c-c {
  background: #f1f2f7;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  left: 12.5%;
  overflow-y: scroll;
  padding: 20px;
}

.tip-logout {
  float: right;
  margin-right: 20px;
  padding-top: 5px;
  cursor: pointer;
}
.admin {
  color: #c0ccda;
  text-align: center;
}
.menu-hidden {
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  text-align: center;
}
</style>
<script>

export default {
  data () {
    return {
    }
  }
}
</script>
