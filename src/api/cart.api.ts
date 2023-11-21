/** 加入购物⻋ */
type CartParams = {
  /** 选中商品属性*/
  attrsText: string
  /** 加入购物⻋数量*/
  count: number
  /*** 商品id*/
  id: string
}
/** * 加入购物⻋ *
 *  @param data
 * 请求体参数 */
export const postMemberCartAPI = (data: CartParams) => {
  return http({
    method: 'POST',
    url: '/cart/add',
    data
  })
}
/** * 获取购物⻋列表 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/cart/list'
  })
}
/** 购物⻋类型 */
export type CartItem = {
  /** 商品 ID */
  id: string
  /**商品在数据库中Id */
  goodsId: string
  /** 商品名称 */
  name: string
  /** 图片 */
  picture: string
  /** 数量 */
  count: number
  /** 加入时价格 */
  price: number
  /** 当前的价格 */
  nowPrice: number
  /** 库存 */
  stock: number
  /** 是否选中 */
  selected: boolean
  /** 属性文字 */
  attrsText: string
  /** 是否为有效商品 */
  isEffective: boolean
}
/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/cart/remove',
    data
  })
}
/**
 * 修改购物车单品
 * @param skuId SKUID
 * @param data selected 选中状态 count 商品数量
 */
export const putMemberCartBySkuIdAPI = (data: { id: string; elected?: boolean; count?: number }) => {
  return http({
    method: 'PUT',
    url: `/cart/edit`,
    data
  })
}
