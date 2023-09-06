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
  token_instance?: NFTInstance
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
  token_id: string
  /**
   *
   * @type {Token}
   * @memberof TokenBalance
   */
  token: Token
}
