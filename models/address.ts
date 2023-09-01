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
  creatorAddressHash?: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  creationTxHash?: string
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
  coinBalance?: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  exchangeRate?: string
  /**
   *
   * @type {string}
   * @memberof Address
   */
  implementationAddress?: string
  /**
   *
   * @type {number}
   * @memberof Address
   */
  blockNumberBalanceUpdatedAt?: number
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
  implementationName?: string
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
  isContract?: boolean
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof Address
   */
  privateTags?: Array<AddressTag>
  /**
   *
   * @type {Array<WatchlistName>}
   * @memberof Address
   */
  watchlistNames?: Array<WatchlistName>
  /**
   *
   * @type {Array<AddressTag>}
   * @memberof Address
   */
  publicTags?: Array<AddressTag>
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  isVerified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasBeaconChainWithdrawals?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasCustomMethodsRead?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasCustomMethodsWrite?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasDecompiledCode?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasLogs?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasMethodsRead?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasMethodsWrite?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasMethodsReadProxy?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasMethodsWriteProxy?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasTokenTransfers?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasTokens?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Address
   */
  hasValidatedBlocks?: boolean
}
