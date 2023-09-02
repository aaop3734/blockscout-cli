import { AddressParam } from './address-param'
import { DecodedInput } from './decoded-input'
import { Fee } from './fee'
import { TokenTransfer } from './token-transfer'
import { TransactionAction } from './transaction-action'
/**
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  timestamp: string
  /**
   *
   * @type {Fee}
   * @memberof Transaction
   */
  fee: Fee
  /**
   *
   * @type {number}
   * @memberof Transaction
   */
  gasLimit: number
  /**
   *
   * @type {number}
   * @memberof Transaction
   */
  block: number
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  status: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  method: string
  /**
   *
   * @type {number}
   * @memberof Transaction
   */
  confirmations: number
  /**
   *
   * @type {number}
   * @memberof Transaction
   */
  type: number
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  exchangeRate: string
  /**
   *
   * @type {AddressParam}
   * @memberof Transaction
   */
  to: AddressParam
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  txBurntFee: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  maxFeePerGas: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  result: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  hash: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  gasPrice: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  priorityFee: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  baseFeePerGas: string
  /**
   *
   * @type {AddressParam}
   * @memberof Transaction
   */
  from: AddressParam
  /**
   *
   * @type {Array<TokenTransfer>}
   * @memberof Transaction
   */
  tokenTransfers: Array<TokenTransfer>
  /**
   *
   * @type {Array<string>}
   * @memberof Transaction
   */
  txTypes: Array<string>
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  gasUsed: string
  /**
   *
   * @type {AddressParam}
   * @memberof Transaction
   */
  createdContract: AddressParam
  /**
   *
   * @type {number}
   * @memberof Transaction
   */
  position: number
  /**
   *
   * @type {number}
   * @memberof Transaction
   */
  nonce: number
  /**
   *
   * @type {boolean}
   * @memberof Transaction
   */
  hasErrorInInternalTxs: boolean
  /**
   *
   * @type {Array<TransactionAction>}
   * @memberof Transaction
   */
  actions: Array<TransactionAction>
  /**
   *
   * @type {DecodedInput}
   * @memberof Transaction
   */
  decodedInput: DecodedInput
  /**
   *
   * @type {boolean}
   * @memberof Transaction
   */
  tokenTransfersOverflow: boolean
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  rawInput: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  value: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  maxPriorityFeePerGas: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  revertReason: string
  /**
   *
   * @type {any}
   * @memberof Transaction
   */
  confirmationDuration: any
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  txTag: string
}
