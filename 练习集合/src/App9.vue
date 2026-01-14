<script setup>
import {ref} from 'vue'
const count=ref(1)
const addcount=event=>{
    count.value++
    if(count.value%2!=0)
    event.target.style.border='3px dotted'
    else
    event.target.style.border='3px solid'
}
const addcountn=(event,n)=>{
    count.value+=n
    if(count.value%2!=0)
    event.target.style.border='3px dotted'
    else
    event.target.style.border='3px solid'
}
</script>
<template>
    <p>count的值为：{{ count }}</p>
    <button v-on:click="addcount">count+1</button>
    <button v-on:click="addcountn($event,4)">count+n</button>
</template>