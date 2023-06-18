<template>
    <base-page>
        <template #form>
            <el-form inline>
                <el-form-item label="所属区域">
                    <el-select v-model="industry" placeholder="请选择" clearable>
                        <el-option v-for="item of industryList" :label="item.title" :value="item.title" :key="item.title" />
                    </el-select>
                </el-form-item>
                <el-form-item label="排序">
                    <el-select v-model="filter" placeholder="请选择">
                        <el-option label="质量评价分数" value="quality"></el-option>
                        <el-option label="热度值" value="heat"></el-option>
                        <el-option label="登记时间" value="registerTime"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="search">查询</el-button>
                </el-form-item>
            </el-form>
        </template>

        <el-table :data="data">
            <el-table-column prop="dataAssetName" label="资产名称" />
            <el-table-column prop="dataAssetId" label="资产编号" />
            <el-table-column prop="industry" label="所属区域" />
            <el-table-column prop="province" label="所属地域" />
            <el-table-column prop="registerTime" label="登记时间" />
        </el-table>
    </base-page>
</template>
<script>
import { defineComponent } from 'vue';
import { queryTotal, mainList } from '@/api/pageIniteApi';
export default defineComponent({
    name: 'pageInite',
    data() {
        return {
            industryList: [],
            active: '',
            industry: '',
            filter: '',
            data: []
        }
    },
    created() {
        this.loadData();
        this.search();
    },
    methods: {
        async loadData() {
            const { code, data } = await queryTotal();
            if (code === 200) {
                this.industryList = data?.industry || [];
            }
        },
        async search() {
            const { code, data } = await mainList({
                industry: this.industry,
                filter: this.filter,
                page: 1,
                pageSize: 10,
            })
            if (code === 200) {
                this.data = data.list || [];
            }
        }
    }

})
</script>
