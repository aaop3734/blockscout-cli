/**
 *
 * @export
 * @interface Token
 */
export interface Token {
  /**
   *
   * @type {string}
   * @memberof Token
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Token
   */
  decimals: string
  /**
   *
   * @type {string}
   * @memberof Token
   */
  symbol: string
  /**
   *
   * @type {string}
   * @memberof Token
   */
  address: string
  /**
   *
   * @type {string}
   * @memberof Token
   */
  type: string
  /**
   *
   * @type {number}
   * @memberof Token
   */
  holders: number
  /**
   *
   * @type {string}
   * @memberof Token
   */
  exchange_rate: string
  /**
   *
   * @type {string}
   * @memberof Token
   */
  total_supply: string
}
