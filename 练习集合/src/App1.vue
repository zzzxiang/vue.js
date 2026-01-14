<script setup>
import {ref} from 'vue'
const a=ref('买新车')
setTimeout(()=>{a.value='上瓜子二手车'},2000)
</script>
<template>
    {{ a }}
</template>