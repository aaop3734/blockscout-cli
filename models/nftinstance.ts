import { AddressParam } from './address-param'
import { TokenInfo } from './token-info'
/**
 *
 * @export
 * @interface NFTInstance
 */
export interface NFTInstance {
  /**
   *
   * @type {boolean}
   * @memberof NFTInstance
   */
  isUnique: boolean
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  holderAddressHash?: string
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  imageUrl?: string
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  animationUrl?: string
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  externalAppUrl?: string
  /**
   *
   * @type {any}
   * @memberof NFTInstance
   */
  metadata?: any
  /**
   *
   * @type {AddressParam}
   * @memberof NFTInstance
   */
  owner: AddressParam
  /**
   *
   * @type {TokenInfo}
   * @memberof NFTInstance
   */
  token: TokenInfo
}
