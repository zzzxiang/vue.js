<script setup>
import { useRouter } from 'vue-router'
const router=useRouter()
const classname='app1'
const push=event=>{
    router.push('/home')
}
const replace=event=>{
    router.replace('/about')
}
const go=event=>{
    router.go(-1)
}
</script>
<template>
    <div :class="classname">
        <h1>App根组件</h1>
        <button @click="push">push home</button>
        <button @click="replace">replace about</button>
        <button @click="go">goback</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<style scoped>
.app1{
    text-align: center;
    width: 250px;
    height: 500px;
    margin: 20px auto;
}
</style>