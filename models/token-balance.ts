import { NFTInstance } from './nftinstance'
import { Token } from './token'
/**
 *
 * @export
 * @interface TokenBalance
 */
export interface TokenBalance {
  /**
   *
   * @type {NFTInstance}
   * @memberof TokenBalance
   */
  tokenInstance?: NFTInstance
  /**
   *
   * @type {string}
   * @memberof TokenBalance
   */
  value: string
  /**
   *
   * @type {string}
   * @memberof TokenBalance
   */
  tokenId: string
  /**
   *
   * @type {Token}
   * @memberof TokenBalance
   */
  token: Token
}
