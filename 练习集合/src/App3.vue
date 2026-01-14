<script setup>
import {reactive,toRef,toRefs} from 'vue'
const a=reactive({m:'*',n:'*'})
const b=reactive({x:'**',y:'***'})
const n=toRef(a,'n')
let {x,y}=toRefs(b)
setTimeout(()=>{a.m='1'},2000)
setTimeout(()=>{n.value='2'},4000)
setTimeout(()=>{x.value='12'},6000)
setTimeout(()=>{y.value='123'},8000)
</script>
<template>
    {{ a.m }}
    <p>{{ a.n}}</p>
    <p>{{ b.x }}</p>
    <P>{{b.y }}</P>
</template>