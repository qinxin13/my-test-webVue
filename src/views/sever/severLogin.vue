<template>
    <div id="leftItem">
        <div class="itemfirst">
            <span>政策</span>
            <span>资讯</span>
        </div>
        <div class="item">
            <span>资产</span>
            <span>登记</span>
        </div>
        <div class="item">
            <span>生态</span>
            <span>服务</span>
        </div>
        <div class="item">
            <span>
                服务
            </span>
            <span>
                机构
            </span>
        </div>
        <div class="item">
            <span>
                链上
            </span>
            <span>
                节点
            </span>
        </div>
        <div class="item">
            <span>
                服务
            </span>
            <span>
                场景
            </span>
        </div>
    </div>
    <div id="middle">
        <div class="mid">
            <div class="middle-item">
                <div class="block text-center" m="t-4">
                    <el-carousel trigger="click" height="391px">
                        <el-carousel-item v-for="item in imgLists" :key:number="item">
                            <img :src="item.url" alt="" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="middle-text">
                <div class="first">
                    <span class="firstOne">政策资讯</span>
                    <span class="firstTwo">查看更多</span>
                </div>
                <div class="second">
                    <span>orIP</span>
                    <div>
                        <span>而我却二</span>
                        <span>2023-06-16 16:42:52</span>
                    </div>
                </div>
                <div class="second">
                    <span>短时</span>
                    <div>
                        <span>自创</span>
                        <span>2023-06-16 16:42:48</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'severLogin',
        data() {
            return {
                imgLists: [
                    { url: "http://testbuild.youedata.cc/shujuzichanshuju-155/assetdatauploadfile/minard/upload/images/1686904820109QOO62IN8.png" },
                    { url: "http://testbuild.youedata.cc/shujuzichanshuju-155/assetdatauploadfile/minard/upload/images/1686904831301IH05GBLE.png" },
                ],
            }
        },
    });
</script>

<style lang="less" scoped>
    #leftItem {
        position: fixed;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 300px;
        left: -15px;

        .item {
            width: 48px;
            height: 48px;
            color: rgba(37, 43, 58, 1);
            font-size: 14px;
            text-align: center;
            line-height: 24px;
            margin: 8px 0 0 48px;
            border-radius: 4px;
            box-shadow: 5px 5px 10px 2px rgba(215, 218, 224, 0.4);
            background: #ffffff;
            cursor: pointer;

            >span {
                width: 28px;
                height: 28px;
                overflow-wrap: break-word;
                text-align: center;
                margin: 10px 10px 10px 10px;
            }
        }

        .itemfirst {
            background: #1953C5;
            width: 48px;
            height: 48px;
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 24px;
            margin: 8px 0 0 48px;
            border-radius: 4px;
            text-align: center;
            cursor: pointer;
            background: rgba(25, 83, 197, 1);

            >span {
                overflow-wrap: break-word;
                line-height: 20px;
                margin: 4px 10px 0 10px;
            }
        }
    }

    #middle {
        position: relative;
        /* width: 1920px; */
        /* height: 100%; */

        background: #ffffff;
        /* display: flex;
        flex-direction: row; */

        .mid {
            /* position: absolute; */
            width: 100%;
            margin: 16px 98px 16px 98px;
            display: flex;
            flex-direction: row;
            /* align-items: center; */

            .middle-item {

                width: 758px;
                height: 391px;
                /* top: -33px; */
                background-color: #ffffff;
                border-radius: 8px;
                margin-right: 50px;
                text-align: center;
                text-align: center;
                overflow: hidden;
                .block.text-center {
                    text-align: center;
                    vertical-align: middle;

                    .el-carousel__item:nth-child(2n) {
                        background-color: #1569df;

                        >img {
                            width: 758px;
                            height: 391px;
                        }
                    }

                    .el-carousel__item:nth-child(2n + 1) {
                        background-color: #d3dce6;

                        >img {
                            /* // margin-top: -40px; */
                            width: 758px;
                            height: 391px;
                        }
                    }
                }
            }

            .middle-text {
                /* position: absolute; */
                /* margin: 0 328px 0 1118px; */
                top: -33px;

                .first {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    .firstOne {
                        width: 96px;
                        height: 33px;
                        font-weight: 500;
                        line-height: 33px;
                        color: #121527;
                        font-size: 24px;
                    }

                    .firstTwo {
                        width: 56px;
                        height: 20px;
                        font-size: 14px;
                        font-weight: 500;
                        color: #002affe8;
                        line-height: 20px;
                        cursor: pointer;
                    }
                }

                .second {
                    width: 474px;
                    margin: 22px 0 17px 0;
                    cursor: pointer;

                    >span {
                        width: 441px;
                        height: 24px;
                        font-size: 16px;
                        font-weight: 400;
                        color: #121527;
                        line-height: 24px;
                        cursor: pointer;
                    }

                    >div {
                        color: #71737D;
                        font-size: 12px;
                        height: 17px;
                        line-height: 17px;
                        font-weight: 400;
                        margin: 7px 0 17px 0;

                        >span {
                            margin-right: 16px;
                        }
                    }
                }

                .second:hover {
                    box-shadow: 5px 2px 5px rgba(180, 180, 180, 0.6)
                }
            }
        }
    }
</style>