 <template>
  <!-- <span>站内信箱</span> -->
  <el-calendar v-model="value" id="calendar">
    <template slot="dateCell" slot-scope="{date, data}">
      <div>
        <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
        <div v-for="item in calendarData" :key="item.index">
          <!-- <div v-if="1">
            {{item.things}}{{calendarData.days}}
          </div> -->
          <div v-if="(item.month).indexOf(data.day.split('-').slice(1)[0])!=-1">
            <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
              {{item.things}}
            </div>
          </div>
        </div>
      </div>
    </template>
  </el-calendar>
</template>


<script>

export default {
  name: "calendar",
  data () {
    return {
      calendarData: [{}],
      value: new Date()
    }
  },
  created () {
    let that = this
    that.calendarData = [{ month: ['10'], days: ['02'], things: '看电影' }, { month: ['10'], days: ['16'], things: '看电影' },
    { month: ['10'], days: ['16'], things: '看电影' }]
    console.log(that.calendarData)

  }
}
</script>
<style>
.calendar-day {
  text-align: center;

  color: #202535;

  line-height: 30px;

  font-size: 12px;
}

.is-selected {
  color: #f8a535;

  font-size: 10px;

  margin-top: 5px;
}

#calendar
  .el-button-group
  > .el-button:not(:first-child):not(:last-child):after {
  content: "当月";
}
</style>
 