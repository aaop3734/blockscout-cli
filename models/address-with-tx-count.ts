import { Address } from './address'
import { AddressTag } from './address-tag'
import { TokenInfo } from './token-info'
import { WatchlistName } from './watchlist-name'
/**
 *
 * @export
 * @interface AddressWithTxCount
 */
export interface AddressWithTxCount extends Address {
  /**
   *
   * @type {string}
   * @memberof AddressWithTxCount
   */
  tx_count: string
}
