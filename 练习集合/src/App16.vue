<script setup>
import{ref,reactive} from 'vue'
const a='<h1>水滴石穿</h1>'
const b=ref('请输入账户')
const c=ref('请输入密码')
const d=event=>{
    console.log("欢迎来到vue.js的世界!")
}
const e=ref('良好')
const list=reactive(['HTML','CSS','JavaScript'])
</script>
<template>
    {{ a }}
    <div>v-text形式显示</div>
    <div v-text="a"></div>
    <div>v-html形式显示</div>
    <div v-html="a"></div>
    <input type="text" v-bind:placeholder="b"><br>
    <input type="password" v-bind:placeholder="c"><br>
    <button v-on:click="d">输出信息</button>
    <div>学习评定等级：</div>
    <div v-if="e=='优秀'">优秀</div>
    <div v-else-if="e=='良好'">良好</div>
    <div v-else="e=='及格'">及格</div>
    <button @click="e='优秀'">切换成优秀</button>
    <button @click="e='良好'">切换成良好</button>
    <button @click="e='及格'">切换成及格</button>
    <div v-for="(item,index) in list" :key="index">
        索引是：{{ index }}-----元素的内容是：{{ item }}
    </div>
</template>