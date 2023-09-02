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
  isMiner: boolean
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
  balanceBefore?: string
  /**
   *
   * @type {string}
   * @memberof StateChange
   */
  balanceAfter?: string
  /**
   *
   * @type {string}
   * @memberof StateChange
   */
  tokenId?: string
  /**
   *
   * @type {NFTChangesArray | ERC20Or1155OrCoinChange}
   * @memberof StateChange
   */
  change?: NFTChangesArray | ERC20Or1155OrCoinChange
}