<template>
    <div>{{ state.msg }}<el-date-picker v-model="state.value" /></div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
    msg: '时间：',
    value: '',
})
</script>
