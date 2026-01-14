<script setup>
import {ref} from 'vue'
const a=ref(0)
const b="请输入一个a的值"
const c=ref(0)
const d=ref(0)
const e=ref(0)
const f=ref(0)
</script>
<template>
    <input type="text" v-bind:placeholder="b"  v-model="a">
    <p>a的值更新为:</p>
    <p v-text="a"></p>
    <hr></hr>
    <input type="radio" value=5 v-model="e">5</input>
    <p><input type="radio" value=6 v-model="e">6</input></p>
    <p>e的值更新为：</p>
    <p v-text="e"></p>
    <hr></hr>
    <select v-model="f">
        <option value=2>&nbsp&nbsp&nbsp&nbsp2&nbsp&nbsp&nbsp&nbsp</option>
        <option value=7>&nbsp&nbsp&nbsp&nbsp7&nbsp&nbsp&nbsp&nbsp</option>
        <option value=4>&nbsp&nbsp&nbsp&nbsp4&nbsp&nbsp&nbsp&nbsp</option>
    </select>
    <p>f的值更新为：</p>
    <p v-text="f"></p>
    <hr></hr>
    <p><input type="text" v-model.number="c">+<input type="text" v-model.number="d">={{ c+d }}</input></p>
</template>