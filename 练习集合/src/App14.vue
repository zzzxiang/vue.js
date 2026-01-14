<script setup>
import {reactive,ref} from 'vue'
const a='请输入学习科目'
const b='请输入学习内容'
const km=ref()
const nr=ref()
const dd=ref()
const c=reactive([])
const box1='box1'
const submit=event=>{
    const d=reactive({m1:km.value,m2:nr.value,m3:dd.value})
    c.push(d)
}
const show2=(item,index,event)=>{
    if(item.status=="已完成")
    {if(index>=1)
    c.splice(index,index)
    else
    c.shift()}
    else{
        alert("完成后才可删除!")
    
}}
</script>
<template>
    <table v-bind:style="{border:'solid',width:'900px'}">
        <thead>学习计划表</thead>
        <p></p>
        <tbody>
            <tr>
                <td>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="box" :class="box1">学习科目</span><input class="box" style="text" v-bind:placeholder="a" v-model="km"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="box" :class="box1">学习内容</span><input class="box" style="text" v-bind:placeholder="b" v-model="nr"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="box" :class="box1">学习地点</span><select class="box" v-model="dd">
                    <option>自习室</option>
                    <option>图书馆</option>
                    <option>宿舍</option>
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button v-on:click="submit">添加</button>
                </td>
            </tr>
        </tbody>
        <p></p>
    </table>
    <table v-bind:style="{border:'solid',width:'900px','text-align':'center'}">    
            <tr>
                <th>序号</th>
                <th>学习科目</th>
                <th>学习内容</th>
                <th>学习地点</th>
                <th>完成状态</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in c">
                    <td>{{index+1}}</td>
                    <td>{{ item.m1 }}</td>
                    <td>{{ item.m2 }}</td>
                    <td>{{ item.m3 }}</td>
                    <td><input type="checkbox" v-model="item.status" true-value="已完成" false-value="未完成">
                    <span v-if="item.status=='已完成'">已完成</span>
                    <span v-if="item.status=='未完成'">未完成</span></td>
                    <td><a href="" v-on:click.prevent="show2(item,index,$event)">删除</a></td>
            </tr>
    </table>
</template>
<style>
.box{
    height:22px;
}
.box1{
    border:solid 1px;
    background-color:lightgray;
    border-radius: 3px;
}
</style>