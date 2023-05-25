<template>
    <div class="base-page">
        <header v-if="$slots.form || $slots.extra" class="base-page-header">
            <div class="base-page-form">
                <slot name="form"></slot>
            </div>
            <div v-if="$slots.extra" class="base-page-extra">
                <slot name="extra"></slot>
            </div>
        </header>
        <div v-if="$slots.default" class="base-page-tableContainer">

            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'basePage',
})
</script>

<style scoped lang="less">
.base-page {
    box-sizing: border-box;
    padding: @gap 2*@gap 0 2*@gap;
    display: flex;
    flex-direction: column;

    .base-page-tableContainer {
        margin-top: @gap;
        width: 100%;

        th {
            background: #f5f7fa;
        }
    }

    .base-page-header {
        line-height: inherit;
        margin-top: @gap;
        display: flex;
        align-items: center;
        width: 100%;

        .base-page-form {
            flex: 1 1 100px;
        }

        .base-page-extra {
            margin-left: @gap;
        }
    }
}
</style>