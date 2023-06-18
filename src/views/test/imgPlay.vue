<template>
    <div>
        <lb :imgList="aa" :times="1000" />
        <lb :imgList="bb" />
        <lb />
    </div>
</template>

<script setup lang="ts">
import lb from '@/components/lb.vue'

const aa = [
    {
        id: 1,
        active: true,
        imgurl: 'https://img.alicdn.com/imgextra/i2/O1CN01XZC8Dd1IUs179sweg_!!6000000000897-2-tps-846-472.png'
    },
    {
        id: 2,
        active: false,
        imgurl: 'https://img.alicdn.com/imgextra/i3/O1CN01RbnhFd1wBFigMUNYq_!!6000000006269-2-tps-846-472.png'
    },
    {
        id: 3,
        active: false,
        imgurl: 'https://img.alicdn.com/imgextra/i2/6000000002978/O1CN01wlWxdk1XryKCqlxrj_!!6000000002978-0-octopus.jpg'
    },
    {
        id: 4,
        active: false,
        imgurl: 'https://img.alicdn.com/imgextra/i1/O1CN01YGUXOM1k5VKBPo5J3_!!6000000004632-2-tps-846-472.png'
    },
    {
        id: 5,
        active: false,
        imgurl: 'https://gw.alicdn.com/imgextra/i4/O1CN01a71ilU1T2RCTvUXDY_!!6000000002324-0-tps-846-472.jpg'
    },

]

const bb = [
    {
        id: 1,
        active: true,
        imgurl: 'https://img.alicdn.com/imgextra/i2/O1CN01XZC8Dd1IUs179sweg_!!6000000000897-2-tps-846-472.png'
    },
    {
        id: 2,
        active: false,
        imgurl: 'https://img.alicdn.com/imgextra/i3/O1CN01RbnhFd1wBFigMUNYq_!!6000000006269-2-tps-846-472.png'
    },
    {
        id: 3,
        active: false,
        imgurl: 'https://img.alicdn.com/imgextra/i2/6000000002978/O1CN01wlWxdk1XryKCqlxrj_!!6000000002978-0-octopus.jpg'
    },

]


</script>

