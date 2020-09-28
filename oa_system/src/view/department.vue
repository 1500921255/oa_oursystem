<template>
  <el-row class="q" style="background: white;height:700px; ">
    <el-row style="width:96%;height:40px;margin:20px auto;" class="q">
      <el-col>
        部门列表
      </el-col>
    </el-row>
    <el-row style="width:94%;height:40px;margin:10px auto;" class="q">
      <el-col span="18">
        <el-button type="primary" size="mini" icon="el-icon-edit">新增</el-button>
      </el-col>
      <el-col span="6">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </el-col>
    </el-row>
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 94%;margin:0 auto;" class="el-tablelist">

      <el-table-column label="Date" prop="date">
      </el-table-column>
      <el-table-column label="Name" prop="name">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col style="margin:20px auto;">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    }
  },
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