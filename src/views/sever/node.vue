<template>
    <div id="node">
        <div class="top">
            <span>全国数据资产链上节点</span>
        </div>
        <div class="middle">
            <div class="item">
                <img
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng095dc86b5d31dd44d8ca7bf0bf836059de8dec9fe779843819752c6732b56f20" />
                <span>全国节点</span>
            </div>
            <div class="item">
                <img
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng095dc86b5d31dd44d8ca7bf0bf836059de8dec9fe779843819752c6732b56f20" />
                <span>全国节点</span>
            </div>
            <div class="item">
                <img
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng095dc86b5d31dd44d8ca7bf0bf836059de8dec9fe779843819752c6732b56f20" />
                <span>全国节点</span>
            </div>
            <div class="item">
                <img
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng095dc86b5d31dd44d8ca7bf0bf836059de8dec9fe779843819752c6732b56f20" />
                <span>全国节点</span>
            </div>
        </div>
        <div class="bot">
            <div class="img">
            </div>
            <div class="left">
                <div class="text">
                    <span class="first">
                        全国数据资产评估
                    </span>
                    <span class="second">
                        简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍…
                    </span>
                    <span class="third">
                        立即前往
                    </span>
                    <div class="right">
                        <span>全国节点</span>
                    </div>
                </div>
                <img src="" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
#node {
    position: relative;
    /* width: 1920px; */
    height: 830px;
    background: #F5F7FA;
    display: flex;
    flex-direction: column;

    /* // align-items: center; */
    .top {
        /* width: 100%; */
        height: 40px;
        color: #121527;
        font-size: 32px;
        line-height: 40px;
        font-weight: 400;
        margin-top: 36px;
        text-align: center;
    }

    .middle {
        /* // width: 100%; */
        height: 26px;
        color: #252B3A;
        font-size: 18px;
        font-weight: 300;
        line-height: 26px;
        margin-top: 16px;
        text-align: right;
        align-items: center;
        display: flex;
        flex-direction: row;
        margin:0 auto;

        .item {
            margin: 16px 42px 0 0;

            >img {
                width: 19px;
                height: 18px;
                margin: 0 8px 0 0;
            }
        }
    }

    .bot {
        width: 1264px;
        height: 640px;
        color: #ffffff;
        border-radius: 8px;
        margin: 28px auto;
        display: flex;
        flex-direction: row;
        align-items: center;

        .img {
            width: 320px;
            height: 640px;
            background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ef56e61430ff49399f7eb7242b7d3623_mergeImage.png);
        }

        .left {
            width: 944px;
            height: 640px;
            background: #a5a6a7;
            background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7afc27f22d7eed619f055c85b46267beed0bfcf576bb081d279b46e92ab87207) -2px -3px no-repeat;
            border: 1px solid;

            .text {
                margin: 112px 231px 0 530px;
                width: 183px;
                height: 128px;
                background: #FFFFFF;
                display: flex;
                flex-direction: column;
                position: relative;

                .first {
                    margin: 20px 0 0 16px;
                    color: #121527;
                    font-size: 14px;
                    height: 22px;
                    font-weight: 400;
                    line-height: 22px;
                }

                .second {
                    margin: 4px 0 0 16px;
                    height: 40px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #71737D;
                    line-height: 20px;
                }

                .third {
                    margin: 4px 0 0 18px;
                    height: 20px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #1953C5;
                    line-height: 20px;
                    cursor: pointer;
                }

                .right {
                    width: 55px;
                    height: 20px;
                    position: absolute;
                    right: 0;
                    top: 0;
                    background: rgba(214, 0, 0, 0.1);
                    border-radius: 0px 0px 0px 4px;
                    text-align: center;
                    >span {
                        font-size: 12px;
                        height: 20px;
                        font-weight: 400;
                        color: #C7000B;
                        line-height: 20px;
                    }
                }
            }
        }
    }
}
</style>