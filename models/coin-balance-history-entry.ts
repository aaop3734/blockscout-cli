/* tslint:disable */
/* eslint-disable */
/**
 * BlockScout API
 *
 * API for BlockScout web app
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aaop3734@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
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
