<script setup>
import {ref,reactive,computed} from 'vue'
const a='box1'
const isyangshi=ref(false)
const isbox=ref(true)
const isborder=ref(true)
const isinner=ref(true)
const active=ref(true)
const classobject1=reactive({inner:true})
const classobject2=computed(()=>(
{meal:active.value}))
const s1=ref('big1')
const s2=ref('big2')
</script>
<template>
<div v-bind:class="a">梦想</div>
<div v-bind:class="{yangshi:isyangshi}">梦想</div>
<p></p>
<div class="text" v-bind:class="{ box:isbox,border:isborder}">
    <div v-bind:class="{inner:isinner}">春夏</div>
    <div v-bind:class="classobject1">秋冬</div>
    <div v-bind:class="classobject2">三餐四季</div>
</div>
<div v-bind:class="[s1,s2]">你好</div>
</template>
<style>
.box1{
    border:1px solid black;
}
.yangshi{
    border:1px solid black;
}
.text{
    text-align:center;
    line-height:30px;
}
.box{
    width:100%;
    background:linear-gradient(white,grb(239,250,86));
}
.border{
    border:2px dotted black;
}
.inner{
    margin-top:2px;
    width:100px;
    height:30px;
    border:2px double black;
}
.meal{
    width:100px;
    height:30px;
    border:2px dashed rgb(120,81,227);
}
.big1{
    border:2px dotted blue;
}
.big2{
    background-color: brown;
    text-align: center;

}
</style>
