<template>
  <CustomNavbar></CustomNavbar>
  <WSwiper :list="bannerList"></WSwiper>
  <CategoryPanel :list="categoryList"></CategoryPanel>
</template>
<script setup lang="ts">
import WSwiper from '@/components/wSwiper/wSwiper.vue'
import CustomNavbar from '../../components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/api/home.api'
import CategoryPanel from '@/components/CategoryPanel.vue'
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(async () => {
  await Promise.all([getHomeBannerData(), getHomeCategoryData()])
})
</script>
<style lang="scss" scoped></style>
