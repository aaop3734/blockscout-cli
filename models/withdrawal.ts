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
  validatorIndex: number
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
  blockNumber?: number
  /**
   *
   * @type {string}
   * @memberof Withdrawal
   */
  timestamp?: string
}
