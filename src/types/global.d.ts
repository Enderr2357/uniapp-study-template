/** 通用分⻚结果类型 */
declare interface PageResult<T> {
  /** 列表数据 */ list: T[]
  /** 总条数 */
  counts: number
  /** 当前⻚数 */
  page: number
  /** 总⻚数 */
  pages: number
  /** 每⻚条数 */
  pageSize: number
}
/** 通用分⻚参数类型 */
declare interface PageParams {
  /** ⻚码：默认值为 1 */
  page?: number
  /** ⻚大小：默认值为 10 */
  pageSize?: number
}
/** 通用商品类型 */
type GoodsItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
type GuessItem = GoodsItem
/** 热⻔推荐 */
type HotResult = {
  /** id信息 */
  id: string
  /** 活动图片 */
  bannerPicture: string
  /** 活动标题 */
  title: string
  /** 子类选项 */
  subTypes: SubTypeItem[]
}
/** 热⻔推荐-子类选项 */
type SubTypeItem = {
  /** 子类id */
  id: string
  /** 子类标题 */
  title: string
  /** 子类对应的商品集合 */
  goodsItems: PageResult<GoodsItem>
}
/** 一级分类项 */
type CategoryTopItem = {
  /** 二级分类集合[ 二级分类项 ] */
  children: CategoryChildItem[]
  /** 一级分类id */
  id: string
  /** 一级分类图片集[ 一级分类图片项 ] */
  imageBanners: string[]
  /** 一级分类名称 */
  name: string
  /** 一级分类图片 */
  picture: string
}
/** 二级分类项 */
type CategoryChildItem = {
  /** 商品集合[ 商品项 ] */
  goods: GoodsItem[]
  /** 二级分类id */
  id: string
  /** 二级分类名称 */
  name: string
  /** 二级分类图片 */
  picture: string
}
