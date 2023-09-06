import { AddressWithTxCount } from '../models'
import { BaseResult } from './base-result'

/**
 *
 * @export
 * @interface AddressWithTxCountResult
 */
export interface AddressWithTxCountResult
  extends BaseResult<AddressWithTxCount> {
  /**
   *
   * @type {string}
   * @memberof AddressWithTxCountResult
   */
  exchange_rate: string
  /**
   *
   * @type {string}
   * @memberof AddressWithTxCountResult
   */
  total_supply: string
}
