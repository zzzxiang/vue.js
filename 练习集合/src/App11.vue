<script setup>
import {ref,computed,watch} from 'vue'
const message=ref('hello world')
const overmessage=computed(()=>
      message.value.split('').reverse().join('')
)
const show1=event=>{
    message.value='周湘'
}
const a=ref()
watch(a,(a1,a2)=>console.log(a1,a2))
</script>
<template>
    初始message:{{ message }}
    <p>反转之后的message:{{ overmessage }}</p>
    <button v-on:click="show1">更改</button>
    <p><input type="text" v-model="a"></p>
    a的值为:{{ a }}
</template>