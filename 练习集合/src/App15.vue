<script setup>
import {reactive} from 'vue'
import Child1 from './component/Child1.vue'
import Child2 from './component/Child2.vue'
import Child3 from './component/Child3.vue'
const list=reactive([{name:'晨练',state:'未完成'},{name:'练书法',state:'未完成'}])
const receive1=value=>{
    console.log(value)
    const pa=reactive({name:value,state:'未完成'})
    list.pop(pa)
    
}
</script>
<template>
<h1 style="text-align: center;">待办事项</h1>
<Child1 @demo="receive1"/>

</template>
