/**
 *
 * @export
 * @interface StatsResponse
 */
export interface StatsResponse {
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  total_blocks: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  total_addresses: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  total_transactions: string
  /**
   *
   * @type {number}
   * @memberof StatsResponse
   */
  average_block_time: number
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  coin_price: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  total_gas_used: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  transactions_today: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  gas_used_today: string
  /**
   *
   * @type {any}
   * @memberof StatsResponse
   */
  gas_prices: any
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  static_gas_price: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  market_cap: string
  /**
   *
   * @type {number}
   * @memberof StatsResponse
   */
  network_utilization_percentage: number
}
