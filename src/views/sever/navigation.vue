<template>
  <div id="top">
    <div id="banner">
      <div class="banner-left">
        <div class="left-imgItem">
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1b63d97203deaa6a6396e9812644124199d807e38f27e80d661484c1af156b74" />
          <div class="left-textItem">
            <span class="textItem-top">全国数据资产登记服务平台</span>
            <span class="textItem-bottom">Registration&nbsp;Service&nbsp;Platform&nbsp;For&nbsp;Data&nbsp;Assets</span>
          </div>
        </div>
        <div class="left-navigation">
          <el-tabs class="demo-tabs">
            <el-tab-pane label="首页" name="1">首页</el-tab-pane>
            <el-tab-pane label="数据登记" name="2">数据登记</el-tab-pane>
            <el-tab-pane label="数据评价" name="3">数据评价</el-tab-pane>
            <el-tab-pane label="培训服务" name="4">培训服务</el-tab-pane>
            <el-tab-pane label="政策资讯" name="5">政策资讯</el-tab-pane>
            <el-tab-pane label="数据地图" name="6">数据地图</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="banner-right">
        <el-row class="login">
          <el-button>登录</el-button>
          <el-button type="primary">立即注册</el-button>
        </el-row>
      </div>
    </div>
    <div id="header">
      <div class="block text-center" m="t-4">
        <el-carousel trigger="click" height="342px">
          <el-carousel-item v-for="item in imgLists" :key:string="item">
            <img :src="item.url" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="search">
        <el-input v-model="input3" placeholder="请输入登记数据名称/数据资产编号" class="input-with-select">
          <template #prepend>
            <el-select v-model="select" slot="prepend" class="elselect" placeholder="数据资产" style="width: 115px"
              :popper-append-to-body="false">
              <el-option label="数据资产" value="1" />
              <el-option label="证书" value="2" />
              <el-option label="报告" value="3" />
              <el-option label="数据资产入表" value="4" />
            </el-select>
          </template>
          <template #append>
            <el-button class="btn1">
              <div class="rightItem">
                <img
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4172a7281aa070c93ca08c34f2365151fc455b2a3b48547c47086e029ddca3f5" />
                <span>高级搜索</span>
              </div>
            </el-button>
            <el-button class="btn2" slot="append" >
              <div class="searchText">
                <span>搜索</span>
              </div>
            </el-button>
          </template>
        </el-input>
      </div>
    </div>
    <div id="sever">
      <div class="severItem">
        <div>
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4172a7281aa070c93ca08c34f2365151fc455b2a3b48547c47086e029ddca3f5" />
        </div>
        <span>登记数据资产</span>
      </div>
      <div class="severItem">
        <div>
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4172a7281aa070c93ca08c34f2365151fc455b2a3b48547c47086e029ddca3f5" />
        </div>
        <span>数据资产查证</span>
      </div>
      <div class="severItem">
        <div>
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4172a7281aa070c93ca08c34f2365151fc455b2a3b48547c47086e029ddca3f5" />
        </div>
        <span>机构入驻</span>
      </div>
      <div class="severItem">
        <div>
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4172a7281aa070c93ca08c34f2365151fc455b2a3b48547c47086e029ddca3f5" />
        </div>
        <span>培训服务</span>
      </div>
      <div class="severItem">
        <div>
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4172a7281aa070c93ca08c34f2365151fc455b2a3b48547c47086e029ddca3f5" />
        </div>
        <span>咨询服务</span>
      </div>
    </div>
  </div>
</template>
<script  lang="ts">
import { defineComponent } from 'vue';
// import { ref } from 'vue';
// import { Search } from '@element-plus/icons-vue';
export default defineComponent({
  name: 'navigation',
  data() {

    return {
      input3: '',
      select: '',
      imgLists: [
        { url: "http://testbuild.youedata.cc/shujuzichanshuju-155/assetdatauploadfile/minard/upload/images/1686904800419ERJ4RUUX.png" },
        { url: "http://testbuild.youedata.cc/shujuzichanshuju-155/assetdatauploadfile/minard/upload/images/1686904810372F5AU1SM7.jpeg" },
      ],
    }
  },
});
</script>
<style lang="less" scoped>
#top {
  width: 1920px;
  height: 556px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  #banner {
    width: 1920px;
    height: 64px;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .banner-left {
      // position: absolute;
      display: flex;
      flex-direction: row;
      text-align: center;

      .left-imgItem {
        // position: absolute;
        width: 251px;
        height: 40px;
        margin: 12px 0 12px 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        >img {
          width: 40px;
          height: 40px;
        }

        .left-textItem {
          margin: 0 10px;
          text-align: left;

          .textItem-top {
            width: 202px;
            height: 16px;
            color: rgba(2, 16, 32, 1);
            font-size: 16px;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            line-height: 24px
          }

          .textItem-bottom {
            width: 197px;
            height: 10px;
            color: #1953C5;
            font-size: 8px;
            letter-spacing: -1px;
            font-weight: 300;
            line-height: 15px;
          }

        }
      }

      .left-navigation {
        margin: 20px 69px;
        border-bottom: none;

        .demo-tabs>.el-tabs__content {
          width: 64px;
          height: 24px;
          font-size: 16px;
          font-weight: 400;
          color: #252B3A;
          line-height: 24px
        }

        ::v-deep .el-tabs__nav-wrap::after {
          height: 0px;
        }
      }
    }

    .banner-right {
      margin: 12px 40px;
      right: 0;
    }

  }

  #header {
    width: 1920px;
    height: 342px;
    border: 1px solid rgba(151, 151, 151, 1);
    position: relative;

    .block.text-center {
      text-align: center;
      vertical-align: middle;

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;

        >img {
          width: 1920px;
          height: 1042px;
        }
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;

        >img {
          margin-top: -40px;
          width: 1920px;
          height: 420px;
        }
      }
    }

    .search {
      width: 1046px;
      height: 50px;
      display: flex;
      flex-direction: row;
      // align-items: center;
      margin: 143px 522px 149px 438px;
      position: absolute;
      top: 0;
      left: 0;

    
      :deep(.el-select) {
        display: inline-block;
        margin: 0;
        color: #121527;
        border: 0;

      }

      :deep(.el-input) {
        --el-input-border-color: 0;
        --el-input-hover-border-color: 0;
        --el-input-focus-border-color: 0;
        font-size: 16px;

      }

      :deep(.el-input_inner) {
        color: #121527;

      }

      :deep(.btn1) {
        margin-right: 16px;
        color: #1953C5;
      }

      :deep(.btn2) {
        background: #1953C5;
        height: 50px;
        width: 86px;
        border-radius: 0px 4px 4px 0px;
        color: #ffffff;
        text-align: center;
        vertical-align: middle;
      }
    }
  }

  #sever {
    width: 1264px;
    height: 110px;
    background: #ffffff;
    box-shadow: 5px 5px 10px 2px rgba(215, 218, 224, 0.4);
    border-radius: 8px;
    position: relative;
    float: left;
    top: -30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #121527;

    .severItem {
      width: 224px;
      height: 68px;
      border: 1px solid #E0E0E0;
      border-radius: 4px;
      font-size: 18px;
      line-height: 26px;
      margin: 21px 24px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 14px 0 14px 21px;
      cursor: pointer;

      >div {
        width: 40px;
        height: 40px;
        background: rgba(#1953c5, 0.1);
        position: relative;
        padding: 20px;
        margin-right: 12px;
        color: #121527;
        font-size: 18px;
        line-height: 26px;
        font-weight: 500;

        >img {
          position: absolute;
          top: 15px;
          left: 15px;
        }
      }
    }
  }
}
</style>