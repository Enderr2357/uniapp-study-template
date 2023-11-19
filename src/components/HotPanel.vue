<script setup lang="ts">
//
</script>
<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in 4" :key="item">
      <view class="title">
        <text class="title-text">特惠推荐</text>
        <text class="title-desc">精选全攻略</text>
      </view>
      <navigator hover-class="none" url="/pages/hot/hot" class="cards">
        <image
          class="image"
          mode="aspectFit"
          src="https://img12.360buyimg.com/babel/s380x300_jfs/t1/190850/4/33545/27561/642256d8Fb6b9dcda/e040016eb75845f4.png"
        >
        </image>
        <image
          class="image"
          mode="aspectFit"
          src="https://img1.360buyimg.com/da/jfs/t1/120188/3/39222/94431/651272abF0b8c6b65/2566cee3f294b69e.jpg!q70.jpg"
        >
        </image>
      </navigator>
    </view>
  </view>
</template>
<style lang="scss">
/* 热⻔推荐 */
.hot {
  display: flex;
  flex-wrap: wrap;
  min-height: 508rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    position: relative;

    .title-desc {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid#eee;
    border-top: 1rpx solid#eee;

    .title {
      justify-content: start;
    }

    &:nth-child(2n) {
      border-right: 0 none;
    }

    &:nth-child(-n + 2) {
      border-top: 0 none;
    }

    .image {
      width: 150rpx;
      height: 150rpx;
    }
  }

  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
