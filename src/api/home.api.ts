/** * 首⻚-广告区域-小程序 *
 * @param distributionSite
 * 广告区域展示位置（投放位置投放位置，1为首⻚，2为分类商品⻚）
 * 默认是1 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({ method: 'GET', url: '/home/banner', data: { distributionSite } })
}

/**
 * 首⻚-前台分类-小程序
 * */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/category/index'
  })
}
/** * 首⻚-热⻔推荐-小程序 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot'
  })
}
