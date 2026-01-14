<script setup>
import {ref,reactive} from 'vue'
const a=reactive(['aa','bb','cc'])
const b=reactive([{id:1,message:'zz'},{id:2,message:'xx'},{id:3,message:'vv'},{id:4,message:'nn'}])
const c=reactive({name:1,age:10,weight:40})
const d=ref(5)
const e=ref('zxdetoubuda')
const z=1
</script>
<template>
    <p v-for="(item,index) in a">
    索引：{{ index }} ----内容：{{ item }}
    </p>
    <p v-for="(item,index) in b">
        索引：{{ index }} id:{{ item.id }},message:{{ item.message }}
    </p>
    <p v-for="(item,name,index) in c">
        索引：{{ index }} name:{{ name }}  内容：{{ item}}
        </p>
    <p v-for="(item,index) in d">
         索引:{{ index }} 循环次数：{{ item }} 
    </p>
    <p v-for="(item,index) in e">
        索引：{{ index }} 字符：{{ item }}
    </p>
    <table v-bind:border="z">
        <tr>
            <th>索引</th>
            <th>id</th>
            <th>message</th>
        </tr>
        <p v-for="(item,index) in b">
        <tr>
            <td>{{ index }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.message }}</td>
        </tr>
        </p>
    </table>

</template>
