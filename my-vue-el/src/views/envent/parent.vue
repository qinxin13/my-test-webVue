<template>
    <div>
        <el-button @click="reset">重置current</el-button>
        当前父组件中current：{{ current }}
        <child v-model:count="current" @click="fn" />

        <div v-if="current > 5">当current>5的时候显示</div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import child from './child.vue';
export default defineComponent({
    name: 'parent',
    components: {
        child,
    },
    data() {
        return {
            current: 0,
        }
    },
    created() {
        console.log('父组件：created')
    },
    mounted() {
        console.log('父组件：mounted')
    },
    beforeUnmount() {
        console.log('父组件：beforeUnmount')
    },
    unmounted() {        
        console.log('父组件：unmounted')
    },
    methods: {
        reset() {
            this.current = 0;
        },
        fn(e){
            console.log(e)
        }
    }
})
</script>
