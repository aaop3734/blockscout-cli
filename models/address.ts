import { AddressTag } from './address-tag'
import { TokenInfo } from './token-info'
import { WatchlistName } from './watchlist-name'
/**
 *
 * @export
 * @interface Address
 */
export interface Address {
  /**
   *
   * @type {string}
   * @memberof Address
   */
  creator_address_hash?: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  creation_tx_hash?: string
  /**
   *
   * @type {TokenInfo}
   * @memberof Address
   */
  token?: TokenInfo
  /**
   *
   * @type {string}
   * @memberof Address
   */
  coin_balance?: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  exchange_rate?: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  implementation_address?: string
  /**
   *
   * @type {number}
   * @memberof Address
   */
  block_number_balance_updated_at?: number
  /**
   *
   * @type {string}
   * @memberof Address
   */
  hash: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  implementation_name?: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  name?: string
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  is_contract?: boolean
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof Address
   */
  private_tags?: Array<AddressTag>
  /**
   *
   * @type {Array<WatchlistName>}
   * @memberof Address
   */
  watchlist_names?: Array<WatchlistName>
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof Address
   */
  public_tags?: Array<AddressTag>
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  is_verified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_beacon_chain_withdrawals?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_custom_methods_read?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_custom_methods_write?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_decompiled_code?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_logs?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_methods_read?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_methods_write?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_methods_read_proxy?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_methods_write_proxy?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_token_transfers?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_tokens?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  has_validated_blocks?: boolean
}
