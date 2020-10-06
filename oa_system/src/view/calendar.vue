<template>
  <div class="left-wrap">
    <div class="calendar-wrap">
      <el-calendar v-model="value" id="calendar">
        <template slot="dateCell" slot-scope="{date, data}">
          <p>
            {{ data.day.split('-').slice(2).join('-') }}<br />
          </p>
          <div v-for="item in calendarData" :key="item.index">
            <div v-if="(item.month).indexOf(data.day.split('-').slice(1)[0])!=-1">
              <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                <el-button type="text" @click="ChenkIn()">{{item.CheckRecord}}</el-button>
              </div>
            </div>
          </div>
        </template>

      </el-calendar>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      msg: "签到",
      msg1: "未签到",
      calendarData: [],
      value: new Date()
    }

  },
  methods: {
    ChenkIn () {
      let that = this
      console.log(this.value)
      console.log((this.$store.state.MyemployeeUserinfo.employeeUser))
      this.axios.post('http://localhost:8080/checkin/checkin/' + this.$store.state.MyemployeeUserinfo.employeeUser, {
      })
        .then(function (response) {
          that.getChenkIn();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getChenkIn () {
      let that = this
      console.log(that.calendarData)
      let date = new Date();
      let today = moment(date).format("YYYYMMDD");
      console.log(today)
      let monthStart = date.setDate(1);
      let firstDay = moment(monthStart).format("YYYYMMDD");
      console.log(firstDay)
      this.axios.get("http://localhost:8080/checkin/checkinday", {
        params: {
          employee_user: this.$store.state.MyemployeeUserinfo.employeeUser,
          firstday: firstDay,
          today: today
        }
      })
        .then(function (response) {
          that.calendarData = response.data.data
          console.log(that.calendarData)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  },
  created () {
    this.getChenkIn();
  }

}
</script>
<style>
</style>
