<template>
  <div class="left-wrap">
    <div class="calendar-wrap">
      <el-calendar :first-day-of-week=7>
        <template slot="dateCell" slot-scope="{date, data}">
          <p>
            {{ data.day.split('-').slice(2).join('-') }}<br />
          </p>
          <!--标记-->
          <el-button type="text">签到</el-button>
        </template>
      </el-calendar>
    </div>
  </div>

</template>
<style>
</style>
