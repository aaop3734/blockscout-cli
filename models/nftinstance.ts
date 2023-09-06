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
  is_unique: boolean
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
  holder_address_hash?: string
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  image_url?: string
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  animation_url?: string
  /**
   *
   * @type {string}
   * @memberof NFTInstance
   */
  external_app_url?: string
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
