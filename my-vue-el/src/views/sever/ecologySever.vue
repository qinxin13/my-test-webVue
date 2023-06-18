<template>
    <div id="ecologySever">
        <div class="top">
            <span>生态服务</span>
        </div>
        <div class="middle">
            <span>以区块链技术、AI技术和大数据技术为底层支撑，构建业务规则库和算法模型库，开展数据质量评价、数据资产评价和数据价值评估服务</span>
        </div>
        <div class="tags">
            <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane class="eltable" label="数据质量评价" name="first">
                    <span class="itemName">数据质量评价</span>
                    <span class="itemcontent">数据评价包括质量要素评价、成本要素评价与应用要素评价，形成数据评价报告，为数据资产价值评价提供依据，并为数据清洗、数据治理提供参考。</span>
                </el-tab-pane>
                <el-tab-pane class="eltable" label="数据资产评价" name="second">

                    <span class="itemName">数据资产评价</span>
                    <span class="itemcontent">数据评价包括质量要素评价、成本要素评价与应用要素评价，形成数据评价报告，为数据资产价值评价提供依据，并为数据清洗、数据治理提供参考</span>
                </el-tab-pane>
                <el-tab-pane class="eltable" label="数据资产核验" name="third">
                    <span class="itemName">数据资产核验</span>
                    <span class="itemcontent">对企业登记的数据资产进行实质性的核查，包括数据的真实性，合规性等。</span>
                </el-tab-pane>
                <el-tab-pane class="eltable" label="数据资产评估" name="fourth">
                    <span class="itemName">数据资产评估</span>
                    <span
                        class="itemcontent">基于数据资产评价报告，联合数据资产评估相关机构，采用成本法、收益法和市场法等多种评估方法，采用了多元化的算法模型，对数据资产价值进行合理评定估算，最终形成数据资产价值评估报告。</span>
                </el-tab-pane>
                <el-tab-pane class="eltable" label="咨询服务" name="fifth">咨询服务</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
const activeName = ref('first');
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
}
</script>
<style lang="less" scoped>
#ecologySever {
    position: relative;
    width: 1920px;
    height: 610px;
    background-color: rgb(243, 243, 243);
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        width: 100%;
        height: 40px;
        color: #121527;
        font-size: 32px;
        line-height: 40px;
        font-weight: 400;
        margin-top: 36px;
        text-align: center;
    }

    .middle {
        width: 100%;
        height: 26px;
        color: rgba(37, 43, 58, 1);
        font-size: 18px;
        font-weight: 300;
        line-height: 26px;
        margin-top: 16px;
        text-align: center;
    }

    .tags {
        width: 1264px;
        height: 64px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 28px;

        .demo-tabs>.el-tabs__content {
            padding: 253px;
            color: #6b778c;
            font-size: 32px;
            font-weight: 600;
        }

        .el-tabs--card>.el-tabs__header {
            border-bottom: 1px solid var(--el-border-color-light);
            height: 64px;
        }

        :deep(.demo-tabs) {
            width: 1264px;
            height: 64px;
            background: #1953C5;
            // :deep(.el-tabs__item) {
            // }
            width: 1264px;
            height: 64px;
            border: none;
            background: #ffffff;

            .el-tab-pane {
                width: 1264px;
                height: 172px;
                background: #ffffff;
                border-radius: 8px;
                margin: 16px 0 40px 0;
            }

        }

        :deep(.el-tabs) {
            --el-tabs-header-height: 64px;
        }

        :deep(.el-tabs__item) {
            width: 253px;
            height: 64px;
        }

        :deep(.el-icon svg) {
            height: 0;
            width: 10px;
        }

        :deep(.el-tabs__nav-wrap.is-scrollable) {
            padding: 0;
            box-sizing: border-box;
        }

        :deep(.el-tabs__item.is-active) {
            color: #ffffff;
            background: #1953C5;
        }

        .eltable {
            display: flex;
            flex-direction: column;
            align-items: left;
            .itemName {
                width: 144px;
                height: 32px;
                font-size: 24px;
                font-weight: 400;
                color: #121527;
                line-height: 32px;
                margin: 28px 0 0 30px;
            }

            .itemcontent {
                // width: 664px;
                height: 84px;
                font-size: 16px;
                font-weight: 300;
                color: #121527;
                line-height: 28px;
                margin: 10px 0 0 30px;
            }
        }

    }
}
</style>