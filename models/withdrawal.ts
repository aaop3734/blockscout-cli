import { AddressParam } from './address-param'
/**
 *
 * @export
 * @interface Withdrawal
 */
export interface Withdrawal {
  /**
   *
   * @type {number}
   * @memberof Withdrawal
   */
  index: number
  /**
   *
   * @type {string}
   * @memberof Withdrawal
   */
  amount: string
  /**
   *
   * @type {number}
   * @memberof Withdrawal
   */
  validator_index: number
  /**
   *
   * @type {AddressParam}
   * @memberof Withdrawal
   */
  receiver?: AddressParam
  /**
   *
   * @type {number}
   * @memberof Withdrawal
   */
  block_number?: number
  /**
   *
   * @type {string}
   * @memberof Withdrawal
   */
  timestamp?: string
}
