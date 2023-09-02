import { SearchResultAddressOrContract } from './search-result-address-or-contract'
import { SearchResultBlock } from './search-result-block'
import { SearchResultToken } from './search-result-token'
import { SearchResultTransaction } from './search-result-transaction'
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   *
   * @type {Array<SearchResultToken | SearchResultAddressOrContract | SearchResultBlock | SearchResultTransaction>}
   * @memberof InlineResponse200
   */
  items: Array<
    | SearchResultToken
    | SearchResultAddressOrContract
    | SearchResultBlock
    | SearchResultTransaction
  >
  /**
   *
   * @type {any}
   * @memberof InlineResponse200
   */
  nextPageParams: any
}
