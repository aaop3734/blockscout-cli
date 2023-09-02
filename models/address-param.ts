import { AddressTag } from './address-tag'
import { WatchlistName } from './watchlist-name'
/**
 *
 * @export
 * @interface AddressParam
 */
export interface AddressParam {
  /**
   *
   * @type {string}
   * @memberof AddressParam
   */
  hash: string
  /**
   *
   * @type {string}
   * @memberof AddressParam
   */
  implementationName: string
  /**
   *
   * @type {string}
   * @memberof AddressParam
   */
  name: string
  /**
   *
   * @type {boolean}
   * @memberof AddressParam
   */
  isContract: boolean
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof AddressParam
   */
  privateTags: Array<AddressTag>
  /**
   *
   * @type {Array<WatchlistName>}
   * @memberof AddressParam
   */
  watchlistNames: Array<WatchlistName>
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof AddressParam
   */
  publicTags: Array<AddressTag>
  /**
   *
   * @type {boolean}
   * @memberof AddressParam
   */
  isVerified: boolean
}
