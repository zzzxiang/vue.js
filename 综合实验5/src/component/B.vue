<script setup>
const classname='bbox'
</script>
<template>
    <div :class="classname">我是B
        <input :style="{width:'100px'}" type="text" value="我是B">
    </div>
</template>
<style>
.bbox{
    text-align: center;
    width: 150px;
    height: 100px;
    background-color: skyblue;
}
</style>
