<template>
    <div v-if="imgList.length">
        <!-- 移入移出事件 -->
        <div class="box" @mouseout="auto" @mouseover='stop'>
            <ul>
                <!-- 点击事件 -->
                <li v-for='(item, i) in imgList' :key='item.id' :class="{ active: index === i }">
                    <img :src="item.imgurl" alt="">
                </li>
            </ul>
            <ol>
                <!-- 点击事件 -->
                <li v-for='(item, i) in imgList' :key="item.id" :class="{ active: index === i }" @click="index = i">
                </li>
            </ol>
            <!-- 点击事件，prevent阻止默认事件-->
            <el-link class="left" @click.prevent='Lclick'>&lt;</el-link>
            <el-link class="right" @click.prevent='Rclick'>&gt;</el-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = withDefaults(defineProps<{
    imgList?: { id: number, active: boolean, imgurl: string }[];
    times?: number
}>(), {
    imgList: () => [] as any[],
    times: 3000,
})
const index = ref(0);
const time = ref<any>(0);

// 左键点击事件
function Rclick() {
    index.value++;
    if (index.value >= props.imgList.length) {
        index.value = 0;
    }
}
// 右键点击事件
function Lclick() {
    index.value--
    if (index.value < 0) {
        index.value = props.imgList.length - 1;
    }
}
// 自动播
function auto() {
    time.value = setInterval(Rclick, props.times)
}

// 停止
function stop() {
    clearInterval(time.value);
}

onMounted(auto);


onUnmounted((stop));
</script>

<style scoped lang="less">
.box {
    width: 630px;
    height: 315px;
    margin: 0 auto;
    border: 1px solid #000;
    position: relative;
    cursor: pointer;

    ul li {
        display: none;

        &.active {
            display: block;

        }

        img {
            width: 630px;
            height: 315px;
        }
    }

    ol {
        height: 20px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        border-radius: 10px;

        li {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #000;
            float: left;
            margin: 5px;

            &.active {
                background-color: #f00;

            }
        }
    }

    >a {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: rgba(0, 0, 0, .7);


    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }

}
</style>