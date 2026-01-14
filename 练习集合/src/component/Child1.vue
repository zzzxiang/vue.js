<script setup>
import {ref} from 'vue'
const a=ref()
const update=()=>{
    emit('demo',a.value)
}
const emit=defineEmits(['demo'])
</script>
<template>
<input :style="{width:'100%',height:'60px'}" type="text" placeholder="请填写任务" v-model="a">
<div @keyup.enter="update"></div>
</template>