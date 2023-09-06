import { AddressParam } from './address-param'
import { ERC20Or1155OrCoinChange } from './erc20-or1155-or-coin-change'
import { NFTChangesArray } from './nftchanges-array'
import { TokenInfo } from './token-info'
/**
 *
 * @export
 * @interface StateChange
 */
export interface StateChange {
  /**
   *
   * @type {TokenInfo}
   * @memberof StateChange
   */
  token?: TokenInfo
  /**
   *
   * @type {string}
   * @memberof StateChange
   */
  type: string
  /**
   *
   * @type {boolean}
   * @memberof StateChange
   */
  is_miner: boolean
  /**
   *
   * @type {AddressParam}
   * @memberof StateChange
   */
  address: AddressParam
  /**
   *
   * @type {string}
   * @memberof StateChange
   */
  balance_before?: string
  /**
   *
   * @type {string}
   * @memberof StateChange
   */
  balance_after?: string
  /**
   *
   * @type {string}
   * @memberof StateChange
   */
  token_id?: string
  /**
   *
   * @type {NFTChangesArray | ERC20Or1155OrCoinChange}
   * @memberof StateChange
   */
  change?: NFTChangesArray | ERC20Or1155OrCoinChange
}
