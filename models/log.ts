import { AddressParam } from './address-param'
import { DecodedInputLog } from './decoded-input-log'
/**
 *
 * @export
 * @interface Log
 */
export interface Log {
  /**
   *
   * @type {AddressParam}
   * @memberof Log
   */
  address: AddressParam
  /**
   *
   * @type {string}
   * @memberof Log
   */
  block_hash?: string
  /**
   *
   * @type {number}
   * @memberof Log
   */
  block_number?: number
  /**
   *
   * @type {string}
   * @memberof Log
   */
  data: string
  /**
   *
   * @type {DecodedInputLog}
   * @memberof Log
   */
  decoded: DecodedInputLog
  /**
   *
   * @type {number}
   * @memberof Log
   */
  index: number
  /**
   *
   * @type {AddressParam}
   * @memberof Log
   */
  smart_contract: AddressParam
  /**
   *
   * @type {Array<string>}
   * @memberof Log
   */
  topics: Array<string>
  /**
   *
   * @type {string}
   * @memberof Log
   */
  tx_hash: string
}
