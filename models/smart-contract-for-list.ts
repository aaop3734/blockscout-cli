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
  coin_balance: string
  /**
   *
   * @type {string}
   * @memberof SmartContractForList
   */
  compiler_version: string
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
  has_constructor_args: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContractForList
   */
  optimization_enabled: boolean
  /**
   *
   * @type {number}
   * @memberof SmartContractForList
   */
  tx_count: number
  /**
   *
   * @type {string}
   * @memberof SmartContractForList
   */
  verified_at: string
  /**
   *
   * @type {number}
   * @memberof SmartContractForList
   */
  market_cap?: number
}
