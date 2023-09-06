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
  implementation_name: string
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
  is_contract: boolean
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof AddressParam
   */
  private_tags: Array<AddressTag>
  /**
   *
   * @type {Array<WatchlistName>}
   * @memberof AddressParam
   */
  watchlist_names: Array<WatchlistName>
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof AddressParam
   */
  public_tags: Array<AddressTag>
  /**
   *
   * @type {boolean}
   * @memberof AddressParam
   */
  is_verified: boolean
}
