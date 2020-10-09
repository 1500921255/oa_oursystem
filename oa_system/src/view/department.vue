<template>
  <el-row class="q" style="background: white;height:700px; ">
    <el-row style="width:96%;height:40px;margin:20px auto;" class="q">
      <el-col>
        部门列表
      </el-col>
    </el-row>
    <el-row style="width:94%;height:40px;margin:10px auto;" class="q">
      <el-col :span="18">
        <router-link to="/departmentadd">
          <el-button type="primary" size="mini" icon="el-icon-edit">新增</el-button>
        </router-link>
      </el-col>
      <el-col :span="6">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </el-col>
    </el-row>
    <el-table :data=tableData style="width: 94%;margin:0 auto;" class="el-tablelist">

      <el-table-column label="Id" prop="departId">
      </el-table-column>
      <el-table-column label="Name" prop="departName">
      </el-table-column>
      <el-table-column label="data" prop="insertTime">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <router-link to="/departmentupdate">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          </router-link>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col style="margin:20px auto;">
        <el-pagination background layout="prev, pager, next" :page-count=pagecount @current-change="current_change">
        </el-pagination>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      currentPage: '',
      pagesize: '',
      search: '',
      pagecount: 0,
      row: {}
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$store.commit('departmentinfoChange', row)
    },
    handleDelete (index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete("http://localhost:8080/depart-dict/departOne", {
          params: {
            q: row.departId
          }
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          // 为了在删除最后一页的最后一条数据时能成功跳转回最后一页的上一页
          this.current_change(this.currentPage)
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    current_change: function (currentPage) {
      console.log(currentPage)
      this.currentPage = currentPage;
      let that = this
      this.axios.get("http://localhost:8080/depart-dict/departPage", {
        params: {
          currentPage: currentPage,
          pagesize: 5
        }
      })
        .then(function (response) {
          that.tableData = response.data.data.Records
          console.log(that.tableData);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created () {
    let that = this
    this.axios.get("http://localhost:8080/depart-dict/departPage", {
      headers: {
        'Content-Type': "application/json;charset=utf-8",
        'Access-Control-Allow-Credentials': "true"//1
      },
      params: {
        currentPage: 1,
        pagesize: 5
      }
    })
      .then(function (response) {
        that.tableData = response.data.data.Records
        that.pagecount = response.data.data.Pages
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>
<style>
.q {
  font-size: 14px;
  border-bottom: 1px solid gainsboro;
  color: rgb(131, 143, 161);
}
.el-tablelist {
  text-align: center;
}
.table-title {
  background: white;
  border: 1px;
}
</style>