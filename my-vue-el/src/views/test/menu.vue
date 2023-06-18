<template>
    <div>
        <el-menu mode="horizontal" @select="select" :default-active="active">
            <el-menu-item v-for="item of menus" :index="item.name" :key="item.id" @click="clickMenu(item)">
                {{ item.name }}
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { queryTotal } from '@/api/pageIniteApi';
export default defineComponent({
    name: 'mymenu',
    data() {
        return {
            menus: [],
            active: ''
        }
    },
    created() {
        this.loadMenus();
    },
    methods: {
        async loadMenus() {
            const { code, data } = await queryTotal();
            if (code === 200) {
                this.menus = data?.sysColumn || [];
                this.active = this.menus[0]?.name;
            }
        },
        select(index) {
            console.log(index);
        },
        clickMenu(e) {
            console.log(e)
        }
    }
})
</script>
