<template>

 <div class="box">
   <el-checkbox v-for="item in tableData"  :label="item.id" :key="item.id" @change="a(item.id)">{{item.name}}</el-checkbox>
 </div>

</template>
<script>
export default {
     data() {
      return {
       tableData:[],
       userPerms:[],
       isChecked:this.aa,
      };
    },
    methods:{
      a(permsId){
        let that = this
        console.log(this.$store.state.userRoleinfo.id)
        console.log(permsId)
        this.axios.get("http://localhost:8080/permission/perms", {
       headers: {
          authorization: that.$store.state.userToken,
  },
    })
      .then(function (response) {
        that.tableData = response.data.data
        console.log(that.tableData)
      })
      .catch(function (error) {
        console.log(error);
      });
      }
    }
    ,
  created(){
    let that = this
    this.axios.get("http://localhost:8080/permission/perms", {
       headers: {
          authorization: that.$store.state.userToken,
  },
    })
      .then(function (response) {
        that.tableData = response.data.data
        console.log(that.tableData)
        that.isChecked = that.tableData.permission=that.userPerms?true:false
        console.log(that.isChecked)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
</script>
<style>
.box{
 border:1px solid red;
 width: 300px;
 height: 300px;
}
</style>