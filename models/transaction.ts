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
  gas_limit: number
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
  exchange_rate: string
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
  tx_burnt_fee: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  max_fee_per_gas: string
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
  gas_price: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  priority_fee: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  base_fee_per_gas: string
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
  token_transfers: Array<TokenTransfer>
  /**
   *
   * @type {Array<string>}
   * @memberof Transaction
   */
  tx_types: Array<string>
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  gas_used: string
  /**
   *
   * @type {AddressParam}
   * @memberof Transaction
   */
  created_contract: AddressParam
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
  has_error_in_internal_txs: boolean
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
  decoded_input: DecodedInput
  /**
   *
   * @type {boolean}
   * @memberof Transaction
   */
  token_transfers_overflow: boolean
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  raw_input: string
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
  max_priority_fee_per_gas: string
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  revert_reason: string
  /**
   *
   * @type {any}
   * @memberof Transaction
   */
  confirmation_duration: any
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  tx_tag: string
}
