<script setup>
import {ref,reactive} from 'vue'
const activeColor=ref('red')
const fontSize=ref(30)
const c1=ref('red')
const f1=ref('30px')
const s1=reactive({color:c1,fontSize:f1})
const m=reactive({color:'red'})
const n=reactive({fontSize:'30px'})
</script>
<template>
<div v-bind:style="{color:'red','font-size':'30px'}">你好</div>
<div v-bind:style="{color:activeColor,fontSize:fontSize+'px'}">你好</div>
<div v-bind:style="s1">你好</div>
<div v-bind:style="[m,n]">你好</div>
</template>