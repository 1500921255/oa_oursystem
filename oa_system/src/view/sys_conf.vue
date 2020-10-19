<template>

  <el-tabs>
    <el-tab-pane label="角色管理" name="first">
      <el-row class="q" style="background: white;height:700px; ">
    <el-row style="width:96%;height:40px;margin:20px auto;" class="q">
      <el-col>
        角色列表
      </el-col>
    </el-row>
    <el-row style="width:94%;height:40px;margin:10px auto;" class="q">
      <el-col :span="18">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="openadd">新增</el-button>
      </el-col>
      <!-- <el-col :span="6">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </el-col> -->
    </el-row>
    <el-table :data='roleList' style="width: 94%;margin:0 auto;" class="el-tablelist">

      <el-table-column label="ID" prop="id">
      </el-table-column>
      <el-table-column label="Name" prop="roleName">
      </el-table-column>
      <el-table-column label="data" prop="description">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">分配权限</el-button>
          &nbsp;
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
        <!-- 分页 -->
    <!-- <el-row>
      <el-col style="margin:20px auto;">
        <el-pagination background layout="prev, pager, next" :page-count=pagecount @current-change="current_change">
        </el-pagination>
      </el-col>
    </el-row> -->
  </el-row>
    </el-tab-pane>
<!-- 权限管理标签页 -->
    <el-tab-pane label="权限管理" name="second">
      <el-row class="q" style="background: white;height:700px; ">
    <el-row style="width:96%;height:40px;margin:20px auto;" class="q">
      <el-col>
        权限列表
      </el-col>
    </el-row>
    <el-row style="width:94%;height:40px;margin:10px auto;" class="q">
      <el-col :span="18">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="openadd">新增</el-button>
      </el-col>
      <!-- <el-col :span="6">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </el-col> -->
    </el-row>
    <el-table :data='permsList' style="width: 94%;margin:0 auto;" class="el-tablelist">

      <el-table-column label="ID" prop="id">
      </el-table-column>
      <el-table-column label="Name" prop="name">
      </el-table-column>
      <el-table-column label="data" prop="permission">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          &nbsp;
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col style="margin:20px auto;">
        <el-pagination background layout="prev, pager, next" :page-count='permspagecount' @current-change="permscurrentPage">
        </el-pagination>
      </el-col>
    </el-row>
  </el-row>
    </el-tab-pane>
  </el-tabs>
  
</template>

<script>
export default {
    data(){
        return{
          roleList:[],
          dialogTableVisible: false,
          permsList:[],
          formLabelWidth: '120px',
          permspagecount: 0,
          currentPages:'',
          permstotal:''
        }
    },
    methods: {
      openadd() {
           this.$alert('<el-form-item label="部门名称"><el-input type="primary" v-model="ruleForm.departName"></el-input></el-form-item>', '添加角色', {
          dangerouslyUseHTMLString: true
        });
      },
      handleDelete(row){
         let that = this
      console.log(row.id);
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete("http://localhost:8080/role/RoleDelete/" + row.id, {
          methods: "delete",
          headers: {
                authorization: that.$store.state.userToken,
              },
        })
          .then(function (response) {
            if(response.data.msg =="您暂无此权限该操作"){
              alert("您暂无此权限该操作")
            }else{
              console.log(response.data);
            }
            
           
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
      handleEdit(row){
        //console.log(index)
      //  console.log(row)
        this.$store.commit('userRoleinfoChange',row)
        console.log(this.$store.state.userRoleinfo)
        this.$router.push("/role_perms");

      },
      permscurrentPage (currentPages) {
      console.log(currentPages)
      let that = this
      this.axios.get("http://localhost:8080/permission/permsList/" + currentPages, {
        methods: "get",
         headers: {
                authorization: this.$store.state.userToken,
              },
      })
      .then(function (response) {
        that.permsList = response.data.data.data
        console.log( that.permsList);
        that.pagecount = response.data.data.pages
      })
      .catch(function (error) {
        console.log(error);
      });

    },
    },
    created(){
      let that = this
      this.axios.get("http://localhost:8080/role/list",{
              headers: {
                authorization: this.$store.state.userToken,
              },
      }
      )
        .then(function (response) {
          that.roleList = response.data.data
          console.log(response.data.data)

        })
        .catch(function (error) {
          console.log(error);
        });
        this.axios.get("http://localhost:8080/permission/permsList/"+ 1,{
              headers: {
                authorization: this.$store.state.userToken,
              },
      }
      )
        .then(function (response) {
          console.log(response.data.data)
          that.permsList = response.data.data.data
          that.permspagecount = response.data.data.pages
          that.permstotal=response.data.data.total;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
 
}
</script>