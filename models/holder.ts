import { AddressParam } from './address-param'
import { TokenInfo } from './token-info'
/**
 *
 * @export
 * @interface Holder
 */
export interface Holder {
  /**
   *
   * @type {AddressParam}
   * @memberof Holder
   */
  address: AddressParam
  /**
   *
   * @type {string}
   * @memberof Holder
   */
  value: string
  /**
   *
   * @type {string}
   * @memberof Holder
   */
  tokenId?: string
  /**
   *
   * @type {TokenInfo}
   * @memberof Holder
   */
  token: TokenInfo
}
