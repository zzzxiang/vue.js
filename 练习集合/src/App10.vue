<script setup>
const show1=event=>{
    console.log('祖父')
}
const show2=event=>{
    console.log('父亲')
}
const show3=event=>{
    console.log('儿子')
}
const show4=event=>{
    console.log(1)
}
const show5=event=>{
    console.log('滚动')
}
const show6=event=>{
    console.log('delete')
}
const show7=event=>console.log('left')
const show8=event=>console.log('right')
const show9=event=>console.log('middle')
</script>
<template>
    <p v-on:click="show1">
        <p v-on:click="show2">
            <button v-on:click.self="show3">capture冒泡</button>
        </p>
    </p>
    <button v-on:click.once="show4">once</button>
    <p v-on:scroll="show5"></p>
    <input type="text" v-on:keyup.delete="show6"></input>
    <p><button v-on:click.left="show7" v-on:click.right="show8" v-on:click.middle="show9">左右击</button></p>
</template>