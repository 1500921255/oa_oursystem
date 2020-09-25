<template>
  <router-link to="newcontact">
    <h1>{{ msg }}</h1>
  </router-link>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () { // 由于是组件，data必须是个函数，这是ES6写法，data后面加括号相当于data: function () {}
    return { // 记得return不然接收不到数据
      msg: 'Welcome' // 上面的 msg 就是这里输出的
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
