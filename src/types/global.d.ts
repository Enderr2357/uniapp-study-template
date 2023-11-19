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
