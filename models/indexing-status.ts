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
 * @interface IndexingStatus
 */
export interface IndexingStatus {
  /**
   *
   * @type {boolean}
   * @memberof IndexingStatus
   */
  finishedIndexing: boolean
  /**
   *
   * @type {boolean}
   * @memberof IndexingStatus
   */
  finishedIndexingBlocks: boolean
  /**
   *
   * @type {string}
   * @memberof IndexingStatus
   */
  indexedBlocksRatio: string
  /**
   *
   * @type {string}
   * @memberof IndexingStatus
   */
  indexedInternalTransactionsRatio: string
}
