/**
 *
 * @export
 * @interface BaseResult
 */
export interface BaseResult<T> {
  /**
   * @type {Array <T>}
   * @memberof BaseResult
   */
  items: Array<T>
  /**
   * @type {any}
   * @memberof BaseResult
   */
  next_page_params: any
}
