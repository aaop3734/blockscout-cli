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
  transaction_hash?: string
  /**
   *
   * @type {number}
   * @memberof CoinBalanceHistoryEntry
   */
  block_number: number
  /**
   *
   * @type {string}
   * @memberof CoinBalanceHistoryEntry
   */
  block_timestamp: string
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
