import { AddressParam } from './address-param'
import { Reward } from './reward'
/**
 *
 * @export
 * @interface Block
 */
export interface Block {
  /**
   *
   * @type {string}
   * @memberof Block
   */
  base_fee_per_gas: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  burnt_fees: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  burnt_fees_percentage: number
  /**
   *
   * @type {string}
   * @memberof Block
   */
  difficulty: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  extra_data: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  gas_limit: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  gas_target_percentage: number
  /**
   *
   * @type {string}
   * @memberof Block
   */
  gas_used: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  gas_used_percentage: number
  /**
   *
   * @type {string}
   * @memberof Block
   */
  hash: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  height: number
  /**
   *
   * @type {AddressParam}
   * @memberof Block
   */
  miner: AddressParam
  /**
   *
   * @type {string}
   * @memberof Block
   */
  nonce: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  parent_hash: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  priority_fee: string
  /**
   *
   * @type {Array<Reward>}
   * @memberof Block
   */
  rewards: Array<Reward>
  /**
   *
   * @type {number}
   * @memberof Block
   */
  size: number
  /**
   *
   * @type {string}
   * @memberof Block
   */
  state_root: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  timestamp: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  total_difficulty: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  tx_count: number
  /**
   *
   * @type {string}
   * @memberof Block
   */
  tx_fees: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  type: string
  /**
   *
   * @type {Array<string>}
   * @memberof Block
   */
  uncles_hashes: Array<string>
  /**
   *
   * @type {number}
   * @memberof Block
   */
  withdrawals_count: number
}
