<script setup>
const classname='mbox'
</script>
<template>
    <div :class="classname">
        <router-link to="/movie/1">电影1</router-link>
        <router-link to="/movie/2">电影2</router-link>
        <router-link to="/movie/3">电影3</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>
<style scoped>
.mbox{
    padding-top: 15px;
    width: 250px;
    height: 150px;
    background-color: orange;
}
.mbox a{
    padding: 10px;
    text-decoration: none;
    color: #000;
}
.mbox a.router-link-active{
    color: #fff;
    background-color: #000;
}
</style>