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
