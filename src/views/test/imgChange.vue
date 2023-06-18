<template>
    <el-carousel class="elcarousel" indicator-position="outside" :interval="1000">
        <el-carousel-item v-for="item in imgList" :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <img class="img" :src="item.imgurl" />
        </el-carousel-item>

    </el-carousel>
</template>
<script>
import { defineComponent } from 'vue';
// import { getImglist } from '@/api/imgChange'
export default defineComponent({
    name: 'imgChange',
    data() {
        return {
            imgList: [
                { imgurl: 'https://img.alicdn.com/imgextra/i2/O1CN01XZC8Dd1IUs179sweg_!!6000000000897-2-tps-846-472.png' },
                { imgurl: 'https://img.alicdn.com/imgextra/i3/O1CN01RbnhFd1wBFigMUNYq_!!6000000006269-2-tps-846-472.png' },
                { imgurl: 'https://img.alicdn.com/imgextra/i2/6000000002978/O1CN01wlWxdk1XryKCqlxrj_!!6000000002978-0-octopus.jpg' },
                { imgurl: 'https://img.alicdn.com/imgextra/i1/O1CN01YGUXOM1k5VKBPo5J3_!!6000000004632-2-tps-846-472.png' },
                { imgurl: 'https://gw.alicdn.com/imgextra/i4/O1CN01a71ilU1T2RCTvUXDY_!!6000000002324-0-tps-846-472.jpg' },
            ]
        }
    },
})
</script>
<style lang="less" scoped>
.elcarousel {
    width: 630px;
    height: 320px;
    margin: 0 auto;
    background: rgb(66, 66, 66);
    .img{
        width: 630px;
        height: 315px;
    }
}
</style>