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
  totalBlocks: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  totalAddresses: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  totalTransactions: string
  /**
   *
   * @type {number}
   * @memberof StatsResponse
   */
  averageBlockTime: number
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  coinPrice: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  totalGasUsed: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  transactionsToday: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  gasUsedToday: string
  /**
   *
   * @type {any}
   * @memberof StatsResponse
   */
  gasPrices: any
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  staticGasPrice: string
  /**
   *
   * @type {string}
   * @memberof StatsResponse
   */
  marketCap: string
  /**
   *
   * @type {number}
   * @memberof StatsResponse
   */
  networkUtilizationPercentage: number
}
