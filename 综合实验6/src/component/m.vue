<script setup>
const classname='m'
</script>
<template>
    <div :class="classname">
        <h4>这是电影{{ $route.params.id }}的页面</h4>
    </div>
</template>
<style scoped>
.m{
    width: 150px;
    background-color: #fff;
    margin: 0px auto;
}
</style>