<script setup>
import {ref} from 'vue'
const a=ref();
const b=ref();
const c=ref();
const d=ref([]);
const e=ref();
const f=ref([]);
const g=ref([0,0]);
const h=ref([0,0]);
const s1=ref(["软件测试","JAVA工程师"]);
const s2=ref(["前端工程师"]);
const status1=ref();
const status2=ref();
const status3=ref();
const c1=event=>{
    status1.value="checked";
    status2.value="checked";
    status3.value="checked";
    d.value=["HTML","CSS","VUE"];
}
const c2=event=>{
    status1.value=false;
    status2.value=false;
    status3.value=false;
    d.value=[];
}
const c3=event=>{
    status1=!status1;
    status2=!status2;
    status3=!status3;
}
const c4=event=>{
    s2.value.push(g[0]);
    s1.value.splice(g[1],1);
    
}
const c5=event=>{
    s1.value.push(h[0]);
    s2.value.splice(h[1],1);
}
const c6=event=>{
    alert("姓名:"+a.value
        +"\n个人简介:"+b.value
        +"\n性别:"+c.value
        +"\n爱好:"+d.value
        +"\n所在地:"+e.value
        +"\n擅长的技术:"+f.value
        +"\n选择的职位:"+s2.value
    )
}
</script>
<template>
    <table border="1">
        <tbody>
            <tr>
                <th>用户名:</th>
                <td><input type="text" v-model="a"></td>
                <td>{{ a }}</td>
            </tr>
            <tr>
                <th>个人简介：</th>
                <td><textarea v-model="b"></textarea></td>
                <td>{{ b }}</td>
            </tr>
            <tr>
                <th>性别：</th>
                <td>
                    <input type="radio" value="男" name="sex" v-model="c">男
                    <input type="radio" value="女" name="sex" v-model="c">女
                </td>
                <td>{{ c }}</td>
            </tr>
            <tr>
                <th>爱好：</th>
                <td>
                    <input type="checkbox" value="HTML" name="hobby"  v-model="d" v-bind:checked="status1">HTML
                    <input type="checkbox" value="CSS"  name="hobby"  v-model="d" v-bind:checked="status2">CSS
                    <input type="checkbox" value="VUE"  name="hobby"  v-model="d" v-bind:checked="status3">VUE
                </td>
                <td>{{d}}</td>
            </tr>
            <tr>
                <th>对爱好进行快捷操作</th>
                <td><button @click="c1">全选</button><button @click="c2">全不选</button><button @click="c3">反选</button></td>
            </tr>
            <tr>
                <th>所在地：</th>
                <td>
                    <select v-model="e">
                        <option value="尖草坪">尖草坪</option>
                        <option value="小店区">小店区</option>
                        <option value="迎泽区">迎泽区</option>
                    </select>
                </td>
                <td>{{ e }}</td>
            </tr>
            <tr>
                <th>选择你擅长的技术：</th>
                <td>
                    <select multiple="multiple" v-model="f">
                        <option value="JAVA">JAVA</option>
                        <option value="前端VUE" >前端VUE</option>
                        <option value="PHP">PHP</option>
                    </select>
                </td>
                <td>{{ f }}</td>
            </tr>
            <tr>
                <th>可选职位：</th>
                <td colspan="2">
                    <select multiple="multiple" v-model="g">
                        <div v-for="(item,index) in s1">
                            <option :value="[item,index]">{{ item }}</option>
                        </div>
                    </select>
                    <button @click="c4">>>></button><button @click="c5"><<<</button>
                    <select multiple="multiple" v-model="h">
                        <div v-for="(item,index) in s2">
                            <option :value="[item,index]">{{ item }}</option>
                        </div>
                    </select>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"><button @click="c6">提交</button><button>取消</button></td>
            </tr>
        </tfoot>

    </table>
</template>
<style>
td{
    text-align: center;
}
</style>