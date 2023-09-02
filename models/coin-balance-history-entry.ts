/**
 *
 * @export
 * @interface CoinBalanceHistoryEntry
 */
export interface CoinBalanceHistoryEntry {
  /**
   *
   * @type {string}
   * @memberof CoinBalanceHistoryEntry
   */
  transactionHash?: string
  /**
   *
   * @type {number}
   * @memberof CoinBalanceHistoryEntry
   */
  blockNumber: number
  /**
   *
   * @type {string}
   * @memberof CoinBalanceHistoryEntry
   */
  blockTimestamp: string
  /**
   *
   * @type {string}
   * @memberof CoinBalanceHistoryEntry
   */
  delta: string
  /**
   *
   * @type {string}
   * @memberof CoinBalanceHistoryEntry
   */
  value: string
}
