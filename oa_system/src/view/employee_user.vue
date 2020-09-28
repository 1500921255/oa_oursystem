<template>
  <el-container class="container">
    <!-- <el-header class="header">
     
    </el-header> -->
    <el-main class="main">
      <div class="tools">
        <el-button type="success" plain size="mini" class="btn-tools"
          >添加职工</el-button
        >
        <el-input
          class="search"
          v-model="search"
          size="small"
          placeholder="输入关键字搜索"
        />
      </div>
      <el-divider class="divider"></el-divider>
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
        <el-table-column  label="时间" prop="employeeId"> </el-table-column>
        <el-table-column label="姓名" prop="employeeName"> </el-table-column>
        <el-table-column label="性别" prop="employeeSex"> </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="current_change"
        ></el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData:[],
      search: "",
      pagesize:5,//每页的数据条数
      currentPage:1,//默认开始页面
      total:1000
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    current_change:function(currentPage){
        this.currentPage = currentPage;
      }
  },
  created() {
    let that = this
    this.axios
      .get("http://localhost:8080/employee-user/Page", {
        methods: "get",
      })
      .then(function (response) {
        console.log(response.data.data);
        that.tableData = response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
/* .header,.main,.fotter{
    border: 1px red solid;
} */
.divider {
  margin: 0;
}
.tools {
  background: white;
  height: 50px;
}
.btn-tools,
.search,
.pagination {
  position: absolute;
}
.search {
  width: 200px;
  right: 5%;
  margin-top: 10px;
}
.btn-tools {
  left: 4%;
  margin-top: 10px;
}
.pagination {
  margin-top: 20px;
  right: 3%;
}
</style>