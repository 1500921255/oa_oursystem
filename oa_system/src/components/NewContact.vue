<template>
  <div>
    <el-row class="row1">
      <el-col :span="3" class="col1">

      </el-col>
      <el-col :span="1" class="col2"></el-col>
      <el-col :span="20" class="col3"></el-col>
    </el-row>
    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-aside width="215px"></el-aside>
      <!-- 内容 -->
      <el-main>
        <el-row :gutter="20" class="row2">
          <el-col :span="16">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="row3">
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>

        </el-row>
      </el-main>
    </el-container>
    <!-- 底栏 -->

  </div>
</template>

<script>
export default {
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
}
.el-container {
  height: 840px;
}
.el-aside {
  background-color: chartreuse;
}
.el-main {
  background: rebeccapurple;
}
.col1,
.col2,
.col3 {
  border: 1px solid red;
  height: 60px;
}
.row2 {
  margin-bottom: 50px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  height: 280px;
}
</style>
