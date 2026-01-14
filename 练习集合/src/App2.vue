<script setup>
import {reactive} from 'vue'
const a=reactive({n:'name=',g:'age='})
setTimeout(()=>{a.n='name=zx'},2000)
setTimeout(()=>{a.g='age=20'},4000)
</script>
<template>
    <p>{{ a.n}}</p>
    <p>{{ a.g}}</p>
</template>