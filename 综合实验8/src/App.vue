<script setup>
import{reactive} from 'vue'
import request from './axios/request.js'
const bookdata=reactive({
  list: []
})
const classname='tab'
const getdata=function() {
  console.log('开始请求')
  request({
    url:'/mock/getbooks',
    method:'get'
  }).then(res => {
    bookdata.list=res.data.data
    console.log(res.data.data)
  }).catch(error=>{
    console.log(error)
  })
}
</script>
<template>
  <div class="box">
  <button @click="getdata">请求数据</button>
  <table :class ="classname" border="1">
    <thead>
      <tr>
        <th>编号</th>
        <th>书名</th>
        <th>作者</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in bookdata.list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.author }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<style scoped>
  .box{
    width: 250px;
    margin: 0 auto;
    text-align: center;
  }
  .tab{
    text-align: center;
    width: 250px;
    margin: 0 auto;
  }
</style>
