<script setup>
import {ref,watch} from 'vue'
const classname='abox'
const a=ref('我是A')
const emit=defineEmits(['demo'])
watch(a,(newVal,oldVal)=>{
    emit('demo',newVal)
})
</script>
<template>
    <div :class="classname">我是A
        <input :style="{width:'100px'}" type="text" v-model="a">
    </div>
</template>
<style>
.abox{
    text-align: center;
    width: 150px;
    height: 100px;
    background-color: pink;
}
</style>