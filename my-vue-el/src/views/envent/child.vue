<template>
    <div>
        <el-button @click="add">点击+1</el-button>
        当前父组件传递过来的数据值{{ count }}
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'child',
    props: {
        count: {
            type: Number,
        }
    },
    created() {
        console.log(this.count)
        console.log('子组件：created')
    },
    mounted() {
        console.log('子组件：mounted')
    },
    beforeUnmount(){
        console.log('子组件：beforeUnmount')
    },
    unmounted(){
        console.log('子组件：unmounted')
    },
    methods: {
        add() {
            this.$emit('update:count', this.count + 1);
        }
    }
})
</script>
