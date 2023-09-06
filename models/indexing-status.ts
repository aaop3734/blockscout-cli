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
  finished_indexing: boolean
  /**
   *
   * @type {boolean}
   * @memberof IndexingStatus
   */
  finished_indexing_blocks: boolean
  /**
   *
   * @type {string}
   * @memberof IndexingStatus
   */
  indexed_blocks_ratio: string
  /**
   *
   * @type {string}
   * @memberof IndexingStatus
   */
  indexed_internal_transactions_ratio: string
}
