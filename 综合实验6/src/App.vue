<script setup>
const classname='app'
</script>
<template>
  <div :class="classname">
    <h1>App根组件</h1>
    <router-link  to="/home">首页</router-link>
    <router-link  to="/about">关于</router-link>
    <router-link to="/movie">电影</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.app{
  text-align: center;
  width: 250px;
  height: 500px;
  margin: 20px auto;
}
.app h1{
  font-size: 50px;
}
.app a{
  padding: 10px;
  text-decoration: none;
  color: #000;
}
.app a.router-link-active{
  color: #fff;
  background-color: #000;
}
.app :nth-child(2){
margin-right: 5px;
}
.app :nth-child(3){
  margin-left: 5px;
}
</style>
