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
      <el-table :data="tableData" style="width: 100%">
        <el-table-column  label="时间" prop="employeeId"> </el-table-column>
        <el-table-column label="姓名" prop="employeeName"> </el-table-column>
        <el-table-column label="性别" prop="employeeSex"> </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count='pagecount'
          @current-change="currentPage"
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
      currentpage:'',
      pagecount:0
    };
  },
  methods: {
    handleEdit(row) {
     // console.log(row);
      this.$store.commit('employeeUserinfoChange',row)
      this.$router.push("/employee_user_update");
    },
    handleDelete(row) {
      console.log(row.employeeId);
         this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.axios.delete("http://localhost:8080/employee-user/DeleteUser/"+row.employeeId, {
        methods: "delete",
      })
      .then(function (response) {
        console.log(response.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    currentPage(currentpage){
      console.log(currentpage)
        let that = this
        this.axios.get("http://localhost:8080/employee-user/Page/"+currentpage, {
        methods: "get",
      })
      .then(function (response) {
        that.tableData = response.data.data.data
        console.log( that.tableData);
        that.pagecount = response.data.data.pages
        that.currentPages = response.data.data.currentPage
        //  that.total=that.tableData.length;
        //  console.log(that.total)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  created() {
    let that = this
    this.axios.get("http://localhost:8080/employee-user/Page/1", {
        methods: "get",
      })
      .then(function (response) {
        that.tableData = response.data.data.data
        console.log( that.tableData);
        that.pagecount = response.data.data.pages
        that.currentPages = response.data.data.currentPage
        //  that.total=that.tableData.length;
        //  console.log(that.total)
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