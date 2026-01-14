<script setup>
import {ref} from 'vue';
const a=ref(1);
const b=ref(1);
const aminus=event=>{
    a.value--;
}
const aadd=event=>{
    a.value++;
}
const bminus=event=>{
    b.value--;
}
const badd=event=>{
    b.value++;
}
</script>
<template>
<table border="1">
    <thead>
        <tr>
            <th>名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>小米手机</td>
            <td>1300</td>
            <td><button @click="aminus">-</button><input type="text"  v-model="a"><button @click="aadd">+</button></td>
            <td>{{ a*1300 }}</td>
        </tr>
        <tr>
            <td>小米手环</td>
            <td>310</td>
            <td><button @click="bminus">-</button><input type="text"  v-model="b"><button @click="badd">+</button></td>
            <td>{{ b*310 }}</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">合计:{{ a*1300+b*310 }}</td>
        </tr>
    </tfoot>
</table>
</template>