<script setup>
const a='请输入用户名'
const b='请输入密码'
const c=()=>{console.log('你好呀')}
</script>
<template>
    <p><input type='text' v-bind:placeholder="a"></p>
    <p><input type='password' :placeholder="b"></p>
    <button @click="c">点我</button>
</template>