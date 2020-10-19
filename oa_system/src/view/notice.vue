<template>
  <el-row class="q" style="background: white;height:700px; ">
    <el-row style="width:96%;height:40px;margin:20px auto;" class="q">
      <el-col>
        部门列表
      </el-col>
    </el-row>
    <el-row style="width:94%;height:40px;margin:10px auto;" class="q">
      <el-col :span="18">
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="dialogFormVisible = true">添加通告</el-button>
        <el-dialog title="添加消息" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="消息标题" :label-width="formLabelWidth">
              <el-input v-model="form.noticeTitle" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="消息创建时间" :label-width="formLabelWidth">
              <el-input v-model="form.createTime" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="消息内容" :label-width="formLabelWidth">
              <el-input v-model="form.noticeDetails" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
                autocomplete="off">
              </el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">
              <span @click="insert(form)"> 确 定</span>
            </el-button>
          </div>
        </el-dialog>
      </el-col>
      <el-col :span=" 6">
        <!-- <el-input v-model="search" size="mini" placeholder="输入关键字搜索" /> -->
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 94%;margin:0 auto;" class="el-tablelist">
      <!-- :data=tableData -->
      <el-table-column label="ID" prop="id" width="100px">
      </el-table-column>
      <el-table-column label="消息标题" prop="noticeTitle" width="200px">
      </el-table-column>
      <el-table-column label="消息创建时间" prop="createTime">
      </el-table-column>
      <el-table-column label="消息创建人" prop="noticeName" width="100px">
      </el-table-column>
      <el-table-column label="是否发送" prop="noticeStatus" width="100px">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="send(scope.$index, scope.row)">发送</el-button>
          <el-button size="mini" @click="noticeDetails(scope.$index, scope.row)">详情</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col style="margin:20px auto;">
        <el-pagination background layout="prev, pager, next">
          <!-- :page-count=pagecount @current-change="current_change" -->
        </el-pagination>
      </el-col>
    </el-row>
  </el-row>
</template>
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

<script>
export default {
  data () {
    return {
      tableData: [],
      currentPage: '',
      pagesize: '',
      search: '',
      pagecount: 0,
      row: {},
      rowone: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        noticeTitle: '',
        createTime: '',
        noticeDetails: '',
        noticeStatus: 0
      },
      formLabelWidth: '120px'
    }
  },
  created () {

    this.getnotice();
  },
  methods: {
    send (index, row) {
      let that = this;
      row.noticeStatus = 1
      this.axios.put("http://localhost:8080/oa-notice/notice", row)
        .then(function (response) {
          console.log(response)
          that.getnotice();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getnotice () {
      let that = this;
      this.axios.get("http://localhost:8080/oa-notice/notice", {
      }).then(function (response) {
        that.tableData = response.data.data
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    insert (form) {
      let that = this;
      console.log(form)
      this.axios.post("http://localhost:8080/oa-notice/notice", form)
        .then(function (response) {
          console.log(response)
          that.getnotice();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleDelete (index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete("http://localhost:8080/oa-notice/notice", {
          params: {
            id: row.id
          }
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          // 为了在删除最后一页的最后一条数据时能成功跳转回最后一页的上一页
          // this.current_change(this.currentPage)
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    noticeDetails (index, row) {
      console.log(row)
      this.$alert(row.noticeDetails, row.noticeTitle, {
        confirmButtonText: '确定',
      });
    }
  }
}
</script>