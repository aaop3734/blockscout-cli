import { AddressParam } from './address-param'
/**
 *
 * @export
 * @interface SmartContractForList
 */
export interface SmartContractForList {
  /**
   *
   * @type {AddressParam}
   * @memberof SmartContractForList
   */
  address: AddressParam
  /**
   *
   * @type {string}
   * @memberof SmartContractForList
   */
  coinBalance: string
  /**
   *
   * @type {string}
   * @memberof SmartContractForList
   */
  compilerVersion: string
  /**
   *
   * @type {string}
   * @memberof SmartContractForList
   */
  language: string
  /**
   *
   * @type {boolean}
   * @memberof SmartContractForList
   */
  hasConstructorArgs: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContractForList
   */
  optimizationEnabled: boolean
  /**
   *
   * @type {number}
   * @memberof SmartContractForList
   */
  txCount: number
  /**
   *
   * @type {string}
   * @memberof SmartContractForList
   */
  verifiedAt: string
  /**
   *
   * @type {number}
   * @memberof SmartContractForList
   */
  marketCap?: number
}
