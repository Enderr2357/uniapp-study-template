<template>
  <CustomNavbar></CustomNavbar>
  <WSwiper :list="bannerList"></WSwiper>
  <CategoryPanel :list="categoryList"></CategoryPanel>
  <HotPanel :list="hotItemList"></HotPanel>
</template>
<script setup lang="ts">
import WSwiper from '@/components/wSwiper/wSwiper.vue'
import CustomNavbar from '../../components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/api/home.api'
import CategoryPanel from '@/components/CategoryPanel.vue'
import HotPanel from '@/components/HotPanel.vue'
//热门推荐
const hotItemList = ref<HotItem[]>([])
const getHotItemData = async () => {
  const res = await getHomeHotAPI()
  hotItemList.value = res.result
}

//种类
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
//轮播图
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(async () => {
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotItemData()])
})
</script>
<style lang="scss" scoped></style>
