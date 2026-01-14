<script setup>
import {ref,shallowRef} from 'vue'
import A from './component/A.vue'
const register='father1'
const zujian=shallowRef(A)
const transitionfather='father3'
const All='all'
const t=ref()
const fun=value=>{
    t.value=value;
}
</script>
<template>
<div :class="All">
<div :class="register">
    <h3 :style="{'margin-left':'40px'}">我是父组件</h3>
    <h4>我调用了局部组件A</h4>
    <A></A>
    <h4>我调用了全局组件B</h4>
    <B></B>
</div>
<div>
    <h3>我是父组件</h3>
    <button @click="zujian=A">显示A组件</button>
    <button @click="zujian='B'">显示B组件</button>
    <KeepAlive>
        <component :is="zujian" ></component>
    </KeepAlive>
</div>
<div :class="transition">
    <div :class="transitionfather">
        <h3>我是父组件，我的数据是：</h3>
        {{ t }}
    </div>
     <A @demo="fun"></A>
</div>
</div>
</template>
<style>
.all{
    display: flex;
    justify-content:space-around;
}
.father1{
    width: 300px;
    height: 400px;
    background-color: green;
    padding-left: 110px;
}
.father3{
    width: 250px;
    height: 150px;
    background-color:salmon;
}
</style>
