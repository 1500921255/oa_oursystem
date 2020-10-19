<template>
  <el-row class="panel m-w-1280" id="home">
    <el-col :span="24" class="panel-top">
      <el-col :span="3">
        <template>
          <!-- <img :src="img" class="logo"> -->
        </template>
        <template>
          <span class="p-l-20">OA 管理系统</span>
        </template>
      </el-col>
      <el-col :span="1" class="menu-hidden">
        <i class="el-icon-menu"></i>
      </el-col>
      <el-col :span="13" class="ofv-hd">
        <el-row>
          <el-col :span="3" class="text-tq">
            <a href="/#">{{this.city}}</a>
          </el-col>
          <!-- <el-col :span="5">
            {{this.tq.date}}:
          </el-col> -->
          <el-col :span="5" class="text-tq">
            <a href="/#"> {{this.tq.low}}~{{this.tq.high}} {{this.tq.type}} 》</a>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2" class="pos-rel">
        欢迎你，{{MyemployeeUserinfo.employeeName}}
      </el-col>
      <el-col :span="2" class="pos-rel">
        <el-col :span="12" class="pos-rel">
          <i class="el-icon-message"></i>
        </el-col>
        <el-col :span="12" class="pos-rel">
          <el-button @click="show2 = !show2"><i @click="show(show2)" class="el-icon-message-solid"></i></el-button>
        </el-col>
      </el-col>
      <el-col :span="1" class="pos-rel">
        <i class="el-icon-open"></i>
        <!-- <i class="el-icon-turn-off"></i> -->
        护眼
      </el-col>
      <el-col :span="1" class="pos-rel">
        <i class="el-icon-switch-button"></i>
        <a href="" class="gohis" @click="goback()">退出</a>
      </el-col>
    </el-col>
    <el-col :span="24" class="panel-center">
      <leftmenu></leftmenu>
      <!--<el-col :span="4">-->
      <section class="panel-c-c">
        <div class="grid-content bg-purple-light">
          <el-col :span="24">
            <router-view></router-view>
          </el-col>
        </div>
      </section>
    </el-col>
    <transition name="el-zoom-in-bottom">
      <div v-show="show2" class="transition-box">
        <div class="notice-text"> 消息通知({{noticenum}})</div>
        <div v-for="o in 4" :key="o" class="text item">
          <el-card class="box-card" style="height:100px">
            <el-row>
              <el-col :span="6">
                <img src="../assets/images/weidu.png">
              </el-col>
              <el-col :span="18" class="notice-el-col">
                {{o}}
              </el-col>
            </el-row>
          </el-card>
        </div>

      </div>
    </transition>
  </el-row>
</template>
 <script typet="text/javascript" async="async" src="https://pv.sohu.com/cityjson?ie=utf-8"></script>
<script>
import leftmenu from '@/components/left_menu'
export default {
  name: 'home',
  components: {
    leftmenu
  },
  data () {
    return {
      noticenum: 4,
      show2: true,
      city: '',
      tq: [],
      MyemployeeUserinfo: this.$store.state.MyemployeeUserinfo,
    }
  },
  methods: {
    // 退出登录的方法
    goback () {

    }
  },
  created () {
    let that = this
    // this.axios.get("https://bird.ioliu.cn/ip", {/**获取当前位置ip */
    // })
    //   .then(function (response) {
    //     that.axios.get("https://api.79xj.cn/ip.php?ip=" + response.data.data.ip, {/**获取当前城市名称 */
    //     })
    //       .then(function (response) {
    //         that.city = response.data.city.slice(3)
    //         that.axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + that.city, {/**获取当前城市天气 */
    //         })
    //           .then(function (response) {
    //             // console.log(response.data.data)
    //             that.tq = response.data.data.forecast[0]
    //           })
    //           .catch(function (error) {
    //             console.log(error);
    //           });
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(this.$store.state.MyemployeeUserinfo)
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
.notice-el-col {
  height: 60px;
  line-height: 60px;
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
  height: 40px;
  line-height: 40px;
  background: white;
  color: #c0ccda;
  border-bottom: 2px solid rgb(226, 217, 217);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.14);
}

.panel-center {
  background: white;
  position: absolute;
  top: 40px;
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
  border-left: 1px solid #e0dede;
  border-right: 1px solid #dddada;
  text-align: center;
}
.pos-rel {
  font-size: 11px;
}
.text-tq {
  color: rebeccapurple;
  font-size: 12px;
  text-align: center;
}
.gohis {
  color: #c0ccda;
}
.transition-box {
  position: absolute;
  left: 76%;
  bottom: 0px;
  width: 410px;
  height: 720px;
  background-color: #ffffff;
  color: black;
  box-sizing: border-box;
  z-index: 995;
}
.notice-text {
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #eeeeee;
}
</style>
