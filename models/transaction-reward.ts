import { AddressParam } from './address-param'
/**
 *
 * @export
 * @interface TransactionReward
 */
export interface TransactionReward {
  /**
   *
   * @type {any}
   * @memberof TransactionReward
   */
  types: any
  /**
   *
   * @type {string}
   * @memberof TransactionReward
   */
  emissionReward: string
  /**
   *
   * @type {string}
   * @memberof TransactionReward
   */
  blockHash: string
  /**
   *
   * @type {AddressParam}
   * @memberof TransactionReward
   */
  from: AddressParam
  /**
   *
   * @type {AddressParam}
   * @memberof TransactionReward
   */
  to: AddressParam
}
