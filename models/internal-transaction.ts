import { AddressParam } from './address-param'
/**
 *
 * @export
 * @interface InternalTransaction
 */
export interface InternalTransaction {
  /**
   *
   * @type {number}
   * @memberof InternalTransaction
   */
  block: number
  /**
   *
   * @type {AddressParam}
   * @memberof InternalTransaction
   */
  createdContract: AddressParam
  /**
   *
   * @type {string}
   * @memberof InternalTransaction
   */
  error: string
  /**
   *
   * @type {AddressParam}
   * @memberof InternalTransaction
   */
  from: AddressParam
  /**
   *
   * @type {string}
   * @memberof InternalTransaction
   */
  gasLimit: string
  /**
   *
   * @type {number}
   * @memberof InternalTransaction
   */
  index: number
  /**
   *
   * @type {boolean}
   * @memberof InternalTransaction
   */
  success: boolean
  /**
   *
   * @type {string}
   * @memberof InternalTransaction
   */
  timestamp: string
  /**
   *
   * @type {AddressParam}
   * @memberof InternalTransaction
   */
  to: AddressParam
  /**
   *
   * @type {string}
   * @memberof InternalTransaction
   */
  transactionHash: string
  /**
   *
   * @type {string}
   * @memberof InternalTransaction
   */
  type: string
  /**
   *
   * @type {string}
   * @memberof InternalTransaction
   */
  value: string
}
