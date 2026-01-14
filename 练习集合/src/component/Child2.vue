<script setup>
</script>
<template>
    {{ $props[0] }}
<table :style="{width:'100%',border:'2px'}">
    <tbody>
        <div v-for="item in list">
            <tr> {{ item.value }}</tr>
        </div>
    </tbody>
</table>
</template>