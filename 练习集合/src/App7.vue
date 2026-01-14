<script setup>
import {ref} from 'vue'
const a=ref()
const b=ref()
</script>
<template>
    <h1>第一关：见到男神你会怎么做：</h1>
    <button @click="a=1">默默注视他离开</button>
    <p><button @click="a=2">鼓起勇气上去要微信</button></p>
    <p><button @click="a=3">假装摔倒在他怀里</button></p>
    <h5>男神：</h5>
    <p v-if="a==1">这人看我干嘛 莫名其妙</p>
    <p v-if="a==2">不好意思 没有微信</p>
    <p v-if="a==3">走路能不能看点路</p>
    <h3>接下来，你的选择是：</h3>
    <button @click="b=4">继续攻略高冷帅哥</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="b=5">水泥封心</button>
    <P v-show="b==4"><h1>请继续下一关...</h1></P>
    <p v-show="b==5"><h1>故事结束...</h1></p>
</template>
