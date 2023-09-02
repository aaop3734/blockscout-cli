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
  txCount: string
}