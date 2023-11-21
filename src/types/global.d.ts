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
/** 商品信息 */
type GoodsResult = {
  /** 主键id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品描述 */
  description: string
  /** 当前价格 */
  price: number
  /** 原价 */
  oldPrice: number
  /** 商品属性集合[ 属性信息 ] */
  properties: DetailsPropertyItem[]
  /** 商品详情图片集合[ 图片链接 ] */
  productPictures: string[]
  /** 主图图片集合[ 主图图片链接 ] */
  mainPictures: string[]
  /** 同类商品[ 商品信息 ] */
  similarProducts: GoodsItem[]
  /** sku集合[ sku信息 ] */
  skus: SkuItem[]
  /** 可选规格集合备注[ 可选规格信息 ] */
  specs: SpecItem[]
  /** 用户地址列表[ 地址信息 ] */
  userAddresses: AddressItem[]
}
/** 属性信息 */
type DetailsPropertyItem = {
  /** 属性名称 */
  name: string
  /** 属性值 */
  value: string
}
/** sku信息 */
type SkuItem = {
  /** id */
  id: string
  /** goodsId */
  oodsId: string
  /** 库存 */
  inventory: number
  /** 原价 */
  oldPrice: number
  /** sku图片 */
  cover: string
  /** 当前价格 */
  price: number
  /** sku编码 */
  //
  skuCode: string
  /** 规格集合[ 规格信息 ] */
  specs: SkuSpecItem[]
}
/** 规格信息 */
type SkuSpecItem = {
  /** 规格名称 */
  name: string
  /** 可选值名称 */
  valueName: string
}
/** 可选规格信息 */
type SpecItem = {
  /** 规格名称 */
  name: string
  /** 可选值集合[ 可选值信息 ] */
  value: SpecValueItem[]
}
/** 可选值信息 */
type SpecValueItem = {
  /** 是否可售 */
  available: boolean
  /** 可选值备注 */
  desc: string
  /** 可选值名称 */
  name: string
  /** 可选值图片链接 */
  picture: string
}
/** 地址信息 */
type AddressItem = {
  /** 收货人姓名 */
  receiver: string
  /** 联系方式 */
  contact: string
  /** 省份编码 */
  provinceCode: string
  /** 城市编码 */
  cityCode: string
  /** 区/县编码 */
  countyCode: string
  /** 详细地址 */
  address: string
  /** 默认地址，1为是，0为否 */
  isDefault: number
  /** 收货地址 id */
  id: string
}
