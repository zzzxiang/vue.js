<script setup>
const classname='abox'
</script>
<template>
    <div :class="classname">
        <h3>About组件</h3>
    </div>
</template>
<style scoped>
.abox{
    padding-top: 15px;
    width: 250px;
    height: 150px;
    background-color: skyblue;
}
</style>