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
  baseFeePerGas: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  burntFees: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  burntFeesPercentage: number
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
  extraData: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  gasLimit: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  gasTargetPercentage: number
  /**
   *
   * @type {string}
   * @memberof Block
   */
  gasUsed: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  gasUsedPercentage: number
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
  parentHash: string
  /**
   *
   * @type {string}
   * @memberof Block
   */
  priorityFee: string
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
  stateRoot: string
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
  totalDifficulty: string
  /**
   *
   * @type {number}
   * @memberof Block
   */
  txCount: number
  /**
   *
   * @type {string}
   * @memberof Block
   */
  txFees: string
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
  unclesHashes: Array<string>
  /**
   *
   * @type {number}
   * @memberof Block
   */
  withdrawalsCount: number
}
